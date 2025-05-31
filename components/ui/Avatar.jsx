import Image from "next/image";
import Link from "next/link";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 ",
  {
    variants: {
      size: {
        default: "w-10",
        sm: "w-6",
        lg: "w-16",
        xl: "w-20",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export const ImgAvatar = ({ className, size, ...props }) => (
  <Link
    href="/"
    aria-label="Home"
    className={cn(
      avatarVariants({ size, className }),
      "block pointer-events-auto group rounded-full p-0.5 box-gen",
    )}
    {...props}
  >
    <Image
      src="/images/avatar.png"
      alt="avatar Ahmed Khaled"
      width={size === "xl" ? 80 : size === "lg" ? 64 : size === "sm" ? 24 : 40}
      height={size === "xl" ? 80 : size === "lg" ? 64 : size === "sm" ? 24 : 40}
      className={cn(avatarVariants({ size, className }), "")}
      priority
    />
  </Link>
);

export const ImgAvatarNav = ({ className, size, ...props }) => (
  <div className="group">
    <Image
      src="/images/avatar.png"
      alt="avatar Ahmed Khaled"
      width={size === "xl" ? 80 : size === "lg" ? 64 : size === "sm" ? 24 : 40}
      height={size === "xl" ? 80 : size === "lg" ? 64 : size === "sm" ? 24 : 40}
      className={cn(avatarVariants({ size, className }), "")}
      priority
    />
  </div>
);

// Our custom Avatar component
export function Avatar({ mouseX, className, size, isnav, ...props }) {
  // Filter out custom props
  const safeProps = { ...props };
  delete safeProps.isnav;

  return (
    <>
      {isnav ? (
        <ImgAvatarNav
          size={size}
          className={cn(avatarVariants({ size, className }))}
          {...safeProps}
        />
      ) : (
        <ImgAvatar
          size={size}
          className={cn(avatarVariants({ size, className }))}
          {...safeProps}
        />
      )}
    </>
  );
}

// Export default for convenience
export default Avatar;
