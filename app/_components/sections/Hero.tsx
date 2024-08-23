import { Section } from "../layout/Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] flex-col gap-2">
        <h2 className="font-caption text-5xl font-bold text-primary">
          Kevin Bertin
        </h2>
        <h3 className="text-3xl font-caption">Software Developer</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          neque dolores quisquam, unde, sed, voluptates rem iure aut corrupti
          ducimus veniam expedita libero totam iste possimus esse laborum quae
          magni.
        </p>
      </div>
      <div className="flex-[2]">
        <img
          src="./JDRvXE5N_400x400.png"
          alt="Ma photo de profil"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
        />
      </div>
    </Section>
  );
};
