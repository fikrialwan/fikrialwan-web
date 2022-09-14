import { css } from "@emotion/css";
import theme from "../../styles/theme";

function NavigationMenu() {
  return (
    <nav className={css`
      background-color: ${theme.colors.black};
      width: 100%;
      padding: 25px 25px;
      
    `}>
      <div></div>
    </nav>
  );
}

export default NavigationMenu;
