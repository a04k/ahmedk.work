import Image from "next/image";

import { Card } from "@/components/cards/Card";
import LinkArrow from "@/components/ui/LinkArrow";

export function Tool({ title, href, img, children, grid, index }) {
  return (
    <Card as="li" className="relative z-10">
      <LinkArrow variant="grid" />
      {grid && (
        <div className="w-[70px] h-[70px] mx-auto flex items-center justify-center overflow-hidden">
          <Image
            src={img}
            alt={title}
            width={70}
            height={70}
            className="object-contain transition-transform duration-700 pointer-events-none rounded-lg"
            priority={index <= 1}
          />
        </div>
      )}

      <Card.Title
        as="div"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={grid && "text-xs, text-center w-full"}
      >
        {title}
      </Card.Title>
      {!grid && <Card.Description>{children}</Card.Description>}
    </Card>
  );
}
