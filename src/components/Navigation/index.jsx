import { NavLink } from "react-router-dom";
import { NavigationBox } from "./Navigation.styled";

const Navigation = () => {
    return (
        <NavigationBox>
            <NavLink to="/" className={"link"}>Home</NavLink>
            <NavLink to="movies" className={"link"}>Movies</NavLink>
        </NavigationBox>
    );
};

export default Navigation;