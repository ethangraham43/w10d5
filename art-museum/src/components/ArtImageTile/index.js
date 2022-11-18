
export default function ArtImageTile(props) {
    const art = props.art
    const firstArt = art[0][0]
    console.log(firstArt.baseimageurl)
    return (
        <Link to="/" >
            <img src={firstArt.baseimageurl} />
        </Link>
    )
}