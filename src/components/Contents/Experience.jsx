import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-regular-svg-icons"
import { faCode, faHashtag, faTurnUp } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faFacebookF,
  faGithub,
  faLine,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { dataExperience } from "../Data"
import imgExp from "../../assets/exp1.jpg"
import { useState } from "react"
import Year from "../ContentDetail/Year"
import Img from "../ContentDetail/Img"
import Contenttitle from "../ContentDetail/Contenttitle"
import Iconlink from "../ContentDetail/Iconlink"
import Description from "../ContentDetail/Description"
import Tag from "../ContentDetail/Tag"

const Experience = () => {
  const [ishover, setIshover] = useState({})
  console.log("setIshover:", ishover)

  const Section_ID = "Experience-Section"
  return (
    <>
      <div id={Section_ID}>
        <div className="font-semibold text-colortext3 mb-4 px-2">
          Experience
        </div>
        {dataExperience.map((data, index) => (
          <div
            key={`${Section_ID}-${index}-${data.contenttitle.replaceAll(
              " ",
              ""
            )}`}
            className={`grid grid-cols-[25%_75%]  px-2 py-6 ${
              ishover[`${Section_ID}-${index}`] ? "bg-neutral-900" : ""
            }  rounded-xl `}
            onMouseEnter={() =>
              setIshover({ [`${Section_ID}-${index}`]: true })
            }
            onMouseLeave={() =>
              setIshover({ [`${Section_ID}-${index}`]: false })
            }
          >
            <div>
              {/* year */}
              <Year ishoverin={ishover[`${Section_ID}-${index}`]}>
                {data.year}
              </Year>
              {/* Img */}
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
                    <Iconlink key={index} icon={data.icon} link={data.link} />
                  ))}
                </div>
              ) : null}
              {/* Description */}
              {data.descriptions.map((data, index) => (
                <Description key={index} description={data} />
              ))}
              <div>
                {/* Tag */}
                {/*                {data.tags.map((data, index) => (
                  <Tag
                    key={index}
                    ishoverin={ishover[`${Section_ID}-${index}`]}
                    datain={data}
                  />
                ))} */}

                {data.tags.map((data, i) => (
                  <Tag
                    key={i}
                    ishoverin={ishover[`${Section_ID}-${index}`]} //ไอ้สัส หาตั้งนาน
                    datain={data}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Experience
