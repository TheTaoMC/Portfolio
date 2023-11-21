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
import { useState } from "react"

/* const navs = [
  { title: "About", sectionid: "About-section" },
  { title: "Education", sectionid: "Education-section" },
  { title: "Experience", sectionid: "Experience-section" },
  { title: "Project", sectionid: "Project-section" },
  { title: "Certification", sectionid: "Certification-section" },
] */

const Navbar = ({ navitemsin, sectioncurrent }) => {
  const [ishover, setIshover] = useState({})
  //console.log("navvvvv : ", sectioncurrent)
  const handClick = (sectionid) => {
    //console.log(sectionid)
    document.getElementById(sectionid).scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <div className="hidden lg:flex flex-col font-semibold">
        {navitemsin.map((e, i) => (
          <div
            key={i}
            onClick={() => handClick(e.sectionid)}
            onMouseEnter={() => setIshover({ [e.title]: true })}
            onMouseLeave={() => setIshover({ [e.title]: false })}
            className={"cursor-pointer flex w-28 py-2"}
          >
            <div>
              <FontAwesomeIcon
                className={`new-arrow ${
                  sectioncurrent === e.sectionid
                    ? "text-colortext1"
                    : ishover[e.title] 
                    ? ""
                    : "hidden"
                } `}
                icon={faHashtag}
              />
            </div>
            <div
              className={`${sectioncurrent === e.sectionid ||
                ishover[e.title] ? "translate-x-4" : ""
              } duration-500 ease-out`}
            >
              {e.title}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Navbar
