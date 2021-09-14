
function TeaCard({tea}) {
    const {id, name, image, caffeinated, category, rating, description, price, keywords} = tea
    return (
        <li>
            <img src={image} key={id} alt={name} />
            <h4>Name: {name}</h4>
            <h5>Type: {category}</h5>
            <h5>Rating: {rating}</h5>
            {}
        </li>
    )
}

export default TeaCard;
