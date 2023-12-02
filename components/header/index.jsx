import Image from "next/image";
import Logo from "../../public/image/burgershot.svg";
import Styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={Styles.container}>
      <Image src={Logo} alt="Icon" />
    </div>
  );
};

export default Header;
