import { dataabout } from "../Data";
const About = () => {
  return (
    <>
      <div className="space-y-4 px-2">
        <div className="font-semibold text-colortext3">{dataabout.title}</div>
        <div className="text-colortext3">{dataabout.description}</div>
      </div>
    </>
  );
};

export default About;
