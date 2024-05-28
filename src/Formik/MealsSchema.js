import * as yup from "yup";


export const basicSchema = yup.object().shape({
  dishName:yup.string().required("required"),
  calories:yup.number().positive().required("required")
})