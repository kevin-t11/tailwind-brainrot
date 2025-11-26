'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';

type ButtonStatus = 'idle' | 'loading' | 'success';

interface SaveButtonProps {
  onSave?: () => Promise<void>;
}

export const SaveButton: React.FC<SaveButtonProps> = ({ onSave }) => {
  const [status, setStatus] = useState<ButtonStatus>('idle');

  const handleClick = async () => {
    if (status !== 'idle') return;

    setStatus('loading');

    // Simulate network request or use provided callback
    if (onSave) {
      await onSave();
    } else {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    setStatus('success');
  };

  // Reset to idle after success state
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const isActive = status === 'loading' || status === 'success';

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={status !== 'idle'}
      className={cn(
        'relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold shadow-sm transition-colors outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2',
        isActive ? 'bg-neutral-900 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
      )}>
      {/* Top-right status badge (spinner / check) with smooth enter/exit */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key={status}
            initial={{ opacity: 0, scale: 0.6, x: 4, y: -4 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, x: 4, y: -4 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={cn(
              'pointer-events-none absolute -top-1 -right-1 flex items-center justify-center rounded-full shadow-md',
              status === 'loading'
                ? 'h-6 w-6 bg-neutral-900'
                : 'h-6 w-6 border-[3px] border-neutral-900 bg-white'
            )}>
            {status === 'loading' ? (
              <Spinner className="h-5 w-5 text-white" />
            ) : (
              <CheckIcon className="h-3 w-3 text-neutral-900" />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <span className="relative inline-flex overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={status}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="block">
            {status === 'idle' && 'Save'}
            {status === 'loading' && 'Saving'}
            {status === 'success' && 'Saved'}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
};
