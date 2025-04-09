import AnonymousRoute from "components/routing/anonymous_route";
import RequestPasswordResetForm from "./request_password_reset_form";

export const metadata = {
  title: "Forgotten password",
};

export default function Page() {
  return (
    <AnonymousRoute>
      <h1>Forgotten password page!</h1>
      <RequestPasswordResetForm />
    </AnonymousRoute>
  );
}
