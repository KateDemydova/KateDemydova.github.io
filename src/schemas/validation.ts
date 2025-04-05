import * as Yup from 'yup';

export interface FormValues {
    firstName: string;
    email: string;
    phone: string;
    password: string;
}

export const validationSchema: Yup.ObjectSchema<FormValues> = Yup.object({
    firstName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(20, 'Must be at most 20 characters')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    phone: Yup.string()
        .matches(/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Invalid phone number')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .max(12, 'Must be at most 12 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .required('Required'),
});
