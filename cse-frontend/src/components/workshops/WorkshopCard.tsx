interface WorkshopCardProps {
  workshop: {
    id: string;
    title: string;
    category: string;
    description: string;
    duration: string;
  };
}

export default function WorkshopCard({
  workshop,
}: WorkshopCardProps) {
  return (
    <div className="group border-t border-black/10 py-8">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
        
        {/* Number */}
        <div className="lg:col-span-1">
          <span className="text-xs tracking-[0.2em] text-neutral-400">
            {workshop.id}
          </span>
        </div>

        {/* Title */}
        <div className="lg:col-span-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
            {workshop.category}
          </p>

          <h3 className="mt-2 text-2xl font-medium tracking-tight text-neutral-950">
            {workshop.title}
          </h3>
        </div>

        {/* Description */}
        <div className="lg:col-span-5">
          <p className="max-w-lg text-[15px] leading-7 text-neutral-600">
            {workshop.description}
          </p>
        </div>

        {/* Duration */}
        <div className="flex items-center justify-between lg:col-span-2 lg:justify-end lg:gap-5">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            {workshop.duration}
          </span>

          <span className="text-xl text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
            →
          </span>
        </div>

      </div>
    </div>
  );
}