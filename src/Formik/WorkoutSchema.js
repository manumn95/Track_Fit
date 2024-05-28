import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  date: yup.date().required("Required"),
  duration: yup.string().required("required"),
  sets: yup.number().positive().required("required(Only Numbers allowed)"),
  steps: yup.number().positive().required("required(Only Numbers allowed)"),
  calories: yup.number().positive().required("required(Only Numbers allowed)"),
});
