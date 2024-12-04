import { pageLinks } from "../api"
import { PageLink } from "./PageLink"

interface Props {
  parentClass: string;
  itemClass: string;
}

export const PageLinks = ({parentClass, itemClass}: Props) => {
  return (
   <ul className={parentClass} id="nav-links">
    {pageLinks.map((link) => {
      return <PageLink key={link.id} link={link} itemClass={itemClass}/>
    })}
   </ul>
  )
}
