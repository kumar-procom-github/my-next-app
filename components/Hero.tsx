// app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-black text-white h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Your Gateway to Premium
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-6">
        UAE Real Estate
      </h2>
      <p className="max-w-2xl text-lg md:text-xl mb-8">
        Expert guidance for US investors seeking high-yield property opportunities
        in Dubai and the UAE. From off-plan developments to ready properties and
        comprehensive management services.
      </p>
      <div className="flex gap-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded">
          Explore Investment Opportunities →
        </button>
        <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black">
          Our Services
        </button>
      </div>
    </section>
  );
}
