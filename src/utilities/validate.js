import * as yup from "yup";

const validate = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: "" }))
    .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
};
