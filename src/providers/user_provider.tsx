"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "lib/auth";
import { User } from "types/auth";
import React, { createContext, ReactNode, useEffect } from "react";

export const UserContext = createContext<User | null | undefined>(null);

/**
 * This provider must be placed high in the component tree, ideally at the root level,
 * to ensure the `getUser` API request runs and fetches the user data when the app loads.
 * This first "GET" request ensures that the CSRF token is set in the browser for subsequent
 * requests.
 *
 * @param {ReactNode} children - Child components that will have access to the UserContext.
 */
export function UserProvider(props: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 1000 * 60 * 60, // cache for 60 minutes
  });

  // when receiving "auth.changed" event, invalidate cache to re-fetch user data
  useEffect(() => {
    const handleAuthChange = () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    };

    document.addEventListener("auth.changed", handleAuthChange);
    return () => document.removeEventListener("auth.changed", handleAuthChange);
  }, [queryClient]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.log(error);
    return <div>Error loading session</div>;
  }

  // if not user, remove related cookie

  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
}
