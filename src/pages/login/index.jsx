
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useState } from "react";
import {Input} from '../../components/input/input';
import { LoginValidation } from "./validator";

export const LoginForm = ({styles}) => {
  const submitLogin = (value, action) => {
    console.log({ value, action });
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      console.log("form submitted successfully");
    }, 2000);
  };

  const { values,errors,handleChange, handleSubmit, touched } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema : LoginValidation,
    onSubmit: submitLogin
  }); 

  const [isLoading, setisLoading] = useState(false);

  return (
    <>
      <h3>Login Validation Test</h3>
    
      <Form action="" method="post">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Input
            type={"email"}
            value={values.email}
            onchange={handleChange}
            label={"Email Address"}
            errormessage={touched.email ? errors.email : ""}
            errorclass={styles.error.alert_error}
            name={"email"}
            placeholder={"Enter your Email Address"}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Input
            type={"password"}
            name={"password"}
            value={values.password}
            onchange={handleChange}
            label={"Password"}
            errormessage={touched.password ? errors.password : ""}
            errorclass={styles.error.alert_error}
            placeholder={"Enter your password here"}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </>
  );
};


// export default LoginForm;