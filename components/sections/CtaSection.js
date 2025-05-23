import Link from 'next/link';
import Button from '../ui/Button';

export default function CtaSection() {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Construction Project?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and quote. Let's bring your vision to life.
        </p>
        <Link href="/contact">
          <Button variant="secondary" className="text-blue-700">
            Get a Free Quote
          </Button>
        </Link>
      </div>
    </section>
  );
}
