import { Image } from "@unpic/react";
import { formatDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import { Card } from "@/components/cards/Card"; // Assuming Card is correctly imported

export function ProjectCardHome({ project, className, index }) {
  return (
    <div
      className={cn(
        "relative h-[240px] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200",
        className,
      )}
    >
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        {project.cover && (
          <Image
            src={project.cover || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority={index <= 1}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/5 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 box-gen px-4 py-3 flex items-center justify-between text-white z-20">
        <p>{project.title}</p>
        <p>{formatDate(project.publishedAt)}</p>
      </div>
      <a
        href={project.slug}
        className="absolute inset-0 z-30"
        aria-label={project.title}
      ></a>
    </div>
  );
}

export function ProjectCardGal({ project, className, index }) {
  return (
    <Card
      as="div"
      key={project.title}
      className={cn("p-0 h-[240px] overflow-visible", className)}
    >
      <div className="relative w-full h-full rounded-2xl">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {project.cover && (
            <Image
              src={project.cover || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover object-center"
              priority={index <= 1}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/5 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 box-gen px-4 py-3 flex items-center justify-between z-20">
          <p className="text-sm font-InstrumentSerif text-white">{project.title}</p>
          <p className="text-xs text-zinc-300">{formatDate(project.publishedAt)}</p>
        </div>
        <a
          href={project.slug}
          className="absolute inset-0 z-30"
          aria-label={`View project ${project.title}`}
        ></a>
      </div>
    </Card>
  );
}

// Create the ProjectCard component
export function ProjectCard(props) {
  return <ProjectCardHome {...props} />;
}

// Add all variations as properties
ProjectCard.Home = ProjectCardHome;
ProjectCard.Gallery = ProjectCardGal;

// Export as both named and default export
export default ProjectCard;
