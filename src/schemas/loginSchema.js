import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("This email address is not valid.")
    .trim()
    .required(),
  password: yup
    .string()
    .trim()
    .required()
    .min(4, "Password needs to be at least 4 characters long."),
});

export default loginSchema;
