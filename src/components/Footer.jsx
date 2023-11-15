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
const Footer = () => {
  return (
    <>
      <div className="flex items-end gap-2 text-3xl ">
        <a href="https://github.com/TheTaoMC" target={"_blank"}>
          {" "}
          <FontAwesomeIcon
            className="hover:scale-150 hover:text-colortext1 transition-all"
            icon={faGithub}
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61551984365770"
          target={"_blank"}
        >
          {" "}
          <FontAwesomeIcon
            className="hover:scale-150 hover:text-colortext1 transition-all"
            icon={faFacebook}
          />
        </a>
      </div>
    </>
  );
};
export default Footer;
