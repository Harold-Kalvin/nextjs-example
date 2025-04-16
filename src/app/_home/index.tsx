"use client";

import useUser from "hooks/use_user";

export default function Home() {
  const user = useUser();

  return (
    <>
      {user && (
        <p className="text-lg">
          Hello <span className="font-semibold">{user.username}</span>
        </p>
      )}
    </>
  );
}
