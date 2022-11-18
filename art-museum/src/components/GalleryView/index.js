import { useParams } from "react-router-dom"
import ArtImageTile from "../ArtImageTile"

const GalleryView = ({galleries}) => {
    const { galleryId } = useParams()
    const gallery = galleries.find(gallery => gallery.id === parseInt(galleryId, 10))
    const art = gallery.objects.map( artwork => artwork)
    
    return (
        <div>
            <h2>{gallery.name}</h2>
            <ArtImageTile art = {art} gallery = {gallery} />
        </div>
    )
}
export default GalleryView