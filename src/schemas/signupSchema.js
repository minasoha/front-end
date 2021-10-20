import * as yup from "yup";

const signupSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required()
    .min(4, "Username must be at least 4 characters long."),
  email: yup
    .string()
    .email("This email address is not valid.")
    .trim()
    .required(),
  confirmEmail: yup
    .string()
    .trim()
    .required()
    .oneOf([yup.ref("email"), null], "Emails do not match."),
  password: yup
    .string()
    .trim()
    .required()
    .min(4, "Password must be at least 4 characters long."),
  confirmPassword: yup
    .string()
    .trim()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords do not match."),
});

export default signupSchema;
