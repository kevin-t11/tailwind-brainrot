'use client';

import { motion } from 'framer-motion';
import { XCircle, Clock, AlertTriangle } from 'lucide-react';

export const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Wasted Time',
      description: 'Creators waste 8-15 hours weekly scrolling manually to find trends.'
    },
    {
      icon: XCircle,
      title: 'High Failure Rate',
      description: "90% of content fails because it's based on guessing, not data."
    },
    {
      icon: AlertTriangle,
      title: 'Inconsistent Growth',
      description: 'Without insights, engagement is random and unpredictable.'
    }
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold md:text-4xl">
            Why growing on social feels impossible
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg">
            You're putting in the work, but the algorithm isn't rewarding you. Here's why.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border-border rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                <problem.icon className="size-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
