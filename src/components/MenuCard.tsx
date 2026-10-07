import type { MenuItem } from "../types";

type MenuCardProps = {
  item: MenuItem;
};

function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="menu-card">
      <span className="tag">{item.category}</span>
      <span className="menu-emoji">{item.emoji}</span>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <strong className="price">${item.price.toFixed(2)}</strong>
    </article>
  );
}

export default MenuCard;