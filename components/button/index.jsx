import Styles from "./button.module.scss";

const Button = ({ title, onClick, kind, teste, itemIndex }) => {
  if (kind === "remove") {
    onClick = () => {
      teste(itemIndex);
    };
    title = "Remover";
  }

  return (
    <button className={Styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
