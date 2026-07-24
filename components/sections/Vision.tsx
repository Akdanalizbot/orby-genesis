export default function Vision() {
  return (
    <section className="relative bg-[#050816] py-32 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
            OUR VISION
          </p>

          <h2 className="mt-6 text-5xl font-extrabold gradient-text md:text-6xl">
            Building More Than A Token
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
            We believe Web3 deserves brands people remember.
            <br />
            Not because of hype.
            <br />
            Not because of price.
            <br />
            But because of purpose, creativity and community.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="glass rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold">
              Brand First
            </h3>

            <p className="text-slate-400 leading-8">
              ORBY is designed as an iconic brand before becoming a token.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold">
              Community
            </h3>

            <p className="text-slate-400 leading-8">
              Every explorer helps shape the future of the ORBY universe.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold">
              Future
            </h3>

            <p className="text-slate-400 leading-8">
              Born on Robinhood Chain.
              Built for the next generation of Web3.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
