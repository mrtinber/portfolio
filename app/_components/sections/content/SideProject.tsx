import { ChefHat, Dumbbell, House, LucideIcon, Sparkles, ClipboardCheck } from "lucide-react";
import { ReactNode } from "react";
import { Code } from "../../Code";
import Link from "next/link";

export const SIDE_PROJECTS = [
    {
        Logo: ClipboardCheck,
        title: "TuDou",
        url: 'https://tudou-steel.vercel.app/',
        description:
            <span>A to-do list app linked to a database to follow your tasks during the week. <br/> <Code>React</Code>, <Code>Prisma</Code>, <Code>Supabase</Code>, <Code>Tailwind CSS</Code>, <Code>TypeScript</Code></span>,
    },
    {
        Logo: Sparkles,
        title: "Disney+ Clone",
        url: 'https://mrtinber.github.io/disneyplus-clone/',
        description:
            <span>A clone of the popular Disney+ streaming site. <br/> <Code>React</Code>, <Code>React Router</Code>, <Code>Tailwind CSS</Code>, <Code>TypeScript</Code></span>,
    },
    {
        Logo: Dumbbell,
        title: "Sportify",
        url: 'https://mrtinber.github.io/SportSee-app/',
        description:
            <span>An analytics dashboard featuring various types of charts. <br/> <Code>React</Code>, <Code>Recharts</Code>, <Code>TypeScript</Code></span>,
    },
    {
        Logo: House,
        title: "Kasa",
        url: 'https://mrtinber.github.io/Kasa-FR/',
        description:
            <span>A housing website that lists available accommodations. <br/> <Code>React</Code>, <Code>React Router</Code>, <Code>Sass</Code>, <Code>JSON</Code>, <Code>Node.js</Code></span>,
    },
    {
        Logo: ChefHat,
        title: "Les Petits Plats",
        url: 'https://mrtinber.github.io/PetitsPlats2.0/',
        description:
            <span>A recipe website with a complex research algorithm. <br/><Code>JavaScript</Code>, <Code>Tailwind CSS</Code>, <Code>HTML</Code></span>,
    },
];

export type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: ReactNode;
    url: string;
};

export const SideProject = (props: SideProjectProps) => {

    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors py-1 px-3 rounded">
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.Logo size={16} />
            </span>
            <div>
                <div className="text-lg font-semibold">{props.title}</div>

                <p className="text-sm text-muted-foreground text-justify leading-6">
                    {props.description}
                </p>
            </div>
        </Link>
    );
};
