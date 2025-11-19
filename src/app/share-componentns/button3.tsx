const button3 = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <button className="group relative cursor-pointer overflow-hidden rounded-full px-4 py-2 text-lg font-medium text-neutral-800 dark:text-neutral-300">
        <span className="absolute inset-0 translate-x-[-100%] rounded-full bg-neutral-900 transition-transform duration-300 group-hover:translate-x-0 dark:bg-neutral-50"></span>
        <span className="relative inset-0 z-10 transition-colors duration-300 group-hover:text-neutral-50 group-hover:dark:text-neutral-800">
          Hover me
        </span>
      </button>
    </div>
  );
};

export default button3;
