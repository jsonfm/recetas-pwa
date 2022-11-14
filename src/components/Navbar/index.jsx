import { NavLink } from "react-router-dom";

// Icons
import { UilRestaurant } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
import { UilListUl } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'

import { useLocation } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();
    const hide = location.pathname.includes(" ");
    const linkClassName = "flex flex-col items-center justify-center pt-2";
    const activeClassName = "border-t-4 border-t-primary ";
    const disableClassName = "text-darka";
    const classNameCallback = ({ isActive }) => `${linkClassName} ${isActive ? activeClassName : disableClassName}`;
    
    return(
        <nav className={`${hide && 'hidden'} bg-[#fff] fixed z-10 bottom-0 px-4 flex justify-around items-center h-16 w-full max-w-[600px]`}>
            <NavLink 
                to="/recipes" 
                className={classNameCallback}
            >
                <UilRestaurant />
                <p className="text-sm">Recipes</p>
            </NavLink>
            <NavLink 
                to="/explore" 
                className={classNameCallback}
            >
                <UilSearch />
                <p className="text-sm">Explore</p>
            </NavLink>
            <NavLink 
                to="/grocery" 
                className={classNameCallback}
            >
                <UilListUl  />
                <p className="text-sm">Grocery</p>
            </NavLink>
            <NavLink 
                to="/profile"  
                className={classNameCallback}
            >
                <UilUser />
                <p className="text-sm">Profile</p>
            </NavLink>
        </nav>
    )
}