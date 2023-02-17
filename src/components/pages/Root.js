import Navbar from "./Navabar";
import ProductNav from "./ProductNav";
import AllProducts from "./AllProducts";
import data from "../data"

function Root(props) {


  const pro = data.filter((i) =>
    i.heading.toLocaleLowerCase().includes(props.Query.toLocaleLowerCase())
  ).map(items => {
    return <AllProducts key={items.id} heading={items.heading} url={items.url}/>
  })


  return (
    <div className="Root">
      <Navbar Query={props.Query} setQuery={props.setQuery}/>
      <ProductNav/>
      <div className="product-container">
      {pro}
      </div>
    </div>
  );
}

export default Root;
