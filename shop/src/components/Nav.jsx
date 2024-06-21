export default function Nav() {
    return (
        <nav>
            <div className="nav-first-part">
                <span className="logo">Shop</span>
                <ul>
                    <li>Home</li>
                    <li>Market</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="nav-second-part">
                <a href="">Sign Up</a>
                <a href="">Log in</a>
            </div>
        </nav>
    )
}