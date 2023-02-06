import "./Gallery.scss"
import { Link } from "react-router-dom"

export default function Gallery({list}) {
    return (
        <div className="c-gallery">
            {list.map((item, index) => <Link to = {`/characters/${item._id}`}>
                <figure key={index}>      
                <figcaption>{item.name}</figcaption>
            <img src={item.imageUrl} alt="" />
            </figure>
            </Link>
            )}
        </div>
    )
}