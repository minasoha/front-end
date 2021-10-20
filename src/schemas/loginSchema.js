import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().trim().required(),
  password: yup.string().trim().required(),
});

export default loginSchema;
