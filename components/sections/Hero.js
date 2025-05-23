import Link from 'next/link';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      {/* Hero image with gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right, 
              rgba(17, 24, 39, 0.95) 0%, 
              rgba(17, 24, 39, 0.7) 50%, 
              rgba(17, 24, 39, 0.3) 100%
            ),
            url(/images/hero.png)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left side - Text content (takes 7 columns) */}
          <div className="lg:col-span-7 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building Your Vision, <span className="text-blue-400">Creating Reality</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
              Premier construction services for residential and commercial projects. Quality craftsmanship, on-time delivery, and customer satisfaction guaranteed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services">
                <Button variant="primary" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold">
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="text-white border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right side - Space for image (takes 5 columns) */}
          <div className="lg:col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
