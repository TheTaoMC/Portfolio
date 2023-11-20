import { useEffect } from "react"
import { dataabout } from "../Data"
const About = ({ onaddsectionidsin, title }) => {
  const Section_ID = `${title}-section`

  useEffect(() => {
    onaddsectionidsin(Section_ID,title)
  }, [])

  return (
    <>
      <div id={Section_ID} className="space-y-4 px-2 scroll-m-5">
        <div id={title} className="font-semibold text-colortext3">
          {title}
        </div>
        <div className="text-colortext3">{dataabout.description}</div>
      </div>
    </>
  )
}

export default About
