import AuthenticatedRoute from "components/routing/authenticated_route";
import Profile from ".";

export const metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <AuthenticatedRoute>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
          <h1 className="text-center text-2xl font-bold text-gray-800">Your Profile</h1>
          <Profile />
        </div>
      </div>
    </AuthenticatedRoute>
  );
}
