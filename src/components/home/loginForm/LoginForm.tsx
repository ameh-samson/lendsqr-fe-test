import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/schemas/formSchema";
import { LoginFormType } from "@/types";

const LoginForm = () => {
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

  const onSubmit = async (data: LoginFormType) => {
    console.log(data, "submitted");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("email")} className="" placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input {...register("password")} className="" placeholder="Password" />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <p>forgot password?</p>

      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
