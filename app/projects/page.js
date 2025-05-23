import Image from 'next/image';
import CtaSection from '../../components/sections/CtaSection';

export default function ProjectsPage() {
  const projects = [
    {
      id: 'project1',
      title: 'Oceanfront Luxury Residence',
      category: 'Residential',
      description: 'A stunning 5,000 sq ft custom home with panoramic ocean views, featuring high-end finishes, smart home technology, and sustainable design elements.',
      image: '/images/projects/project1.jpg',
      details: [
        'Location: Coastal Heights',
        'Size: 5,000 sq ft',
        'Duration: 14 months',
        'Completed: 2023'
      ]
    },
    {
      id: 'project2',
      title: 'Downtown Office Complex',
      category: 'Commercial',
      description: 'A modern office complex in the heart of downtown, designed for flexibility and collaboration with open workspaces, meeting rooms, and amenities.',
      image: '/images/projects/project2.jpg',
      details: [
        'Location: City Center',
        'Size: 25,000 sq ft',
        'Duration: 18 months',
        'Completed: 2022'
      ]
    },
    {
      id: 'project3',
      title: 'Historic Building Renovation',
      category: 'Renovation',
      description: 'Careful restoration of a 100-year-old building, preserving its historic character while updating systems and spaces for modern use.',
      image: '/images/projects/project3.jpg',
      details: [
        'Location: Heritage District',
        'Size: 8,500 sq ft',
        'Duration: 12 months',
        'Completed: 2024'
      ]
    },
    {
      id: 'project4',
      title: 'Retail Shopping Center',
      category: 'Commercial',
      description: 'A vibrant shopping center with multiple retail spaces, restaurants, and outdoor gathering areas designed to create a community destination.',
      image: '/images/projects/project4.jpg',
      details: [
        'Location: Suburban Plaza',
        'Size: 45,000 sq ft',
        'Duration: 24 months',
        'Completed: 2021'
      ]
    },
    {
      id: 'project5',
      title: 'Modern Townhouse Development',
      category: 'Residential',
      description: 'A collection of 12 contemporary townhouses featuring open floor plans, energy-efficient systems, and shared community spaces.',
      image: '/images/projects/project5.jpg',
      details: [
        'Location: Urban Heights',
        'Size: 2,200 sq ft each',
        'Duration: 20 months',
        'Completed: 2023'
      ]
    },
    {
      id: 'project6',
      title: 'Restaurant Renovation',
      category: 'Renovation',
      description: 'Complete transformation of an existing space into an upscale restaurant with custom fixtures, specialized kitchen equipment, and distinctive ambiance.',
      image: '/images/projects/project6.jpg',
      details: [
        'Location: Dining District',
        'Size: 3,800 sq ft',
        'Duration: 6 months',
        'Completed: 2024'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl">
              Explore our portfolio of completed projects showcasing our expertise and quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} id={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Project Details:</h4>
                    <ul className="space-y-1">
                      {project.details.map((detail, index) => (
                        <li key={index} className="text-gray-600 text-sm">{detail}</li>
                      ))}
                    </ul>
                  </div>
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
