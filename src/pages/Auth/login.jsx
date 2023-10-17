import Button from "../../components/Elements/Button";
import FormInput from "../../components/Elements/FormInput";
import AuthLayout from "../../components/Layout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <div className="w-full">
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="********"
        />
        <Button color="blue" className="w-full px-3 py-3">
          Login
        </Button>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
