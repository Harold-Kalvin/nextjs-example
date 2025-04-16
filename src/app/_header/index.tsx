"use client";

import Link from "next/link";
import useUser from "hooks/use_user";
import { useRouter } from "next/navigation";
import { logout } from "lib/auth";

export default function Header() {
  const user = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <header className="shadow">
      <nav className="mx-auto max-w-screen-xl px-4 py-4">
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className="font-medium text-gray-800 hover:text-blue-600">
              Home
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <button
                  onClick={handleLogout}
                  className="font-medium text-blue-600 hover:underline focus:outline-none"
                >
                  Logout
                </button>
              </li>
              <li>
                <Link href="/profile" className="font-medium text-gray-800 hover:text-blue-600">
                  Profile
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className="font-medium text-gray-800 hover:text-blue-600">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
