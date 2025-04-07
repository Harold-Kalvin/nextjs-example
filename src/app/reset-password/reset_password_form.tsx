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
    <form action={submitAction}>
      <div>
        <label htmlFor="code">code</label>
        <input id="code" type="text" name="code" />
      </div>
      <div>
        <label htmlFor="password1">password</label>
        <input id="password1" type="password" name="password1" />
      </div>
      <div>
        <label htmlFor="password2">confirm password</label>
        <input id="password2" type="password" name="password2" />
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
