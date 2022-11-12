import { NavLink } from "react-router-dom";

// Icons
import { UilRestaurant } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
import { UilListUl } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'


export const Navbar = () => {
    const commonClassName = "flex flex-col items-center";
    return(
        <nav className="fixed bottom-0 px-4 flex justify-around items-center h-16 w-full">
            <NavLink className="flex flex-col items-center">
                <UilRestaurant />
                <p className="text-sm">Recipes</p>
            </NavLink>
            <NavLink className="flex flex-col items-center">
                <UilSearch />
                <p className="text-sm">Explore</p>
            </NavLink>
            <NavLink className="flex flex-col items-center">
                <UilListUl  />
                <p className="text-sm">Grocery</p>
            </NavLink>
            <NavLink className="flex flex-col items-center">
                <UilUser />
                <p className="text-sm">Profile</p>
            </NavLink>
        </nav>
    )
}