"use client";

import { GoogleLogin } from "@react-oauth/google";
import { loginGoogle } from "lib/auth";
import { useRouter } from "next/navigation";

export default function SocialButtons() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-3 text-sm text-gray-500">or continue with</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="flex justify-center">
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
      </div>
    </div>
  );
}
