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
import { data, datanav } from "./Data";

const Header = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-3xl text-colortext1 font-semibold">
          {data.name}
          <FontAwesomeIcon icon={faCode} beat size="2xs" className="ml-2" />
        </div>
        <div className="text-colortext3">{data.title}</div>
        <div className="w-[85%] text-colortext2 text-sm">
          {data.description}
        </div>
        <div className="mt-2 self-start">
          <a href="#" target={"_blank"}>
            <span className="bg-colortext1 text-colorbg font-semibold py-2 px-2 rounded-md">
              {data.btntxt}
              <FontAwesomeIcon
                icon={faFilePdf}
                className="ml-2 animate-bounce"
              />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
