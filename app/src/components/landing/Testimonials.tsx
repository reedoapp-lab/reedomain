import { Card } from '@/components/ui/card';
import { MarqueeTrack } from '@/components/shared/MarqueeTrack';
import { StarRating } from '@/components/shared/StarRating';

const testimonials = [
  {
    id: 1,
    name: 'Piotr Kowalczyk',
    location: 'Warsaw, Poland',
    rating: 5,
    text: "Finding reliable help in Warsaw has always been a struggle. If this works well, it will save a lot of time for people like me.",
  },
  {
    id: 2,
    name: 'Anna Zielińska',
    location: 'Lublin, Poland',
    rating: 5,
    text: "This is something we really need. Simple tasks take too long to arrange — I’m really looking forward to using this platform.",
  },
  {
    id: 3,
    name: 'Kamil Nowicki',
    location: 'Gdańsk, Poland',
    rating: 5,
    text: "It’s surprising something like this didn’t exist before. If done right, this could become very popular.",
  },
  {
    id: 4,
    name: 'Marta Wiśniewska',
    location: 'Łódź, Poland',
    rating: 5,
    text: "I like the idea a lot. Booking services should be this simple. Definitely waiting for the launch.",
  },
  {
    id: 5,
    name: 'Rahul Sharma',
    location: 'Warsaw, Poland',
    rating: 5,
    text: "As an expat, finding trusted services is difficult. This could make things much easier for people like me.",
  },
  {
    id: 6,
    name: 'Emily Carter',
    location: 'Gdańsk, Poland',
    rating: 5,
    text: "This solves a real problem. I’ve struggled to find reliable help here — really excited to try this when it launches.",
  },
  {
    id: 7,
    name: 'Tomasz Lewandowski',
    location: 'Warsaw, Poland',
    rating: 5,
    text: "As a professional, getting consistent and trustworthy clients is not easy. If this platform connects us properly, I would definitely work with it.",
  },
  {
    id: 8,
    name: 'Ahmed Hassan',
    location: 'Łódź, Poland',
    rating: 5,
    text: "I provide repair services and I’m always looking for better ways to reach customers. This looks promising — I would be happy to join as a provider.",
  },
];

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-[#5B3DF5]/5 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-black sm:text-4xl">
            What People in Poland Are Saying
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Early real feedback from future users and professionals
          </p>
        </div>
      </div>

      {/* Marquee */}
      <MarqueeTrack speed={40} pauseOnHover>
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="w-[340px] shrink-0 rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
          >
            {/* Name */}
            <div>
              <h4 className="font-semibold text-black">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonial.location}
              </p>
            </div>

            {/* Rating */}
            <div className="mt-4">
              <StarRating rating={testimonial.rating} />
            </div>

            {/* Text */}
            <p className="mt-4 text-gray-600 leading-relaxed">
              {testimonial.text}
            </p>
          </Card>
        ))}
      </MarqueeTrack>
    </section>
  );
}