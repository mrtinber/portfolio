import { Badge } from "@/components/ui/badge";

export const WORKS = [
  {
    image:
    "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
    title: "Rekkio Musique",
    role: "Designer & Frontend Developer",
    date: "Feb. 2025 - Apr. 2025",
    freelance: true,
    url:"https://www.rekkiomusique.fr/"
  },
  {
    image:
    "../teachthere-plane.svg",
    title: "TeachThere",
    role: "Web Designer & Frontend Developer",
    date: "Nov. 2024",
    freelance: true,
    url:"https://www.teachtherechina.com/"
  },
  {
    image:
    "https://www.pro-voyages.com/storage/app/uploads/public/5a2/dad/0ba/5a2dad0bac6bc503107894.png",
    title: "Alliance Française of Shanghai",
    role: "French Teacher",
    date: "2020 - 2025",
    freelance: false,
  },
  {
    image:
    "https://www.pro-voyages.com/storage/app/uploads/public/5a2/dad/0ba/5a2dad0bac6bc503107894.png",
    title: "Alliance Française of Nanjing",
    role: "French Teacher",
    date: "2019 - 2020",
    freelance: false,
  },
  // {
  //   image:
  //     "https://www.pngkey.com/png/full/228-2289979_master-ball-pixel-art-pokemon-pokeball.png",
  //   title: "Nintendo",
  //   role: "Pokemon trainer",
  //   date: "1999 - 2012",
  //   freelance: true,
  // },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  freelance?: boolean;
  url?: string;
};

export const Work = (props: WorkProps) => {
  return (
    <a href={props.url} target="_blank" className="inline-flex items-center justify-between gap-4 hover:bg-accent/50 transition-colors p-1 rounded-sm">
      <div className="flex items-center gap-4">
        <img
          src={props.image}
          alt={props.title}
          className="w-8 h-8 object-contain"
        />
        <div>
          <div className="flex items-center gap-2">
            <p className="text-md font-semibold">{props.title}</p>
            {props.freelance && <Badge variant="outline">Mission</Badge>}
          </div>
          <p className="text-sm text-muted-foreground">{props.role}</p>
        </div>
      </div>
      <div>
        <p className="text-xs text-end text-muted-foreground text-nowrap">{props.date}</p>
      </div>
    </a>
  );
};
