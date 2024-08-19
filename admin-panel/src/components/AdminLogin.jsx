import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Geçersiz email').required('Email gerekli'),
  password: Yup.string().min(6, 'Minimum 6 karakter').required('Şifre gerekli'),
});

const AdminLogin = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        dispatch(login(values));
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="email"
            as={TextField}
            label="Email"
            variant="outlined"
            fullWidth
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : ''}
          />
          <Field
            name="password"
            as={TextField}
            label="Şifre"
            variant="outlined"
            type="password"
            fullWidth
            error={errors.password && touched.password}
            helperText={errors.password && touched.password ? errors.password : ''}
          />
          <Button type="submit" variant="contained" color="primary">
            Giriş Yap
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AdminLogin;
