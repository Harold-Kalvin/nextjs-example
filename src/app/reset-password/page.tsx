import AnonymousRoute from "components/routing/anonymous_route";
import ResetPasswordForm from "./reset_password_form";

export const metadata = {
  title: "Reset password",
};

export default function Page() {
  return (
    <AnonymousRoute>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
          <h1 className="text-center text-2xl font-bold text-gray-800">Reset Your Password</h1>
          <ResetPasswordForm />
        </div>
      </div>
    </AnonymousRoute>
  );
}
