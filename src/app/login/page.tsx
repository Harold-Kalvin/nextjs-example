import LoginForm from "app/login/login_form";
import AnonymousRoute from "components/routing/anonymous_route";
import Link from "next/link";
import SocialButtons from "./social_buttons";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <AnonymousRoute>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
          <h1 className="text-center text-2xl font-bold text-gray-800">Login</h1>
          <LoginForm />
          <div className="text-center">
            <Link href="/forgotten-password" className="text-sm text-blue-600 hover:underline">
              Forgotten password?
            </Link>
          </div>
          <SocialButtons />
        </div>
      </div>
    </AnonymousRoute>
  );
}
