import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({ title, description, icon, image, link = '#' }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <Link 
          href={link} 
          className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
        >
          Learn More 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
