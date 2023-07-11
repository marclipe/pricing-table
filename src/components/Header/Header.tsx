import { NavLink } from "react-router-dom";
import { ContainerHeader, NavLinks } from "./styles";

export function Header(){
  return (
    <ContainerHeader>
      <div>
        <NavLink to={"/"} title="Home">
          Home
        </NavLink>
      </div>
      <NavLinks>
        <NavLink to={"/essentials"} title="Essentials">
          Essentials{" "}
        </NavLink>
        <NavLink to={"/ultimate"}>Ultimate</NavLink>
        <NavLink to={"/enterprise"}>Enterprise</NavLink>
      </NavLinks>
    </ContainerHeader>
  );
}