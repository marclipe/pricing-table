import { NavLink } from "react-router-dom";
import { ContainerHeader, NavLinks } from "./styles";
import { House } from "@phosphor-icons/react";

export function Header(){
  return (
    <ContainerHeader>
      <div>
        <NavLink to={"/"} title="Home">
          <House size={32} color="#996DFF" weight="fill" />
        </NavLink>
      </div>
      <NavLinks>
        <NavLink to={"/essentials"} title="Essentials">
          <div>Essentials</div>
        </NavLink>
        <NavLink to={"/ultimate"}>
          <div>Ultimate</div>
        </NavLink>
        <NavLink to={"/enterprise"}>
          <div>Enterprise</div>
        </NavLink>
      </NavLinks>
    </ContainerHeader>
  );
}