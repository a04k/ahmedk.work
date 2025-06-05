"use client";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import { Card } from "@/components/cards/Card"; // Assuming Card is correctly imported

export function ProjectCardHome({ project, className, index }) {
  return (
    <div
      className={cn(
        "relative h-[240px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200",
        className,
      )}
    >
      {project.cover && (
        <Image
          src={project.cover || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority={index <= 1}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
      <a
        href={project.slug}
        className="absolute inset-0 z-20"
        aria-label={project.title}
      ></a>
      <div className="absolute z-30 flex flex-row items-center justify-between w-full p-4 text-white bottom-2">
        <p>{project.title}</p>
        <p>{formatDate(project.publishedAt)}</p>
      </div>
    </div>
  );
}

export function ProjectCardGal({ project, className, index }) {
  return (
    <Card
      as="div"
      key={project.title}
      className={cn("p-0 h-[240px]", className)}
    >
      {/* The main content container within Card. It establishes a stacking context. */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {project.cover && (
          <Image
            src={project.cover || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover" // Base layer
            priority={index <= 1}
          />
        )}
        {/* Original gradient overlay, positioned above the image */}
        <div className="absolute z-10 w-full h-full -bottom-[64px] bg-gradient-to-t from-neutral-900 to-transparent"></div>

        {/* Full card link overlay, positioned above gradient and image */}
        <a
          href={project.slug}
          className="absolute inset-0 z-20"
          aria-label={`View project ${project.title}`}
        ></a>

        {/* The Card.Link that was rendering the title at the top-left has been removed. */}
        {/* <Card.Link href={project.slug}>{project.title}</Card.Link> */}

        {/* Bottom text, positioned above the link overlay to ensure it's visible and readable */}
        <span className="absolute z-30 flex flex-row items-center justify-between w-full h-8 p-4 text-white flex-nowrap bottom-2">
          <p>{project.title}</p>
          <p>{formatDate(project.publishedAt)}</p>
        </span>
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
