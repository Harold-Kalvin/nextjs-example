import Header from "app/_header";
import QueryProvider from "providers/query_client_provider";
import { UserProvider } from "providers/user_provider";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./globals.css";

export const metadata = {
  title: "Site example",
  description: "Some description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID ?? ""}>
          <QueryProvider>
            <UserProvider>
              <Header />
              <main>{children}</main>
            </UserProvider>
          </QueryProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
