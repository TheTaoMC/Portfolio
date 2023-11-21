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
import DataJson from "../Data/SKILLS.json"

const Content = ({ onaddsectionidsin }) => {
  //console.log(DataJson);
  return (
    <>
      <div className="grid gap-y-32 px-2">
        <About onaddsectionidsin={onaddsectionidsin} title={"About"} />
        <ContentContainer
          onaddsectionidsin={onaddsectionidsin}
          title={"SKILLS"}
          data={DataJson}
        />
        <ContentContainer
          onaddsectionidsin={onaddsectionidsin}
          title={"Education"}
          data={dataEducation}
        />
        <ContentContainer
          onaddsectionidsin={onaddsectionidsin}
          title={"Experience"}
          data={dataExperience}
        />
        <ContentContainer
          onaddsectionidsin={onaddsectionidsin}
          title={"Project"}
          data={dataProject}
        />
        <ContentContainer
          onaddsectionidsin={onaddsectionidsin}
          title={"Certification"}
          data={dataCertification}
        />
        <FooterR />
      </div>
    </>
  )
}
export default Content
