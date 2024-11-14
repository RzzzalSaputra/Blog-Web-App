import { NavLink } from "react-router-dom";

NavLink
function Header(){
    return(
        <header className="flex justify-between items-center py-5 px-10 bg-green-500">
            <NavLink to="/">
            <p className="text-xl font-bold text-white m-0">My Blog App</p>
            </NavLink>
        </header>
    )
}

export default Header;
