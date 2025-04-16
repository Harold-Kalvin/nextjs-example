import AnonymousRoute from "components/routing/anonymous_route";
import VerifyEmail from ".";

export const metadata = {
  title: "Verify email",
};

export default async function Page() {
  return (
    <AnonymousRoute>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
          <h1 className="text-center text-2xl font-bold text-gray-800">Verify Your Email</h1>
          <VerifyEmail />
        </div>
      </div>
    </AnonymousRoute>
  );
}
