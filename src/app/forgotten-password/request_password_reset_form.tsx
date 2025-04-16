"use client";

import { requestPasswordReset } from "lib/auth";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

export default function RequestPasswordResetForm() {
  const router = useRouter();

  const [data, submitAction, isPending] = useActionState(async (_: unknown, formData: FormData) => {
    const response = await requestPasswordReset(formData.get("email") as string);
    if (response.status === 400) {
      return { errors: response.errors };
    }
    // pending email verification
    if (response.status === 401) {
      router.push("/reset-password");
    }
    return null;
  }, null);

  return (
    <form
      action={submitAction}
      className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-6 shadow-md"
    >
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="text"
          name="email"
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
