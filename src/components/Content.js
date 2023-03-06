
export default function Content({contentTitle, description, resourceList}) {
  return(
    <section>
    <h2 id="content-title">{contentTitle}</h2>
    <p id="description">{description}</p>
    <ul id="resource-list">{resourceList}</ul>
  </section>
  )
}