export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Site</h1>
        <p className="text-lg mb-6">We build amazing web experiences</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg">
          We are a modern web development agency that focuses on fast, scalable, and user-friendly web apps.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Web Design</h3>
            <p>Create beautiful, responsive websites.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p>Full-stack development with modern tools.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">SEO & Marketing</h3>
            <p>Improve visibility and drive traffic to your site.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

