import { NavLink } from "react-router-dom"

const style = { 
    background : "pink",
    color:'purple'
}

function Nav(){
    return(
        <nav className="lnb-container">
            <ul>
                <li>
                    <NavLink to="/" 
                        style={ ({isActive})=> isActive ? style:null }
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/coins" 
                        style={ ({isActive})=> isActive ? style:null }
                    >
                        Coins
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/product" 
                        style={ ({isActive})=> isActive ? style:null }
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts" 
                        style={ ({isActive})=> isActive ? style:null }
                    >
                        게시판
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/host" 
                        style={ ({isActive})=> isActive ? style:null }
                    >
                        Host
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" 
                        style={ ({isActive})=> isActive ? style:null }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contect" 
                        style={ ({isActive})=> isActive ? style:null }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav