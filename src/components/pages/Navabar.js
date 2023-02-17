import searchimg from "../images/search.png"
function Navbar(props){

    return(
        <>
        <nav>
            <div className="for-logo">LOGO HERE</div>
            <div className="for-search">
                <div className="search-tab">
                    <input type="text" placeholder="Search here" className="search-input" value={props.Query} onChange={(e) => props.setQuery(e.target.value)}/>
                    <img className="search-icon" src={searchimg}/>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;