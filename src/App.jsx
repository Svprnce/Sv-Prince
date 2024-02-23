import Intro from "./components/Intro"
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

    </>
  )
}

export default App
