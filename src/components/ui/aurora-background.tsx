'use client';

import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        'bg-background text-foreground transition-bg relative flex min-h-screen flex-col',
        className
      )}
      {...props}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--color-orange-500)_10%,var(--color-amber-300)_15%,var(--color-yellow-400)_20%,var(--color-orange-300)_25%,var(--color-amber-500)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--color-black)_0%,var(--color-black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--color-black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--color-white)_0%,var(--color-white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--color-white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}></div>
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
