import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Content from "./components/Content"
import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [sectionids, setSectionids] = useState([])
  const [sectionnames, setSectionnames] = useState([])
  const [navitems, setNavitems] = useState([])
  const [sectioncurrent, setSectioncurrent] = useState("")

  const addsectionids = (sectionid, title) => {
    //console.log(sectionid)
    //console.log(title)
    const elementid = document.getElementById(sectionid).id
    setSectionids((prev) => [...new Set([...prev, elementid])])

    const obj = { title: title, sectionid: elementid }
    setNavitems((prev) => {
      if (prev.findIndex((e) => e.title === obj.title) < 0) {
        return [...prev, obj]
      }
      return prev
    })
  }

  const handleScroll = () => {
    //console.log("scroll")
    for (let index = 0; index < sectionids.length; index++) {
      const el = sectionids[index]
      console.log("scroll", el)
    }
  }

  useEffect(() => {
    if (sectionids.length > 0) {
      //console.log(sectionids[0])
      setSectioncurrent(sectionids[0])
    }
  })

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  //console.log(document.getElementById("About").innerText)
  return (
    <div className="max-w-6xl mt-5 mx-auto grid gap-y-5 lg:grid-cols-[4fr_6fr]">
      {/* grid ซ้าย */}
      <div className="px-2">
        <div className="sticky top-5 grid gap-y-4 lg:grid-rows-[2fr_1fr_2fr] lg:h-[90vh]">
          <Header />
          <Navbar navitemsin={navitems} sectioncurrent={sectioncurrent} />
          <Footer />
        </div>
      </div>

      {/* grid ขวา */}
      <Content onaddsectionidsin={addsectionids} />
    </div>
  )
}

export default App
