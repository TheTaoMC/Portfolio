import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faCode, faHashtag } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faGithub,
  faLine,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import About from "./Contents/About";
import Experience from "./Contents/Experience";
const Content = () => {
  return (
    <>
      <div className="grid gap-y-32 px-2">
        <About />
        <Experience />

        <div className="mb-96">1</div>
        <div className="mb-96">1</div>
        <div className="mb-96">1</div>
        <div className="mb-96">1</div>
        <div className="mb-96">1</div>
        <div className="mb-96">1</div>
      </div>
    </>
  );
};
export default Content;
