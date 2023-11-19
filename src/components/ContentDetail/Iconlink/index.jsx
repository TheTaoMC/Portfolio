import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Iconlink = ({ icon, link }) => {
  return (
    <>
      <a href={link} target={"_blank"}>
        {!icon || icon === "" ? null : (
          <FontAwesomeIcon
            icon={icon}
            className="ml-2 hover:scale-150 transition-all"
          />
        )}
      </a>
    </>
  )
}

export default Iconlink
