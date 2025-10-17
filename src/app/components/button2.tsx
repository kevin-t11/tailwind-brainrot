// Top down animation

const button2 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <button className="group relative cursor-pointer overflow-hidden rounded-xl border border-neutral-800 px-4 py-2 text-lg font-medium text-neutral-800 dark:border-neutral-400 dark:text-neutral-400">
        Hover me
        <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-white transition-transform duration-300 group-hover:-translate-y-full dark:bg-black">
          Hover me{' '}
        </span>
        <span className="absolute inset-0 flex translate-y-full items-center justify-center rounded-xl bg-white transition-transform duration-300 group-hover:translate-y-0 dark:bg-black">
          Let's go
        </span>
      </button>
    </div>
  );
};

export default button2;
