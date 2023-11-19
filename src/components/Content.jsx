import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-regular-svg-icons"
import { faCode, faHashtag } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faFacebookF,
  faGithub,
  faLine,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import About from "./Contents/About"
import Experience from "./Contents/Experience"
import ContentContainer from "./Contents/ContentContainer"
import {
  dataEducation,
  dataProject,
  dataExperience,
  dataCertification,
} from "./Data"
import FooterR from "./Contents/FooterR"

const Content = () => {
  return (
    <>
      <div className="grid gap-y-32 px-2">
        <About />
        <ContentContainer title={"Education"} data={dataEducation} />
        <ContentContainer title={"Experience"} data={dataExperience} />
        <ContentContainer title={"Project"} data={dataProject} />
        <ContentContainer title={"Certification"} data={dataCertification} />
        <FooterR />
      </div>
    </>
  )
}
export default Content
