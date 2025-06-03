import Image from 'next/image';
import Button from '../../components/ui/Button';
import CtaSection from '../../components/sections/CtaSection';

export default function AboutPage() {
  const team = [
    {
      name: 'Pratyakash Kakadiya',
      position: 'Founder & CEO',
      bio: 'With a great interest and experience in the construction industry, Pratyaksh founded Ocean Construction with a vision to provide exceptional service and build lasting relationships with clients.',
       image: '/images/team/pratyaksh.png' 
    },
    
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl">
              Learn about our company, our mission, and the team behind our exceptional construction services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/about-story.jpg" 
                alt="Our Story" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Ocean Construction began with a simple mission: to provide honest, high-quality construction services at fair prices. What started as a small contracting business has grown into a comprehensive construction company trusted by clients throughout the region.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Pratyaksh Kakadiya, recognized a need for a construction company that prioritized client education and transparency. He built the business on the principle that informed clients make better decisions about their construction projects.
              </p>
              <p className="text-gray-600">
                Today, we continue to uphold these values while embracing the latest construction technologies and techniques. Our team of skilled professionals combines experience with ongoing education to stay at the forefront of the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and define our approach to construction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We believe in honest communication and transparent service. We&apos;ll never recommend unnecessary work or mislead our clients.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, from the quality of our construction to the cleanliness of our job sites.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Client Focus</h3>
              <p className="text-gray-600">
                Our clients are at the center of everything we do. We&apos;re committed to providing a positive experience and building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Owner</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The visionary behind Ocean Construction.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-center">PRATYAKSH KAKADIYA</h3>
                <p className="text-blue-700 font-medium mb-4 text-center">Founder & CEO</p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-gray-600">
                    With extensive experience in the construction industry, PRATYAKSH founded Ocean Construction with a vision to provide exceptional service and build lasting relationships with clients. His commitment to quality, integrity, and customer satisfaction has been the foundation of our success.
                  </p>
                  <p className="text-gray-600 mt-4">
                    Under his leadership, Ocean Construction has grown to become a trusted name in the industry, known for delivering projects on time, within budget, and to the highest standards of quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <CtaSection />
    </>
  );
}
