import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faCode, faHashtag, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faGithub,
  faLine,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { dataContentDetail } from "../Data";
import imgExp from "../../assets/exp1.jpg";
import { useState } from "react";
import Year from "../ContentDetail/Year";
import Img from "../ContentDetail/Img";
import Contenttitle from "../ContentDetail/Contenttitle";
import Iconlink from "../ContentDetail/Iconlink";
import Description from "../ContentDetail/Description";
import Tag from "../ContentDetail/Tag";

const Experience = () => {
  const [ishover, setIshover] = useState({});
  console.log(ishover);
  return (
    <>
      <div className="">
        <div className="font-semibold text-colortext3 mb-4 px-2">
          {dataContentDetail.title}
        </div>

        <div
          className={`grid grid-cols-[25%_75%]  px-2 py-6 ${
            ishover["exp1"] ? "bg-neutral-900" : ""
          }  rounded-xl `}
          onMouseEnter={() => setIshover({ ["exp1"]: true })}
          onMouseLeave={() => setIshover({ ["exp1"]: false })}
        >
          <div>
            {/* year */}
            <Year ishoverin={ishover["exp1"]}>2023</Year>
            {/* Img */}
            <Img imgin={imgExp} />
          </div>
          <div className="grid gap-y-4">
            {/* Contenttitle */}
            <Contenttitle
              ishoverin={ishover["exp1"]}
              title={"Restaurant Review"}
              link={"https://www.thetaomc.xyz/"}
            />
            {/* Iconlink */}
            <div className="flex gap-2">
              <Iconlink
                icon={faGithub}
                link={"https://github.com/TheTaoMC/Isaan_Food_House"}
              />
              <Iconlink
                icon={faYoutube}
                link={"https://github.com/TheTaoMC/Isaan_Food_House"}
              />
              <Iconlink
                icon={faFacebook}
                link={"https://github.com/TheTaoMC/Isaan_Food_House"}
              />
            </div>
            {/* Description */}
            <Description
              description={
                "This application is a restaurant review application developed with React Native. It allows users to find and review restaurants in their area."
              }
            />
            <div>
              {/* Tag */}
              <Tag
                ishoverin={ishover["exp1"]}
                datain={["React Native", "React Native Paper"]}
              />
            </div>
          </div>
        </div>
        {/* 22222222222 */}
        <div
          className={`grid grid-cols-[25%_75%]  px-2 py-6 ${
            ishover["exp2"] ? "bg-neutral-900" : ""
          }  rounded-xl `}
          onMouseEnter={() => setIshover({ ["exp2"]: true })}
          onMouseLeave={() => setIshover({ ["exp2"]: false })}
        >
          <div>
            <div>
              <span
                className={`${
                  ishover["exp2"] ? "text-colortext3" : "text-colortext2"
                }`}
              >
                {dataContentDetail.year}
              </span>
            </div>
            <div>
              <img
                src={imgExp}
                className="w-5/6 rounded-md border-2 border-colortext4 "
              />
            </div>
          </div>
          <div className="grid gap-y-4">
            <div
              className={`font-medium ${
                ishover["exp2"] ? "text-colortext1" : "text-colortext3"
              }`}
            >
              {dataContentDetail.contenttitle}
              <FontAwesomeIcon
                className={`ml-2 transition-all ${
                  ishover["exp2"] ? "translate-x-1 -translate-y-1" : ""
                }`}
                icon={faTurnUp}
              />
            </div>
            <div className="flex gap-2">
              <a
                href="https://github.com/TheTaoMC/Isaan_Food_House"
                target={"_blank"}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="ml-2 hover:scale-150 transition-all"
                />
              </a>
              <FontAwesomeIcon
                icon={faCode}
                className="ml-2 hover:scale-150 transition-all"
              />
            </div>
            <div className="text-sm text-colortext2">
              {dataContentDetail.description}
            </div>
            <div>
              <div className="flex gap-4 text-sm">
                <div
                  className={`bg-colortext4  p-1 rounded-md ${
                    ishover["exp2"] ? "text-colortext1" : "text-colortext2"
                  }`}
                >
                  tag1
                </div>
                <div
                  className={`bg-colortext4  p-1 rounded-md ${
                    ishover["exp2"] ? "text-colortext1" : "text-colortext2"
                  }`}
                >
                  tag2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
