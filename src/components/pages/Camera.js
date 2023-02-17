import Navbar from "./Navabar"
import ProductNav from "./ProductNav"
import AllProducts from "./AllProducts"
import data from "../data"

function CameraPage(props){

    const products = data.filter((i) => 
    i.heading.toLocaleLowerCase().includes(props.Query.toLocaleLowerCase())
    ).map(item => {
        if(item["product-name"] === "camera"){
            return <AllProducts key={item.id} heading={item.heading} url={item.url}/>
        }
    })

    return(
        <>
        <Navbar Query={props.Query} setQuery={props.setQuery}/>
        <ProductNav/>
        <div className="product-container">
            {products}
        </div>
        </>
    )
}

export default CameraPage;