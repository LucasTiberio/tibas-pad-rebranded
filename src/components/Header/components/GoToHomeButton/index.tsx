import { LeftArrow } from "./styles";

interface iGoToHomeHeaderButton {
  onClick: () => void;
}
const GoToHomeHeaderButton: React.FC<iGoToHomeHeaderButton> = ({ onClick }) => {
  return <LeftArrow onClick={onClick} />
}

export default GoToHomeHeaderButton