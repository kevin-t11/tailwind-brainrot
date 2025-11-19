export const BentoGrid = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 size-40 rounded-lg bg-red-500"></div>
        <div className="size-full rounded-lg bg-yellow-500"></div>
        <div className="size-40 rounded-lg bg-green-500"></div>
        <div className="size-40 rounded-lg bg-blue-500"></div>
        <div className="size-40 rounded-lg bg-purple-500"></div>
      </div>
    </div>
  );
};
