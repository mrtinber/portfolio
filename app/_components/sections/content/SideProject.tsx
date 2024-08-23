import { ChefHat, Dumbbell, House, LucideIcon, Sparkles } from "lucide-react";
import { ReactNode } from "react";
import { Code } from "../../Code";

export const SIDE_PROJECTS = [
    {
        Logo: House,
        title: "Kasa",
        description:
            <span>A housing website that lists available accommodations. <br/> <Code>React Router</Code>, <Code>Sass</Code>, <Code>JSON</Code>, <Code>Node.js</Code></span>,
    },
    {
        Logo: Dumbbell,
        title: "Sportify",
        description:
            <span>An analytics dashboard featuring various types of charts. <br/> <Code>Recharts</Code>, <Code>TypeScript</Code></span>,
    },
    {
        Logo: ChefHat,
        title: "Les Petits Plats",
        description:
            <span>A recipe website with a complex research algorithm. <br/><Code>JavaScript</Code>, <Code>Tailwind CSS</Code></span>,
    },
    {
        Logo: Sparkles,
        title: "Disney+ Clone",
        description:
            <span>A clone of the popular Disney+ streaming site. <br/> <Code>React Router</Code>, <Code>Tailwind CSS</Code>, <Code>TypeScript</Code></span>,
    },
];

export type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: ReactNode;
    url?: string;
};

export const SideProject = (props: SideProjectProps) => {
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors py-1 px-3 rounded">
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.Logo size={16} />
            </span>
            <div>
                <div className="text-lg font-semibold">{props.title}</div>

                <p className="text-sm text-muted-foreground text-justify leading-6">
                    {props.description}
                </p>
            </div>
        </div>
    );
};
