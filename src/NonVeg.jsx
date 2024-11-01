import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./store";


function NonVeg(){
    
    const NonVegProducts=useSelector(state => state.products.nonVeg)

    const dispatch=useDispatch()

const items=NonVegProducts.map((product,index)=>
<li key={index}>
    {product.name} -${product.price.toFixed(2)}
    <button onClick={()=>dispatch(addTocart(product))}>Add to Cart</button>

</li>)


    return(
        <>
        <h2>Non-veg products</h2>
        <ul>
            {items}
        </ul>
        </>
    )
}export default NonVeg;