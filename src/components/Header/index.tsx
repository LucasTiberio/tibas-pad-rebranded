import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import siteMap from "../../router/siteMap";
import GoToHomeHeaderButton from "./components/GoToHomeButton";
import { iHeader } from "./interface";
import { Container } from "./styles";

const Header: React.FC<iHeader> = ({
  goToHomeButton,
  mainComponent,
  rightComponent,
  floatingHeader,
}) => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate(siteMap.HomePage.path)
  }

  return (
    <Container floating={floatingHeader}>
      {goToHomeButton ? <GoToHomeHeaderButton onClick={handleGoToHome} /> : <div></div>}
      
      <div>{mainComponent}</div>

      <div>{rightComponent}</div>
    </Container>
  )
}

export default Header;