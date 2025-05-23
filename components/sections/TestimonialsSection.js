import TestimonialCard from '../ui/TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Ocean Construction exceeded our expectations. Their attention to detail and commitment to quality is unmatched. Our new home is exactly what we envisioned.",
      name: "John Smith",
      title: "Homeowner",
      image: "/images/team/john.jpg"
    },
    {
      id: 2,
      quote: "Working with Ocean Construction on our office renovation was a seamless experience. Professional, timely, and within budget. Highly recommended!",
      name: "Sarah Johnson",
      title: "Business Owner",
      image: "/images/team/sarah.jpg"
    },
    {
      id: 3,
      quote: "The team at Ocean Construction are true professionals. Their expertise and guidance throughout our commercial building project was invaluable.",
      name: "Michael Davis",
      title: "Property Developer",
      image: "/images/team/michael.jpg"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
