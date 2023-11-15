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

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col gap-4 font-semibold">
        <div>
          <FontAwesomeIcon className="mr-2" icon={faHashtag} />
          About
        </div>
        <div>Experience</div>
        <div>Project</div>
        <div>Article</div>
        <div>Certification</div>
      </div>
    </>
  );
};

export default Navbar;
