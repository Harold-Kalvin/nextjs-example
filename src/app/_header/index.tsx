"use client";

import Link from "next/link";
import useUser from "hooks/use_user";
import { redirect } from "next/navigation";
import { logout } from "lib/auth";

export default function Header() {
  const user = useUser();

  const handleLogout = async () => {
    await logout();
    redirect("/");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <button
                  onClick={handleLogout}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "blue" }}
                >
                  Logout
                </button>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
