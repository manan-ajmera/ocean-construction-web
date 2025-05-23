import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, category, image, link = '#' }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-80 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <p className="text-sm font-medium text-blue-300 mb-2">{category}</p>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <Link 
          href={link} 
          className="inline-flex items-center text-sm font-medium text-white hover:text-blue-300 transition-colors"
        >
          View Project 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
