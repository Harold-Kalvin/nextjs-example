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
      <h1>Login page!</h1>
      <LoginForm />
      <Link href="/forgotten-password">Forgotten password?</Link>
      <SocialButtons />
    </AnonymousRoute>
  );
}
