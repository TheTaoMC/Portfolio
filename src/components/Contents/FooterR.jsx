import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterR = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-end">
        Powered by React.js and Tailwind
        <a href="#">
          <FontAwesomeIcon className="ml-2" icon={faGithub} />
        </a>
      </div>
    </div>
  )
}

export default FooterR
