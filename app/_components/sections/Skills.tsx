import { Badge } from "@/components/ui/badge";
import { Section } from "../layout/Section";
import { ReactIcon } from "../icons/ReactIcon";
import { ReduxIcon } from "../icons/ReduxIcon";
import { Code } from "../Code";
import { TypeScriptIcon } from "../icons/TypeScriptIcon";
import { TailwindIcon } from "../icons/TailwindIcon";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
            </h2>
            <div className="flex max-md:flex-col gap-8">
                <div className="flex flex-col gap-4 flex-1">
                    <ReactIcon
                        size={50}
                        className="animate-pulse w-full flex justify-center"
                    />
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        React.js
                    </h3>
                    <p className="text-sm text-muted-foreground text-justify">
                        My main focus is on developing dynamic and interactive
                        web applications using <Code>React.js</Code>, mainly
                        with <Code>Vite</Code> and <Code>Next.js</Code>. I enjoy
                        building reusable components and managing complex UI
                        logic.
                    </p>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <TypeScriptIcon
                        size={50}
                        className="animate-pulse w-full flex justify-center"
                    />
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        TypeScript
                    </h3>
                    <p className="text-sm text-muted-foreground text-justify">
                        I enhance my React applications with{" "}
                        <Code>TypeScript</Code> to ensure type safety and reduce
                        bugs, resulting in more robust and reliable code.
                    </p>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <TailwindIcon
                        size={50}
                        className="animate-pulse w-full flex justify-center"
                    />
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Tailwind
                    </h3>
                    <p className="text-sm text-muted-foreground text-justify">
                        I enjoy using <Code>Tailwind CSS</Code> to design
                        intuitive and responsive user interfaces quickly,
                        ensuring a cohesive and visually appealing design system
                        while speeding up the development process.
                    </p>
                </div>
            </div>
        </Section>
    );
};
