import resources from "../ressurser"

export default function Content({cat}) {
  const currentResource = resources.filter((resource) => resource.category === cat)
  /*
   * Bruker .filter til å finne alle objektene i kategorien med samme verdi som prop-en "cat"
   * for å kun få ut kildene til kategorien jeg ønsker å vise.
   * Verdien på cat har blitt gitt i App.js. 
   */
  
  return(
  <section>
    <h2 id="content-title">{cat.toUpperCase()}</h2>
    <ul id="resource-list">
    { currentResource.map((source, index) => {
        return(<li key={index}><a href={source.url}>{source.title}</a></li>)
      })}
    </ul>
  </section>
  )
}
