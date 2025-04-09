import AuthenticatedRoute from "components/routing/authenticated_route";
import Profile from ".";

export const metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <AuthenticatedRoute>
      <h1>Profile page!</h1>
      <Profile />
    </AuthenticatedRoute>
  );
}
