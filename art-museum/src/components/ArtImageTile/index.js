import { Link } from 'react-router-dom'

export default function ArtImageTile(props) {
    const gallery = props.gallery
    const art = props.art
    const firstArt = art[0]
    console.log(art)
    return (
        <Link to={`/galleries/${gallery.galleryid}/art/${firstArt.id}`} target="_blank">
            <img src={firstArt.images[0].baseimageurl} />
        </Link>
    )
}