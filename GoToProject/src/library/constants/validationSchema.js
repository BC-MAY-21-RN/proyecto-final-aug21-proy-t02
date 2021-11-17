import * as Yup from 'yup';

export const addNewSite = Yup.object().shape({
  siteName: Yup.string().min(3).max(25).required(),
  phone: Yup.number().min(8).required(),
  categories: Yup.string().min(3).max(20).required(),
});

export const workSchedules = Yup.object().shape({
  workingDays: Yup.string().min(15).max(25).required(),
  costs: Yup.string().min(6).max(15).required(),
});

export const siteDecription = Yup.object().shape({
  siteDescription: Yup.string().min(15).max(100).required(),
});