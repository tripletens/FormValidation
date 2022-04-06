import * as Yup from "yup";

export const LoginValidation = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string()
    .required('Password is required')
    .min(6,'Password must have a minimum of 6 characters')
    .test("Password", "Password must contain an alphabet", (value) => {
        return /[A-z]/.test(value);
      })
    .test("password", "Password must contain a number", (value) => {
      return /\d/.test(value);
    }),
});
