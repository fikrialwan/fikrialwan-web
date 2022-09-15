import { Link } from "react-router-dom";
import { navigationData, NavigationDataType } from "src/data";

export default function NavigationMenu() {
  return (
    <ul>
      {navigationData.map(
        ({ title, link }: NavigationDataType, key: number) => {
          return (
            <li key={key}>
              <Link to={link}>{title}</Link>
            </li>
          );
        }
      )}
    </ul>
  );
}
