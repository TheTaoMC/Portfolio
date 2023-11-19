import { useState } from "react"
import Contenttitle from "../ContentDetail/Contenttitle"
import Description from "../ContentDetail/Description"
import Iconlink from "../ContentDetail/Iconlink"
import Img from "../ContentDetail/Img"
import Tag from "../ContentDetail/Tag"
import Year from "../ContentDetail/Year"

/*
<ContentContainer
    title=""
    data={[]}
/>
*/
const ContentContainer = ({ title, data = [] }) => {
  const [ishover, setIshover] = useState({})
  console.log("setIshover:", ishover)

  const Section_ID = `${title}-section`
  return (
    <div id={Section_ID}>
      <div className="font-semibold text-colortext3 mb-4 px-2">{title}</div>
      {data.map((data, index) => (
        <div
          key={`${Section_ID}-${index}-${data.contenttitle.replaceAll(
            " ",
            ""
          )}`}
          className={`grid grid-cols-[25%_75%]  px-2 py-6 ${
            ishover[`${Section_ID}-${index}`] ? "bg-neutral-900" : ""
          }  rounded-xl `}
          onMouseEnter={() => setIshover({ [`${Section_ID}-${index}`]: true })}
          onMouseLeave={() => setIshover({ [`${Section_ID}-${index}`]: false })}
        >
          <div>
            {/* year */}
            <Year ishoverin={ishover[`${Section_ID}-${index}`]}>
              {data.year}
            </Year>
            {/* Img */}
            {data.img === "" ? "" : <Img imgin={data.img} />}
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
  )
}

export default ContentContainer
