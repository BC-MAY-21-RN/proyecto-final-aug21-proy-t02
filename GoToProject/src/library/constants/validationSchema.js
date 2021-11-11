import * as Yup from 'yup';
export const logInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    )
    .required('This field is required'),
});
export const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    )
    .required('This field is required'),
});

export const addNewSite = Yup.object().shape({
  siteName: Yup.string()
    .min(3, 'Too Short!')
    .max(25, 'Too Long!')
    .required(),
  phone: Yup.number()
  .min(8).required(),
  categories: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required(),
});

export const workSchedules = Yup.object().shape({
  workingDays: Yup.string().min(15).max(25).required(),
  costs: Yup.string().min(6).max(15).required(),
});
