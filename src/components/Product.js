import { useParams } from "react-router";

const Product = () => {
    const {phone} = useParams()
    console.log(phone)
    return ( 
        <div>
            <h1>Product :{phone}</h1>
        </div>
     );
}
 
export default Product;