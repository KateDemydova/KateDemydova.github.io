import { useFormik } from 'formik';
import { validationSchema, FormValues } from '../schemas/validation';
import {useRef} from "react";
import { IMaskInput } from 'react-imask';


export const ValidationForm: React.FC = () => {
    const messageRef = useRef<HTMLParagraphElement | null>(null);

    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            email: '',
            phone: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values: FormValues): Promise<void> => {
            try {
            console.log('Ім`я', values.firstName);
            console.log('Email', values.email);
            console.log('Пароль', values.password);

                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                });

                if(!response.ok) {
                    throw new Error('Failed to submit the form')
                }

                formik.resetForm();
                } catch (error) {
                console.log('Error', error)
            }
            if (messageRef.current) {
                messageRef.current.style.display = 'block';
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{marginBottom: '1rem'}}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <div style={{color: 'red'}}>{formik.errors.firstName}</div>
                )}

                {formik.touched.firstName && !formik.errors.firstName && (
                    <div style={{color: 'green'}}>First name looks good!</div>
                )}
            </div>

            <div style={{marginBottom: '1rem'}}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                    <div style={{color: 'red'}}>{formik.errors.email}</div>
                )}

                {formik.touched.email && !formik.errors.email && (
                    <div style={{color: 'green'}}>Email is valid!</div>
                )}
            </div>

            <div style={{marginBottom: '1rem'}}>
                <label htmlFor="phone">Phone Number</label>
                <IMaskInput
                    mask="+38 (000) 000-00-00"
                    id="phone"
                    name="phone"
                    onAccept={(value) => formik.setFieldValue('phone', value)}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    type="tel"
                />

                {formik.touched.phone && formik.errors.phone && (
                    <div style={{ color: 'red' }}>{formik.errors.phone}</div>
                )}
                {formik.touched.phone && !formik.errors.phone && (
                    <div style={{ color: 'green' }}>Phone number looks good!</div>
                )}
            </div>

            <div style={{marginBottom: '1rem'}}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                    <div style={{color: 'red'}}>{formik.errors.password}</div>
                )}
                {formik.touched.password && !formik.errors.password && (
                    <div style={{color: 'green'}}>Password is strong!</div>
                )}
            </div>

            <div style={{marginTop: '1rem'}}>
                <button type="submit">Submit</button>
            </div>

            <p ref={messageRef} style={{color: 'green', display: 'none'}}>
                Successfully submitted!
            </p>
        </form>
    );
};
