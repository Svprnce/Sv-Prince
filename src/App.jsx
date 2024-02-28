import Intro from "./components/Intro"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Qualification from "./components/qualification"
import Quotes from "./components/quotes"
import Skills from "./components/skills"

function App() {

  return (
    <>
    <Navbar/>
    <Intro/>
    <Quotes quote={'Clean code always looks like it was written by someone who cares.'} author = {'Robert C. Martin'}/>
    <Qualification/>
    <Quotes quote={'Clean code always looks like it was written by someone who cares.'} author = {'Robert C. Martin'}/>
    <Skills/>
    <Quotes quote={'Clean code always looks like it was written by someone who cares.'} author = {'Robert C. Martin'}/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
