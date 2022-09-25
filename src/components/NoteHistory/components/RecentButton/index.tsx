import { iRecentButton } from "./interface";
import { StyledButton } from "./styles";

const RecentButton: React.FC<iRecentButton> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default RecentButton;