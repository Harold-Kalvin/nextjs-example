import LoginForm from "app/login/login_form";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <>
      <h1>Login page!</h1>
      <LoginForm />
    </>
  );
}
