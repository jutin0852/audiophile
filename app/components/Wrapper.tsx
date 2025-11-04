import React from "react";
import { twMerge } from "tailwind-merge";

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={twMerge("md:px-[165px] px-6", className)}>{children}</section>
  );
}
