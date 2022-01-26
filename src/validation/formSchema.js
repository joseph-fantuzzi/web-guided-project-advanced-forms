// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required your face!")
    .min(3, "Username has to be 3 characters long ya chump!"),
  email: yup
    .string()
    .email("You gotta be kidding me, enter a valid email!")
    .required("Enter an email ya chump!"),
  civil: yup
    .string()
    .oneOf(['married', 'single'], "Select an option ya chump!"),
  role: yup
    .string()
    .oneOf(['instructor', 'student', 'alumni'], "Role is required!"),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean()
})

export default formSchema;