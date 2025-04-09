import AnonymousRoute from "components/routing/anonymous_route";
import SignupForm from "./signup_form";

export const metadata = {
  title: "Sign up",
};

export default function Page() {
  return (
    <AnonymousRoute>
      <h1>Sign up page!</h1>
      <SignupForm />
    </AnonymousRoute>
  );
}
