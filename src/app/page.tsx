import Home from "./_home";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <Home />
      </div>
    </div>
  );
}
