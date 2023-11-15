import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-6xl mt-5 mx-auto grid grid-cols-[4fr_6fr]">
      {/* grid ซ้าย */}
      <div>
        <div className="sticky top-5 grid grid-rows-[40%_40%_20%] h-screen">
          <div className="flex flex-col gap-2">
            <div className="text-3xl text-colortext1 font-semibold">
              Manote Bunyoy
              <FontAwesomeIcon icon={faCode} beat size="2xs" className="ml-2" />
            </div>
            <div className="text-colortext3">
              Software Developer · between jobs
            </div>
            <div className="w-[85%] text-colortext2 text-sm">
              From imagination to design. From design to development. From
              development to product. We complete it all in one place.
            </div>
            <div className="mt-2 self-center">
              <a href="#" t>
                <span className="bg-colortext1 text-colorbg font-semibold py-2 px-2 rounded-md">
                  View Resume
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="ml-2 animate-bounce"
                  />
                </span>
              </a>
            </div>
          </div>
          <div>2</div>
          <div className="flex items-end">3</div>
        </div>
      </div>
      {/* grid ขวา */}
      <div>
        <div className="mb-96">1</div>
        <div className="mb-96">1</div>
        <div className="mb-96">1</div>
        <div className="mb-96">1</div>
        <div className="mb-96">1</div>
        <div className="mb-96">1</div>
      </div>
    </div>
  );
}

export default App;
