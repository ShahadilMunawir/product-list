import { Link } from "react-router-dom";

function ProductNav(){

    return(
        <div className="product-nav">
            <Link to="/" className="product-nav-item">All</Link>
            <Link to="/printer" className="product-nav-item">PRINTER</Link>
            <Link to="/scanner" className="product-nav-item">SCANNER</Link>
            <Link to="/camera" className="product-nav-item">CAMERA</Link>
            <Link to="/computer" className="product-nav-item">COMPUTER</Link>
        </div>
    )
}

export default ProductNav;