import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-10">
        <section className="rounded-[2rem] border border-[#003AA0]/15 bg-[#f8fbff] px-6 py-12 sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#003AA0]">
            Safe Haven Housing
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#191816] sm:text-5xl">
            Your navbar is now a separate component and ready for the rest of
            the homepage sections.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#191816]/70">
            We can plug in the hero, why us, customisation, included items, and
            contact sections underneath this structure next.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
