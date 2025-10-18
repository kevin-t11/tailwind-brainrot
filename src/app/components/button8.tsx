import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

export const Button8 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <button className="group dark:ring-offset-background flex cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 px-8 py-4 ring-2 ring-neutral-800 ring-offset-2 ring-offset-neutral-200 transition-all duration-300 hover:shadow-neutral-800/50 hover:brightness-120 active:scale-95 active:ring-transparent">
        <span className="bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-lg font-medium text-transparent">
          Click me
        </span>
        <HugeiconsIcon icon={ArrowRight01Icon} className="text-neutral-300" />
      </button>
    </div>
  );
};
