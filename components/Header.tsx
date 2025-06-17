// app/components/Header.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={50} />
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-yellow-600">Home</Link>
          <Link href="/services" className="hover:text-yellow-600">Services</Link>
          <Link href="/about" className="hover:text-yellow-600">About Us</Link>
          <Link href="/contact" className="hover:text-yellow-600">Contact</Link>
          <Link href="/get-started">
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:text-white-600 hover:bg-yellow-600">
              Get Started
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
