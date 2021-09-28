import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { Button } from "../../../components/Buttons";
import { PasswordInput } from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  FormContent,
  FormWrapper,
  LogoImage,
  Header,
  LoginWrapper,
} from "../style";
import { recoverPasswordSchema } from "./recoverPasswordSchema";

const RecoverPassword = ({ navigate }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const Confirm = () => {};
  const {
    handleChange,
    values: { password },
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: { password: "", confirmpassword: "" },
    validationSchema: recoverPasswordSchema,
    onSubmit: Confirm,
  });
  console.log(touched)
  return (
    <LoginWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>RECOVER PASSWORD</Header>
          <PasswordInput
            id="password"
            name="password"
            label="Password"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.password && errors.password}
            placeholder="Start typing"
            validate
          />
          <PasswordInput
            id="confirmpassword"
            name="confirmpassword"
            error={touched.confirmpassword && errors.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Confirm Password"
            placeholder="Start typing"
          />
          <Button label="Confirm" onClick={handleSubmit} />
        </FormContent>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default RecoverPassword;
