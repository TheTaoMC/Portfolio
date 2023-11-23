import { useEffect } from "react";
import { useState } from "react";
import Contenttitle from "../ContentDetail/Contenttitle";
import Description from "../ContentDetail/Description";
import Iconlink from "../ContentDetail/Iconlink";
import Img from "../ContentDetail/Img";
import Tag from "../ContentDetail/Tag";
import Year from "../ContentDetail/Year";
import { iconMappings } from "../ContentDetail/Iconlink/IconMappings";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faLocationDot,
  faMinus,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

/*
<ContentContainer
    title=""
    data={[]}
/>
*/
const ContentContainer = ({
  onaddsectionidsin,
  title,
  data = [],
  sectioncurrent,
}) => {
  const [ishover, setIshover] = useState({});
  const [ishovertitle, setIshovertitle] = useState({});
  //console.log("setIshoverp:", ishovertitle);
  console.log(sectioncurrent);
  const Section_ID = `${title}-section`;

  //console.log(Section_ID, " = ", Section_ID);

  useEffect(() => {
    onaddsectionidsin(Section_ID, title);
  }, []);

  return (
    <div className="scroll-m-5" id={Section_ID}>
      <div
        id={Section_ID}
        className={`font-semibold flex
        ${
          sectioncurrent.indexOf(Section_ID) > -1
            ? "text-colortext1"
            : "text-colortext4"
        } mb-4 px-2`}
      >
        <div>
          <FontAwesomeIcon
            className={`text-xl self-center align-middle ${
              sectioncurrent === Section_ID ||
              ishovertitle[`${Section_ID}-${title}`]
                ? "new-arrow text-colortext1"
                : "hidden text-colortext4"
            }`}
            icon={faCaretRight}
          />
        </div>
        <div
          className={`text-xl self-center  ${
            sectioncurrent.indexOf(Section_ID) > -1 ||
            ishovertitle[`${Section_ID}-${title}`]
              ? "translate-x-4 text-colortext1"
              : " text-colortext3"
          } duration-500 ease-out`}
        >
          {title}
        </div>
      </div>
      {data.map((data, index) => (
        <div
          key={`${Section_ID}-${index}-${data.contenttitle.replaceAll(
            " ",
            ""
          )}`}
          className={`grid grid-cols-[25%_75%]  px-2 py-6 ${
            ishover[`${Section_ID}-${index}`] ? "bg-colortext5 shadow-xl" : ""
          }  rounded-xl `}
          onMouseEnter={() => {
            setIshovertitle({ [`${Section_ID}-${title}`]: true });
            setIshover({ [`${Section_ID}-${index}`]: true });
          }}
          onMouseLeave={() => {
            setIshovertitle({ [`${Section_ID}-${title}`]: false });
            setIshover({ [`${Section_ID}-${index}`]: false });
          }}
        >
          <div>
            {/* year */}
            <Year ishoverin={ishover[`${Section_ID}-${index}`]}>
              {data.year}
            </Year>
            {/* Img */}
            {}
            <Img imgin={data.img} />
          </div>
          <div className="grid gap-y-4">
            {/* Contenttitle */}
            <Contenttitle
              ishoverin={ishover[`${Section_ID}-${index}`]}
              title={data.contenttitle}
              link={data.contenttitlelink}
            />
            {/* Iconlink */}
            {data.iconlinks.length > 0 ? (
              <div className="flex gap-2 items-center">
                {data.iconlinks.map((data, index) => (
                  //<Iconlink key={index} icon={data.icon} link={data.link} />
                  <Iconlink
                    key={index}
                    icon={iconMappings[data.icon] || data.icon}
                    link={data.link}
                  />
                ))}
              </div>
            ) : null}
            {/* Description */}
            {data.descriptions.map((data, index) => (
              <Description key={index} description={data} />
            ))}
            <div>
              {/* Tag */}

              {data.tags.map((e, i) => (
                <Tag
                  key={i}
                  ishoverin={ishover[`${Section_ID}-${index}`]} //ไอ้สัส หาตั้งนาน
                  datain={e}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentContainer;
