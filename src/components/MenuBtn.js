import { useState } from "react"
import { Link } from "react-router-dom"

export default function MenuBtn({cat}) {
  const [active, setActive] = useState(false)

  const toggleActive = (event) => {
    setActive(event.target.id)
  }
  /*
   * Funksjon som kjører ved onClick på menyknappene. Ved bruk av useState kan jeg gi staten "active".
   * Id blir hentet fra knappen, og blir da "active". Deretter brukes betinget logikk i button elementene 
   * for å sjekke om id til hver spesifikke knapp er "active". Om den er det, får den klassen "active". 
   * Kilde: https://stackoverflow.com/questions/70570025/only-one-active-button-in-react
   */

  return(
      <nav>
        <Link to={"html"}><button id={1} className={active === "1" ? "active" : "null"} onClick={toggleActive}>HTML</button></Link>
        <Link to={"css"}><button id={2} className={active === "2" ? "active" : "null"} onClick={toggleActive}>CSS</button></Link>
        <Link to={"javascript"}><button id={3} className={active === "3" ? "active" : "null"} onClick={toggleActive}>JavaScript</button></Link>
        <Link to={"react"}><button id={4} className={active === "4" ? "active" : "null"} onClick={toggleActive}>React</button></Link>
        <Link to={"headless-cms"}><button id={5} className={active === "5" ? "active" : "null"} onClick={toggleActive}>Headless CMS</button></Link>
      </nav>
  )
} 