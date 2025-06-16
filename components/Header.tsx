// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-800">
        <Link href="/">
          <span>My Site</span> {
            <img src="/vegan.png" width={40} 
            height={40}
            className="mr-2"/>
            }
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-6 text-blue-700 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
