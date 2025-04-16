"use client";

import { verifyEmail } from "lib/auth";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

export default function VerifyEmail() {
  const router = useRouter();

  const [data, submitAction, isPending] = useActionState(async (_: unknown, formData: FormData) => {
    const response = await verifyEmail(formData.get("code") as string);
    if (response.status === 200) {
      router.push("/");
    }
    if (response.status === 400) {
      return { errors: response.errors };
    }
    if (response.status === 409) {
      return { errors: [{ message: "Code has expired or email was already verified" }] };
    }
    return null;
  }, null);

  return (
    <form
      action={submitAction}
      className="mx-auto mt-10 max-w-md space-y-6 rounded-lg bg-white p-6 shadow-md"
    >
      <div>
        <label htmlFor="code" className="mb-1 block text-sm font-medium text-gray-700">
          Verification Code
        </label>
        <input
          id="code"
          type="text"
          name="code"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? "Verifying..." : "Submit"}
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
