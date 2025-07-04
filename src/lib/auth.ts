import { User, UserSchema } from "types/auth";
import { request } from "utils/request";

export async function getUser(): Promise<User | null> {
  const response = await request(
    "GET",
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/browser/v1/auth/session`
  );
  if (response.status === 200) {
    UserSchema.parse(response.data.user);
    return response.data.user;
  }
  return null;
}

export async function login(email: string, password: string) {
  const response = await request(
    "POST",
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/browser/v1/auth/login`,
    {
      email: email,
      password: password,
    }
  );
  if (response.status === 200) {
    document.dispatchEvent(new CustomEvent("auth.changed"));
  }
  return response;
}

export async function loginGoogle(clientId: string, token: string) {
  const response = await request(
    "POST",
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/browser/v1/auth/provider/token`,
    {
      provider: "google",
      process: "login",
      token: {
        client_id: clientId,
        id_token: token,
      },
    }
  );
  if (response.status === 200) {
    document.dispatchEvent(new CustomEvent("auth.changed"));
  }
  return response;
}

export async function logout() {
  await request("DELETE", `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/browser/v1/auth/session`);
  document.dispatchEvent(new CustomEvent("auth.changed"));
}

export async function signup(email: string, password: string) {
  const response = await request(
    "POST",
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/browser/v1/auth/signup`,
    {
      email: email,
      password: password,
    }
  );
  return response;
}

export async function verifyEmail(key: string) {
  const response = await request(
    "POST",
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/browser/v1/auth/email/verify`,
    {
      key: key,
    }
  );
  if (response.status === 200) {
    document.dispatchEvent(new CustomEvent("auth.changed"));
  }
  return response;
}

export async function requestPasswordReset(email: string) {
  const response = await request(
    "POST",
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/browser/v1/auth/password/request`,
    {
      email: email,
    }
  );
  return response;
}

export async function resetPassword(key: string, password: string) {
  const response = await request(
    "POST",
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/browser/v1/auth/password/reset`,
    {
      key: key,
      password: password,
    }
  );
  if (response.status === 200) {
    document.dispatchEvent(new CustomEvent("auth.changed"));
  }
  return response;
}
