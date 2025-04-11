"use client";

import { GoogleLogin } from "@react-oauth/google";
import { loginGoogle } from "lib/auth";
import { useRouter } from "next/navigation";

export default function SocialButtons() {
  const router = useRouter();

  return (
    <>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const response = await loginGoogle(
            credentialResponse.clientId as string,
            credentialResponse.credential as string
          );
          if (response.status === 200) {
            router.push("/");
          }
        }}
        onError={() => {
          console.log("Google login Failed");
        }}
      />
    </>
  );
}
