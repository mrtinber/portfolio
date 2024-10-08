import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TwitterIcon } from "../icons/TwitterIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { InstagramIcon } from "../icons/InstagramIcon";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <Section className="flex items-baseline py-4 gap-2">
        <h1 className="text-lg font-bold text-primary">mrtinber.github.io/portfolio</h1>
        <p className="text-lg text-muted-foreground">Software Engineer</p>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/mrtinber"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.instagram.com/kevintinber/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <InstagramIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kevin-bertin/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedInIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
