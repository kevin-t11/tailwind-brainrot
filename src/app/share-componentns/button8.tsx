import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

export const Button8 = () => {
  return (
    <div className="">
      <button className="group dark:ring-offset-background flex cursor-pointer items-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 px-2 py-1 ring-2 ring-neutral-700 ring-offset-1 ring-offset-neutral-700 transition-all duration-300 hover:shadow-neutral-800/50 hover:brightness-120 active:scale-95 active:ring-transparent">
        <span className="bg-gradient-to-br from-white to-neutral-400 bg-clip-text font-medium text-transparent">
          Get Started
        </span>
        <HugeiconsIcon icon={ArrowRight01Icon} className="text-neutral-300" />
      </button>
    </div>
  );
};
