import { useParams } from "react-router-dom"
import ArtImageTile from "../ArtImageTile"

const GalleryView = ({galleries}) => {
    const { galleryId } = useParams()
    const gallery = galleries.find(gallery => gallery.id === parseInt(galleryId, 10))
    const artworkImages = gallery.objects.map( artwork => artwork.images)
    
    return (
        <div>
            <h2>{gallery.name}</h2>
            <ArtImageTile art = {artworkImages}></ArtImageTile>
        </div>
    )
}
export default GalleryView