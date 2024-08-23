import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/30 border-accent border rounded-sm p-1 font-mono", className)} {...props} />;
};
