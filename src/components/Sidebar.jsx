import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar">
      <h1>Agriculture Admin</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/crop">Crop</NavLink>
          </li>
          <li>
            <NavLink to="/croptype">CropType</NavLink>
          </li>
        
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;