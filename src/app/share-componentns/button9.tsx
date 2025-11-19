export const Button9 = () => {
  return (
    <button className="group relative inline-flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-neutral-600 bg-neutral-800 pt-[12px] pr-[20px] pb-[12px] pl-[20px] font-semibold tracking-tight text-neutral-400 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white">
      <span className="relative z-10 rounded-full font-medium transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:transform group-hover:opacity-0 group-hover:blur-md">
        Download Mac app
      </span>

      <span className="absolute inset-0 z-10 flex -translate-y-8 transform items-center justify-center rounded-full font-medium opacity-0 blur-md transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none">
        Download Mac app
      </span>

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent blur-[2px] transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80"></span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-[100%] rounded-full bg-gradient-to-t from-white/20 via-white/10 to-transparent transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-60"></span>
    </button>
  );
};
