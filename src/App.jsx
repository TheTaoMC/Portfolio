import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [sectionids, setSectionids] = useState([]);
  const [sectionnames, setSectionnames] = useState([]);
  const [navitems, setNavitems] = useState([]);
  const [sectioncurrent, setSectioncurrent] = useState("");
  //console.log("sectionids: ", sectionids)

  const addsectionids = (sectionid, title) => {
    //console.log(sectionid)
    //console.log(title)
    const elementid = document.getElementById(sectionid).id;
    setSectionids((prev) => [...new Set([...prev, elementid])]);

    const obj = { title: title, sectionid: elementid };
    setNavitems((prev) => {
      if (prev.findIndex((e) => e.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    });
  };

  const handleScroll = () => {
    for (let index = 0; index < sectionids.length; index++) {
      const el = sectionids[index];
      const elOffsetTop = document.getElementById(el).getClientRects()[0].y;
      console.log("y : ", elOffsetTop);
      const height =
        document.getElementById(el).getClientRects()[0].height * 0.5;
        console.log("h : ", document.getElementById(el).getClientRects()[0].height);
      console.log("h*0.2 : ", height);
      const viewHeight = window.innerHeight * 0.3;
      console.log("vp : ", window.innerHeight);
      console.log("vp*0.3 : ", viewHeight);
      if (elOffsetTop <= 0) {
        if (elOffsetTop + height > viewHeight) {
          setSectioncurrent(el);
        }
      } else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
        setSectioncurrent(el);
      }
    }
  };

  useEffect(() => {
    if (sectionids.length > 0) {
      setSectioncurrent(sectionids[0]);
    }
  }, [sectionids]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionids]);

  //console.log(document.getElementById("About").innerText)
  return (
    <div className=" max-w-6xl mt-5 mx-auto grid gap-y-5 lg:grid-cols-[4fr_6fr]">
      {/* grid ซ้าย */}
      <div className="px-4">
        <div className="sticky top-5 grid gap-y-4 lg:grid-rows-[2fr_1fr_2fr] lg:h-[90vh]">
          <Header />
          <Navbar navitemsin={navitems} sectioncurrent={sectioncurrent} />
          <Footer />
        </div>
      </div>

      {/* grid ขวา */}
      <Content onaddsectionidsin={addsectionids} />
    </div>
  );
}

export default App;
