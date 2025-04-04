"use client";

import useUser from "hooks/use_user";

export default function Home() {
  const user = useUser();

  return (
    <>
      {user && (
        <p>
          Hello <b>{user.username}</b>
        </p>
      )}
    </>
  );
}
