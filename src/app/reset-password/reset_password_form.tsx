"use client";

import { resetPassword } from "lib/auth";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

export default function ResetPasswordForm() {
  const router = useRouter();

  const [data, submitAction, isPending] = useActionState(async (_: unknown, formData: FormData) => {
    const response = await resetPassword(
      formData.get("code") as string,
      formData.get("password1") as string
    );
    if (response.status === 200) {
      router.push("/");
    }
    if (response.status === 400) {
      return { errors: response.errors };
    }
    if (response.status === 409) {
      return { errors: [{ message: "No password reset pending. Maximum attempt reach." }] };
    }
    return null;
  }, null);

  return (
    <form
      action={submitAction}
      className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-6 shadow-md"
    >
      <div>
        <label htmlFor="code" className="mb-1 block text-sm font-medium text-gray-700">
          Code
        </label>
        <input
          id="code"
          type="text"
          name="code"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="password1" className="mb-1 block text-sm font-medium text-gray-700">
          New Password
        </label>
        <input
          id="password1"
          type="password"
          name="password1"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="password2" className="mb-1 block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          id="password2"
          type="password"
          name="password2"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {data?.errors &&
        data.errors.map((error: Record<string, string>) => (
          <p key={error.message} className="text-sm text-red-600">
            {error.message}
          </p>
        ))}
    </form>
  );
}
