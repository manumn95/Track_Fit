import * as yup from "yup";

//min 5 characters ,1 upper case Letter,1 Lowe Case Letter,1 numeric Digit
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  username: yup.string().required("Name is required"),
  email: yup.string().email("please enter valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "min 5 characters ,1 upper case Letter,1 Lowe Case Letter,1 numeric Digit" })
    .required("please create a strong password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match")
    .required("required"),
});
