'use client';

import { motion } from 'framer-motion';
import { Search, Filter, Video, PenTool, Layers, Globe } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Advanced Search',
      description:
        'Search by keyword, creator, or niche across TikTok and Instagram Reels simultaneously.'
    },
    {
      icon: Filter,
      title: 'Smart Filtering',
      description:
        "Filter by views, likes, engagement rate, and date to find exactly what's trending now."
    },
    {
      icon: Video,
      title: 'Viral Analytics',
      description: 'Deep dive into video metrics, growth velocity, and geographic distribution.'
    },
    {
      icon: PenTool,
      title: 'AI Script Rewriter',
      description: 'Instantly rewrite viral scripts to match your brand voice and niche.'
    },
    {
      icon: Layers,
      title: 'Content Library',
      description: 'Save videos and scripts into organized collections for your campaigns.'
    },
    {
      icon: Globe,
      title: 'Trend Spotting',
      description: 'Identify emerging trends before they saturate the market.'
    }
  ];

  return (
    <section id="features" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Everything you need to dominate social
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete suite of tools designed to take you from idea to viral hit in record time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group border-border bg-card hover:border-primary/50 rounded-2xl border p-8 transition-all hover:shadow-lg">
              <div className="bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-6 flex size-12 items-center justify-center rounded-xl transition-colors">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
