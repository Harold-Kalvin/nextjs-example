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
    <form action={submitAction}>
      <div>
        <label htmlFor="email">email</label>
        <input id="email" type="text" name="email" />
      </div>
      <button type="submit" disabled={isPending}>
        Submit
      </button>
      {data?.errors &&
        data.errors.map((error: Record<string, string>) => (
          <p key={error.message}>{error.message}</p>
        ))}
    </form>
  );
}
