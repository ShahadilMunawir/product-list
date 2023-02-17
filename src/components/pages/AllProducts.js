
function AllProducts(props){
    return(
        <>
            <div className="product-div">
                <img className="product-img" src={props.url} alt="" />
                <div className="details">
                    <h1 className="product-heading">{props.heading}</h1>
                    <div className="product-download">
                        <button className="product-download-link">DOWNLOAD WINDOWS DRIVER</button>
                        <button className="product-download-link">DOWNLOAD LINUX DRIVER</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts;