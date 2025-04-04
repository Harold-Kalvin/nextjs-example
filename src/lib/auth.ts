import { User, UserSchema } from "types/auth";
import { request } from "utils/request";

export async function getUser(): Promise<User | null> {
  const response = await request("GET", "http://localhost:8000/auth/browser/v1/auth/session");
  if (response.status === 200) {
    UserSchema.parse(response.data.user);
    return response.data.user;
  }
  return null;
}

export async function login(email: string, password: string) {
  const response = await request("POST", "http://localhost:8000/auth/browser/v1/auth/login", {
    email: email,
    password: password,
  });
  if (response.status === 200) {
    document.dispatchEvent(new CustomEvent("auth.changed"));
  }
  return response;
}

export async function logout() {
  await request("DELETE", "http://localhost:8000/auth/browser/v1/auth/session");
  document.dispatchEvent(new CustomEvent("auth.changed"));
}
