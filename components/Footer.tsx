// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="bg-gray-100 text-center text-gray-600 py-4 mt-10">
       
       <div className="flex justify-center mb-2">
        <Link href="/">
          <span>My Site</span> {
            <img src="/vegan.png" width={40} 
            height={40}
            className="mr-2"/>
            }
        </Link>
        </div> 
        © {new Date().getFullYear()} My Next.js App. All rights reserved.
      </footer>
    );
  }
  