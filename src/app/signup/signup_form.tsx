"use client";

import { signup } from "lib/auth";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

export default function SignupForm() {
  const router = useRouter();

  const [data, submitAction, isPending] = useActionState(async (_: unknown, formData: FormData) => {
    const response = await signup(
      formData.get("email") as string,
      formData.get("password") as string
    );
    if (response.status === 200) {
      router.push("/");
    }
    if (response.status === 400) {
      return { errors: response.errors };
    }
    // pending email verification
    if (response.status === 401) {
      router.push("/signup/verify-email");
    }
    if (response.status === 409) {
      return { errors: [{ message: "Already authenticated" }] };
    }
    return null;
  }, null);

  return (
    <form action={submitAction}>
      <div>
        <label htmlFor="email">email</label>
        <input id="email" type="text" name="email" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" type="password" name="password" />
      </div>
      <div>
        <label htmlFor="confirm-password">confirm password</label>
        <input id="confirm-password" type="password" name="confirm-password" />
      </div>
      <button type="submit" disabled={isPending}>
        Sign up
      </button>
      {data?.errors &&
        data.errors.map((error: Record<string, string>) => (
          <p key={error.message}>{error.message}</p>
        ))}
    </form>
  );
}
