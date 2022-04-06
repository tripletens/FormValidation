import { Input } from "../../../components/input/input";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { validateform } from "./validator";

export const ReactFormLogin = ({ styles }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
      defaultValues: {
          email : "",
          password : ""
      },
      resolver: yupResolver(validateform)
  });

  const [isLoading, setisLoading] = useState(false);

  console.log(errors);
  return (
    <>
      <h3>Login Validation Test</h3>

      <Form action="" method="post">
        <Form.Group className="mb-3" controlId="formBasicEmailreactform">
          <input
            {...register("email", { required: "This field is required" })}
            type={"email"}
            placeholder={"Enter your email"}
            className={'form-control'}
          />
          <span style={styles.error.alert_error}> {errors.email?.message}</span>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordreactform">
          <input
            {...register("password", { required: true })}
            type={"password"}
            placeholder={"Enter your password"}
            className={'form-control'}
          />
          <span style={styles.error.alert_error}>{errors.password?.message}</span>
    
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleSubmit((data) => {
            console.log(data);
          })}
          type="submit"
        >
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </>
  );
};
