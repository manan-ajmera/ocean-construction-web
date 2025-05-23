import ProjectCard from '../ui/ProjectCard';
import Link from 'next/link';
import Button from '../ui/Button';

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: 'Oceanfront Luxury Residence',
      category: 'Residential',
      image: '/images/projects/project1.jpg',
      link: '/projects#project1'
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      category: 'Commercial',
      image: '/images/projects/project2.jpg',
      link: '/projects#project2'
    },
    {
      id: 3,
      title: 'Historic Building Renovation',
      category: 'Renovation',
      image: '/images/projects/project3.jpg',
      link: '/projects#project3'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise and quality craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/projects">
            <Button variant="primary">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
