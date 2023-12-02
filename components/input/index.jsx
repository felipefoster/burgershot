import Styles from "./input.module.scss";

const Input = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className={Styles.input} />
  );
};

export default Input;
