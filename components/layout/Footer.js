import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/images/logo.png" alt="Ocean Construction" width={180} height={50} className="mb-4 invert" />
            <p className="text-gray-400">
              Building excellence since 1995. Quality construction services for residential and commercial projects.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition duration-300">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition duration-300">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#residential" className="text-gray-400 hover:text-white transition duration-300">Residential Construction</Link></li>
              <li><Link href="/services#commercial" className="text-gray-400 hover:text-white transition duration-300">Commercial Construction</Link></li>
              <li><Link href="/services#renovation" className="text-gray-400 hover:text-white transition duration-300">Renovation</Link></li>
              <li><Link href="/services#consulting" className="text-gray-400 hover:text-white transition duration-300">Construction Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              442-444 Vishala Supreme,<br />
              Opp. Torrent Power Station,<br />
              Ring Road, Nikol,<br />
              Ahmedabad, Gujarat 382350<br />
              <a href="tel:+9188669 83221" className="hover:text-white transition duration-300">Phone: +91 8866983221</a><br />
              <a href="mailto:oceanconstruction22@gmail.com" className="hover:text-white transition duration-300">oceanconstruction22@gmail.com</a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ocean Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
