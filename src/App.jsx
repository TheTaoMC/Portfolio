import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="max-w-6xl mt-5 mx-auto grid gap-y-5 lg:grid-cols-[4fr_6fr]">
      {/* grid ซ้าย */}
      <div className="px-2">
        <div className="sticky top-5 grid gap-y-4 lg:grid-rows-[40%_40%_20%] lg:h-[90vh]">
          <Header />
          <Navbar />
          <Footer />
        </div>
      </div>

      {/* grid ขวา */}
      <Content />
    </div>
  );
}

export default App;
