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
    <form action={submitAction}>
      <div>
        <label htmlFor="code">code</label>
        <input id="code" type="text" name="code" />
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
