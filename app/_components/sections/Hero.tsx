import { Code } from "../Code";
import { ReactIcon } from "../icons/ReactIcon";
import { ReduxIcon } from "../icons/ReduxIcon";
import { SassIcon } from "../icons/SassIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { TypeScriptIcon } from "../icons/TypeScriptIcon";
import { Section } from "../layout/Section";

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col-reverse items-center justify-between gap-16 md:gap-4 md:mt-8">
            <div className="flex-[3] flex flex-col gap-2">
                <h2 className="font-caption text-5xl font-bold text-primary">
                    Kevin Bertin
                </h2>
                <h3 className="text-3xl font-caption">Front-End Developer</h3>
                <p className="text-justify">
                    Passionate front-end developer with a unique background in
                    linguistics and education, being a French teacher in China.
                    After completing a one-year intensive training in frontend
                    development in just seven months, I am now focused on
                    creating dynamic web applications using{" "}
                    <Code className="inline-flex items-center gap-1 py-0">
                        <ReactIcon className="inline" size={16} />
                        React.js
                    </Code>
                    ,{" "}
                    <Code className="inline-flex items-center gap-1 py-0">
                        <SassIcon className="inline" size={16} />
                        Sass
                    </Code>
                    ,{" "}
                    <Code className="inline-flex items-center gap-1 py-0">
                        <TailwindIcon className="inline" size={16} />
                        TailwindCSS
                    </Code>
                    ,{" "}
                    <Code className="inline-flex items-center gap-1 py-0">
                        <ReduxIcon className="inline" size={16} />
                        Redux
                    </Code>{" "}
                    and{" "}
                    <Code className="inline-flex items-center gap-1 py-0">
                        <TypeScriptIcon className="inline" size={16} />
                        TypeScript
                    </Code>
                    . I am eager to bring my unique perspective and skills to
                    the tech industry.
                </p>
            </div>
            <div className="flex-[2] flex justify-center">
                <img
                    // src="https://media.licdn.com/dms/image/D4E03AQEDwBzXlq92jw/profile-displayphoto-shrink_400_400/0/1697701458445?e=1726704000&v=beta&t=GKYEZoRs1z5XrOXOzYEb_TWVpg0GYd7n4mj4crk-orQ"
                    src="./profilepic1.jpg"
                    alt="Ma photo de profil"
                    className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
                />
            </div>
        </Section>
    );
};
