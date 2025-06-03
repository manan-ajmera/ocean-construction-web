import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src="/images/about.jpg" 
              alt="About Ocean Construction" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">About Ocean Construction</h2>
            <p className="text-gray-600 mb-6">
              Ocean Construction has established itself as a leader in the construction industry. With over years of experience, we&apos;ve built a reputation for excellence, reliability, and quality craftsmanship.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of skilled professionals is committed to delivering exceptional results on every project. From residential homes to commercial buildings, we approach each project with dedication, attention to detail, and a focus on client satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Quality Craftsmanship</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Experienced Team</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>On-Time Delivery</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Client Satisfaction</span>
              </div>
            </div>
            <Link href="/about">
              <Button variant="primary">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
