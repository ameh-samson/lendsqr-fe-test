import LoginForm from "@/components/home/loginForm/LoginForm";
import loginImage from "@/assets/png/pablo-sign-in.png";
import logo from "@/assets/svg/logo.svg";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
          <img src={loginImage} alt="login" />
        </div>

        <div className={styles.rightContainer}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <div className={styles.formContainer}>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
