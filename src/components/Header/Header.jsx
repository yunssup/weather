import { HeaderContainer, LikeLionLogo } from "../HeaderStyle";
import LikeLion from "../../assets/images/LikeLion.png";

const Header = () => {
  return (
    <HeaderContainer>
      <LikeLionLogo src={LikeLion} alt="LikeLion_Logo" />
    </HeaderContainer>
  );
};

export default Header;
