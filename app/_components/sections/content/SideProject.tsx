import { ChefHat, Dumbbell, House, LucideIcon } from "lucide-react";

export const SIDE_PROJECTS = [
  {
    Logo: House,
    title: "Kasa",
    description: "Un site de maisons",
  },
  {
    Logo: Dumbbell,
    title: "Sportify",
    description: "Un site de sport",
  },
  {
    Logo: ChefHat,
    title: "Les Petits Plats",
    description: "Un site de cuisine",
  },
];

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <div className="text-lg font-semibold">{props.title}</div>

        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </div>
  );
};
