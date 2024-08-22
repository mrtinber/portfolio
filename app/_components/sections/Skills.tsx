import { Badge } from "@/components/ui/badge";
import { Section } from "../layout/Section";
import { ReactIcon } from "../icons/ReactIcon";
import { SassIcon } from "../icons/SassIcon";
import { ReduxIcon } from "../icons/ReduxIcon";
import { Code } from "../Code";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon
                        size={50}
                        className="animate-pulse w-full flex justify-center"
                    />
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        React.js
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        My main framework is <Code>React.js</Code>. Collaborate
                        seamlessly with all the organization and hit your
                        marketing goals every month with our marketing plan.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <SassIcon
                        size={50}
                        className="animate-pulse w-full flex justify-center"
                    />
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Sass
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Plan it, create it, launch it. Collaborate seamlessly
                        with all the organization and hit your marketing goals
                        every month with our marketing plan.
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
                    <p className="text-sm text-muted-foreground">
                        Plan it, create it, launch it. Collaborate seamlessly
                        with all the organization and hit your marketing goals
                        every month with our marketing plan.
                    </p>
                </div>
            </div>
        </Section>
    );
};
