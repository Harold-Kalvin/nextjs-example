"use client";

import { UserContext } from "providers/user_provider";
import { useContext } from "react";

export default function useUser() {
  const user = useContext(UserContext);
  return user;
}
