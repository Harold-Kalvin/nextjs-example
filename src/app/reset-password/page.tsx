import ResetPasswordForm from "./reset_password_form";

export const metadata = {
  title: "Reset password",
};

export default function Page() {
  return (
    <>
      <h1>Reset password page!</h1>
      <ResetPasswordForm />
    </>
  );
}
