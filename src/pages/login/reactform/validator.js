import * as yup from "yup";

export const validateform = 
  yup.object({
    email: yup.string().required().email(),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must have a minimum of 6 characters")
      .test("Password", "Password must contain an alphabet", (value) => {
        return /[A-z]/.test(value);
      })
      .test("password", "Password must contain a number", (value) => {
        return /\d/.test(value);
      }),
}).required();
