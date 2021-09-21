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
import {
  registerUser,
  setRegisterUserResponse,
} from "store/reducers/actions/signUpActions";

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
            error={ errors.password}
            onChange={handleChange}
            placeholder="Start typing"
            validate
          />
          <PasswordInput
            id="confirmpassword"
            name="confirmpassword"
            error={ errors.confirmpassword}
            onChange={handleChange}
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
