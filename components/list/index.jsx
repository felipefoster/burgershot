import { burger } from "../../database/burger";
import Item from "../item";
import Styles from "./list.module.scss";

const List = ({ handleAddItemToCart }) => {
  return (
    <div className={Styles.container}>
      {burger.map((burgers, index) => (
        <Item
          style1="container1"
          name={burgers.name}
          price={burgers.price}
          key={index}
          handleAddItemToCart={handleAddItemToCart}
        />
      ))}
    </div>
  );
};

export default List;
