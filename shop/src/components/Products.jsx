export default function Products({ product }) {
    return (
        <li key={product._id}>{product.name}, {product.price}</li>
    )
}