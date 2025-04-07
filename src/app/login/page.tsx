import LoginForm from "app/login/login_form";
import Link from "next/link";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <>
      <h1>Login page!</h1>
      <LoginForm />
      <Link href="/forgotten-password">Forgotten password?</Link>
    </>
  );
}
