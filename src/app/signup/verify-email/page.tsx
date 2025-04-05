import VerifyEmail from ".";

export const metadata = {
  title: "Verify email",
};

export default async function Page() {
  return (
    <>
      <h1>Verify email page!</h1>
      <VerifyEmail />
    </>
  );
}
