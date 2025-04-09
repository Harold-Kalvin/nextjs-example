import AnonymousRoute from "components/routing/anonymous_route";
import VerifyEmail from ".";

export const metadata = {
  title: "Verify email",
};

export default async function Page() {
  return (
    <AnonymousRoute>
      <h1>Verify email page!</h1>
      <VerifyEmail />
    </AnonymousRoute>
  );
}
