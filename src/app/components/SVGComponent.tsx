export const SVGComponent = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-black">
      <div className="relative z-20 size-40 overflow-hidden rounded-xl bg-neutral-100 p-px">
        <div className="relative inset-0 z-20 size-full rounded-[11px] bg-white"></div>
        <div className="absolute inset-0 size-full scale-[1.5] animate-spin rounded-full bg-conic from-blue-500 via-red-500 to-green-500 [animation-duration:1000ms]"></div>
        <span className="absolute inset-0 z-30 flex items-center justify-center text-center text-2xl font-bold">
          Keep it simple.
        </span>
      </div>
    </div>
  );
};
