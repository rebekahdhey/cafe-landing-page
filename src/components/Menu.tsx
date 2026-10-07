import MenuCard from "./MenuCard";
import { menu } from "../data";

function Menu() {
  return (
    <section id="menu" className="section">
      <h2>Our Menu</h2>
      <p className="section-sub">Made fresh, served warm.</p>

      <div className="menu-grid">
        {menu.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Menu;