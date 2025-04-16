"use client";

import useUser from "hooks/use_user";

export default function Profile() {
  const user = useUser();

  return (
    <>
      {user && (
        <p className="text-lg text-gray-800">
          Hello <span className="font-semibold">{user.username}</span>
        </p>
      )}
    </>
  );
}
