import { NavLink } from "react-router-dom"
import './GalleryNavigation.css'


export default function GalleryNavigation(props) {
    const galleries = props.galleries

    return(
        <nav>
            <h1>Galleries</h1>
            {galleries.map( gallery => 
                <NavLink key={gallery.id} to={`/galleries/${gallery.galleryid}`}>
                    {gallery.name}
                </NavLink>  
            )}
        </nav>
    )
}