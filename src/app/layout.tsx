import Header from "app/_header";
import QueryProvider from "providers/query_client_provider";
import { UserProvider } from "providers/user_provider";

export const metadata = {
  title: "Site example",
  description: "Some description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <UserProvider>
            <Header />
            <main>{children}</main>
          </UserProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
