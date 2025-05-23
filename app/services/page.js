import Image from 'next/image';
import Button from '../../components/ui/Button';
import CtaSection from '../../components/sections/CtaSection';

export default function ServicesPage() {
  const services = [
    {
      id: 'residential',
      title: 'Residential Construction',
      description: 'Our residential construction services include custom home building, renovations, and additions. We work closely with homeowners to create spaces that reflect their lifestyle and preferences.',
      image: '/images/services/residential.jpg',
      features: [
        'Custom Home Building',
        'Home Additions',
        'Kitchen & Bathroom Remodeling',
        'Basement Finishing',
        'Outdoor Living Spaces'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      description: 'We provide comprehensive commercial construction services for businesses of all sizes. From office buildings to retail spaces, we deliver high-quality results that meet your business needs.',
      image: '/images/services/commercial.jpg',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Restaurants',
        'Medical Facilities',
        'Warehouses & Industrial Buildings'
      ]
    },
    {
      id: 'renovation',
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our renovation and remodeling services. We breathe new life into older buildings while preserving their character and improving functionality.',
      image: '/images/services/renovation.jpg',
      features: [
        'Complete Home Renovations',
        'Kitchen & Bathroom Remodeling',
        'Commercial Space Renovations',
        'Historic Building Restoration',
        'Energy Efficiency Upgrades'
      ]
    },
    {
      id: 'consulting',
      title: 'Construction Consulting',
      description: "Our construction consulting services provide expert guidance for your project. From feasibility studies to project management, we help ensure your project's success.",
      image: '/images/services/consulting.jpg',
      features: [
        'Feasibility Studies',
        'Project Planning',
        'Budget Development',
        'Construction Management',
        'Quality Assurance'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">
              Comprehensive construction services tailored to meet your project needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">What We Offer:</h3>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-blue-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="primary">Request a Quote</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

