import { Badge } from "@/components/ui/badge";
import { Section } from "../../layout/Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I would be happy to work with you !
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          className="flex-1"
          name="Kevin Bertin"
          image="https://media.licdn.com/dms/image/D4E03AQEDwBzXlq92jw/profile-displayphoto-shrink_400_400/0/1697701458445?e=1726704000&v=beta&t=GKYEZoRs1z5XrOXOzYEb_TWVpg0GYd7n4mj4crk-orQ"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
          description="Send me a message!"
          url="https://www.linkedin.com/in/kevin-bertin/"
        />
        <ContactCard
          className="flex-1"
          name="@gmail.com"
          image="https://media.licdn.com/dms/image/D4E03AQEDwBzXlq92jw/profile-displayphoto-shrink_400_400/0/1697701458445?e=1726704000&v=beta&t=GKYEZoRs1z5XrOXOzYEb_TWVpg0GYd7n4mj4crk-orQ"
          mediumImage="https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/gmail_new_logo-512.png"
          description="Send me a message!"
          url="mailto:kevinbertinpro@gmail.com"
        />
        <ContactCard
          className="flex-1"
          name="mrtinber"
          image="https://media.licdn.com/dms/image/D4E03AQEDwBzXlq92jw/profile-displayphoto-shrink_400_400/0/1697701458445?e=1726704000&v=beta&t=GKYEZoRs1z5XrOXOzYEb_TWVpg0GYd7n4mj4crk-orQ"
          mediumImage="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=ais_user"
          description="Send me a message!"
          url="https://twitter.com/mrtinber"
        />
      </div>
    </Section>
  );
};
