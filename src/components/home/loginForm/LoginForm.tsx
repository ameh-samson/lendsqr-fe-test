import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/schemas/formSchema";
import { LoginFormType } from "@/types";
import { useState } from "react";
import styles from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data: LoginFormType) => {
    console.log(data, "submitted");
    reset();

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.innerFormContainer}>
        <input {...register("email")} placeholder="Email" type="email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className={styles.innerFormContainer}>
        <input
          {...register("password")}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        />
        <span
          className={styles.showPassword}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </span>
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <p className={styles.forgotPassword}>FORGOT PASSWORD?</p>

      <button type="submit" className={styles.submitBtn}>
        LOG IN
      </button>
    </form>
  );
};

export default LoginForm;
