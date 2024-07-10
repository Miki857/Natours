import Header from "./components/Header";
import "./Attributes.css";
import "./main.css";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import PopUp from "./components/PopUp";

function App() {

  return (
    <>
      <Navigation/>

      <Header/>
      <About/>
      <Features/>
      <Tours/>
      <Stories/>
      <Book/>
      <Footer/>

      <PopUp/>
    </>
  )
}

export default App
