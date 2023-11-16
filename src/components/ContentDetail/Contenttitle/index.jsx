import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contenttitle = ({ ishoverin, title, link }) => {
  if (!link) {
    return (
      <div
        className={`font-medium ${
          ishoverin ? "text-colortext1" : "text-colortext3"
        }`}
      >
        {title}
      </div>
    );
  }
  return (
    <>
      <div
        className={`font-medium ${
          ishoverin ? "text-colortext1" : "text-colortext3"
        }`}
      >
        <a href={link} target="_blank">
          {title}
          <FontAwesomeIcon
            className={`ml-2 transition-all ${
              ishoverin ? "translate-x-1 -translate-y-1" : ""
            }`}
            icon={faTurnUp}
          />
        </a>
      </div>
    </>
  );
};

export default Contenttitle;
