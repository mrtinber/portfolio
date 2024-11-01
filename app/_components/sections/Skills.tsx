import { Badge } from "@/components/ui/badge";
import { Section } from "../layout/Section";
import { ReactIcon } from "../icons/ReactIcon";
import { ReduxIcon } from "../icons/ReduxIcon";
import { Code } from "../Code";
import { TypeScriptIcon } from "../icons/TypeScriptIcon";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
            </h2>
            <div className="flex max-md:flex-col gap-8">
                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon
                        size={50}
                        className="animate-pulse w-full flex justify-center"
                    />
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        React.js
                    </h3>
                    <p className="text-sm text-muted-foreground text-justify">
                        My main focus is on developing dynamic and interactive
                        web applications using <Code>React.js</Code>, mainly with{" "}
                        <Code>Vite</Code> and <Code>Next.js</Code>. I enjoy
                        building reusable components and managing complex UI
                        logic.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
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
                <div className="flex flex-col gap-2 flex-1">
                    <ReduxIcon
                        size={50}
                        className="animate-pulse w-full flex justify-center"
                    />
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Redux
                    </h3>
                    <p className="text-sm text-muted-foreground text-justify">
                        I like using <Code>Redux</Code> for state management,
                        ensuring a seamless flow of data
                        throughout the application while maintaining a clean and
                        scalable codebase.
                    </p>
                </div>
            </div>
        </Section>
    );
};
