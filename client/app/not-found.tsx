export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-navy text-white p-6">
      <h1 className="text-9xl font-bold text-brand-gold animate-pulse">404</h1>
      <h2 className="text-2xl mt-4 font-semibold uppercase tracking-widest">
        Room Not Found / Page Misprinted
      </h2>
      <p className="mt-4 text-gray-300 max-w-md text-center">
        Even the best blueprints have errors. Let's get you back to the main
        holding area.
      </p>
      <a
        href="/"
        className="mt-8 px-8 py-3 bg-brand-gold text-brand-navy font-bold rounded-full"
      >
        RETURN TO HOME
      </a>
    </div>
  );
}
