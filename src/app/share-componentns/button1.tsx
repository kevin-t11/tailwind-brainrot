// hover underline animation

const button1 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <button className="group relative cursor-pointer px-4 py-2 text-lg font-medium text-neutral-800 dark:text-neutral-400">
        Hover me
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-neutral-800 transition-all duration-300 group-hover:w-full dark:bg-neutral-400"></span>
      </button>
    </div>
  );
};

export default button1;
