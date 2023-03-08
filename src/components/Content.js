import resources from "../ressurser"

export default function Content({cat}) {
  const currentResource = resources.filter((resource) => resource.category === cat)

  return(
  <section>
    <>
    <h2 id="content-title">{currentResource[0].category}</h2>
    <p id="description">{currentResource[0].text}</p>
    <ul id="resource-list">
    { currentResource[0].sources.map((source) => {
        return(<li><a href={source.url}>{source.title}</a></li>)
      })}
    </ul>
    </>
  </section>
  )
}
