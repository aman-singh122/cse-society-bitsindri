import Link from "next/link";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    category: string;
    date: string;
    venue: string;
    description: string;
  };
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href="/events"
      className="group block border-t border-black/10 py-7 transition-colors duration-300 hover:bg-black/[0.02]"
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
        
        <div className="lg:col-span-1">
          <span className="text-xs tracking-[0.2em] text-neutral-400">
            {event.id}
          </span>
        </div>

        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            {event.category}
          </p>

          <h3 className="mt-2 text-2xl font-medium tracking-tight text-neutral-950">
            {event.title}
          </h3>
        </div>

        <div className="lg:col-span-4">
          <p className="max-w-md text-sm leading-6 text-neutral-500">
            {event.description}
          </p>
        </div>

        <div className="flex items-center justify-between lg:col-span-3 lg:justify-end lg:gap-8">
          <div className="text-left lg:text-right">
            <p className="text-sm font-medium text-neutral-900">
              {event.date}
            </p>

            <p className="mt-1 text-xs text-neutral-400">
              {event.venue}
            </p>
          </div>

          <span className="text-xl text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
            →
          </span>
        </div>

      </div>
    </Link>
  );
}