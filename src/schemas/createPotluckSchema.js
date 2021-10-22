import * as yup from "yup";

export const createPotluckSchema = yup.object().shape({
  potluck_name: yup
    .string()
    .trim()
    .required("An Event Name is Required")
    .min(4, "Event Name must be 4 digits or longer"),
  location: yup
    .string()
    .trim()
    .required("Location is Required")
    .min(4, "Location must be 4 digits or longer"),
  date: yup.string().trim().required("Date is Required"),
  time: yup
    .string()
    .trim()
    .required("Time is Required")
    .matches(
      /[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,3})?/,
      "must match 00:00:00 format"
    ),
});

export default createPotluckSchema;
