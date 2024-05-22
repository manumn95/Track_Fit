import * as yup from "yup";

export const basicSchema = yup.object().shape({
  radioGroup: yup.string().required("Please select one Goal"),
  age: yup.number().positive().max(100).required("age is required"),
  genderGroup: yup.string().required("Please select your gender"),
  height: yup.number().positive().max(999).required("height required"),
  weight: yup.number().positive().max(999).required("weight required"),
});
