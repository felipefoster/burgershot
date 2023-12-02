import Input from "../input";
import Item from "../item";
import Styles from "./cartitems.module.scss";

const CartItems = ({ cart, handleRemoveItemFromCart }) => {
  return (
    <div className={Styles.container2}>
      {cart.map((cartItem, index) => (
        <Item
          style1="container2"
          key={index}
          name={cartItem.name}
          itemIndex={index}
          price={cartItem.price}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          kind="remove"
        />
      ))}
    </div>
  );
};

export default CartItems;
