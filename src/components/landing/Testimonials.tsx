'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Content Creator',
      content:
        'This tool saved me 10+ hours a week. I used to guess what to post, now I know exactly what will work.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      name: 'Mike Ross',
      role: 'Agency Owner',
      content:
        'The AI script rewriter is a game changer. We handle 5x more clients now because content strategy is automated.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
    },
    {
      name: 'Jessica Lee',
      role: 'Brand Manager',
      content:
        'Finally, a tool that actually helps us understand why competitors are going viral. Our engagement is up 300%.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica'
    }
  ];

  return (
    <section id="testimonials" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Loved by creators</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of creators growing faster with data.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-muted/20 border-border rounded-2xl border p-8">
              <div className="mb-4 flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="bg-muted relative size-10 overflow-hidden rounded-full">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
