import React from "react";
import "./index.css"; // Импортируйте стили Tailwind
import Footer from "./components/Footer"; // Импортируем Footer
import Navbar from "./components/Navbar"; // Импортируем Navbar
import Header from "./components/Header"; // Импортируем Header
import About from "./components/About"; // Импортируем About
import MySkills from "./components/MySkills"; // Импортируем MySkills
import MyWorks from "./components/MyWorks"; // Импортируем MyWorks
import Offers from "./components/Offers"; // Импортируем Offers

const App = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />
      <div className="pt-24 p-8">
        <div className="max-w-6xl mx-auto p-5">
          <Header />
          <About />
          <MySkills />
          <MyWorks />
          <Offers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;