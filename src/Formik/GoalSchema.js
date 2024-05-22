import * as yup from "yup";

export const basicSchema = yup.object().shape({
  radioGroup: yup.string().required("Please select one Goal"),
  age: yup.string().max(2).required("age is required"),
genderGroup:yup.string().required("Please select your gender"),
  height: yup.string().max(3).required("height required"),
  weight: yup.string().max(3).required("weight required"),
});
