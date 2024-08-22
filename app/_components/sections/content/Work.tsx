import { Badge } from "@/components/ui/badge";

export const WORKS = [
  {
    image:
      "https://www.pngkey.com/png/full/228-2289979_master-ball-pixel-art-pokemon-pokeball.png",
    title: "Nintendo",
    role: "Pokemon trainer",
    date: "1999 - Now",
    freelance: true,
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  freelance?: boolean;
};

export const Work = (props: WorkProps) => {
  return (
    <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <img
        src={props.image}
        alt={props.title}
        className="w-8 h-8 object-contain"
      />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div>
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </div>
  );
};
