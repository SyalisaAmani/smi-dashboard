function ProductCard(props) {
    return (
    <article key={props.product.id} className="product-card">
        <img src={props.product.thumbnail} alt={props.product.title} />
        <h3>{props.product.title}</h3>
        <p>{props.product.price}</p>
        </article>
    )
}

export default ProductCard;