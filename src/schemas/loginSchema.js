import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().trim().required("username required"),
  password: yup.string().trim().required("password required"),
});

export default loginSchema;
