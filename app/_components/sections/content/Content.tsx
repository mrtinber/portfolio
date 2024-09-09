import { Card } from "@/components/ui/card";
import { Section } from "../../layout/Section";
import { ContactCard } from "../contact/ContactCard";
import { SIDE_PROJECTS, SideProject } from "./SideProject";
import { Work, WORKS } from "./Work";

export const Content = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] flex flex-col">
                <Card className="flex-1 p-4 flex flex-col gap-2 w-full h-full">
                    <p className="text-lg text-muted-foreground">
                        Side projects
                    </p>

                    <div className="flex flex-col justify-between h-full gap-2 flex-grow">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] flex flex-col gap-4">
                <Card className="flex-1 p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Work</p>

                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work key={index} {...work} />
                        ))}
                    </div>
                </Card>
                <Card className="flex-1 p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact</p>
                    <ContactCard
                        name="Kevin Bertin"
                        image="./profilepic1.jpg"
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                        description="Send me a message!"
                        url="https://www.linkedin.com/in/kevin-bertin-286818292/"
                    />
                </Card>
            </div>
        </Section>
    );
};
