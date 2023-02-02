import "./Gallery.scss"

export default function Gallery({list}) {
    return (
        <div className="c-gallery">
            {list.map((item, index) => (
                <figure>      
                <figcaption key={index}>{item.character}</figcaption>
                <p>{item.name}</p>
            <img src={item.imageUrl} alt="" />
            </figure>
            ))}
        </div>
    )
}