const Header=()=>{
    return(
        <div className="nav">
            <div className="content1">
                <h2>Logo</h2>
            </div>
            <div className="content2">
                <ul className="content2">
                    <li style={{color:"blue"}}>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="content3">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
    );
}

export default Header;