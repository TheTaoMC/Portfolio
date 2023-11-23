import { useEffect } from "react";
import { dataabout } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
const About = ({ onaddsectionidsin, title, sectioncurrent }) => {
  const Section_ID = `${title}-section`;

  useEffect(() => {
    onaddsectionidsin(Section_ID, title);
  }, []);

  return (
    <>
      <div id={Section_ID} className="space-y-4 px-2 scroll-m-5">
        <div id={title} className="text-xl font-semibold text-colortext3 flex">
          <div>
            <FontAwesomeIcon
              className={`text-xl self-center  ${
                sectioncurrent === Section_ID
                  ? "new-arrow text-colortext1"
                  : "hidden text-colortext4"
              }`}
              icon={faCaretRight}
            />
          </div>
          <div
            className={` self-center  ${
              sectioncurrent.indexOf(Section_ID) > -1
                ? "translate-x-4 text-colortext1"
                : " text-colortext3"
            } duration-500 ease-out`}
          >
            {title}
          </div>
        </div>
        <div className="text-colortext3">{dataabout.description}</div>
      </div>
    </>
  );
};

export default About;
