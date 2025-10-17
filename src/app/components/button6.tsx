// Skeuomorphic button with gradient and 3D effect

const Button6 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <button className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-neutral-500 bg-gradient-to-b from-neutral-800 to-neutral-900 px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110 active:scale-[0.95]">
        <span className="relative z-10 text-2xl text-neutral-400">Click me</span>
        <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      </button>
    </div>
  );
};

export default Button6;
