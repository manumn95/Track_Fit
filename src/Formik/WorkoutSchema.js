import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  date: yup.date().required("Required"),
  duration: yup.number().required("required(Only Numbers allowed)"),
  sets: yup.number().required("required(Only Numbers allowed)"),
  steps: yup.number().required("required(Only Numbers allowed)"),
  calories: yup.number().required("required(Only Numbers allowed)"),
});
