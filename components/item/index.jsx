import Button from "../button";
import Input from "../input";
import Styles from "./item.module.scss";

const Item = ({
  name,
  price,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  kind,
  itemIndex,
  style1,
}) => {
  if (style1 === "container2") {
    style1 = Styles.container2;
  }
  if (style1 === "container1") {
    style1 = Styles.container;
  }

  return (
    <div className={style1}>
      <h2>{name}</h2>
      <span>${price}</span>
      <Button
        title="ADD"
        onClick={() => handleAddItemToCart(name, price)}
        kind={kind}
        teste={handleRemoveItemFromCart}
        itemIndex={itemIndex}
      />
    </div>
  );
};

export default Item;
