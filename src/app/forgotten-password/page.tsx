import RequestPasswordResetForm from "./request_password_reset_form";

export const metadata = {
  title: "Forgotten password",
};

export default function Page() {
  return (
    <>
      <h1>Forgotten password page!</h1>
      <RequestPasswordResetForm />
    </>
  );
}
