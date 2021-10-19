import * as yup from "yup";

const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("This email address is not valid.")
    .trim()
    .required(),
  confirmEmail: yup
    .string()
    .email("This email address is not valid.")
    .trim()
    .required()
    .oneOf([yup.ref("email"), null], null),
  password: yup
    .string()
    .trim()
    .required()
    .min(4, "Password needs to be at least 4 characters long."),
  confirmPassword: yup
    .string()
    .trim()
    .required()
    .oneOf([yup.ref("password"), null], null)
    .min(4, "Password needs to be at least 4 characters long."),
});

export default signupSchema;
