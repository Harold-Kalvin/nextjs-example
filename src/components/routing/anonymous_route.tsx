"use client";

import useUser from "hooks/use_user";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function AnonymousRoute(props: { children: ReactNode }) {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user, router]);

  if (user) {
    return null;
  }
  return props.children;
}
