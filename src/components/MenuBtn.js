import resources from "../ressurser"

export default function MenuBtn() {
  return(
      <nav>
        {resources.map((resource) => {
        return (<button id={resource.category + "btn"} /*onClick={handleClick}*/ >{resource.category}</button>)}
        )}
      </nav>
  )
} 