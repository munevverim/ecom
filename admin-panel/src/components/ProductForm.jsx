import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@mui/material';

const ProductForm = () => {
  return (
    <Formik
      initialValues={{ name: '', price: '', category: '' }}
      onSubmit={(values) => {
        // Ürün ekleme işlemleri
      }}
    >
      {() => (
        <Form>
          <Field as={TextField} name="name" label="Ürün Adı" fullWidth />
          <Field as={TextField} name="price" label="Fiyat" fullWidth />
          <Field as={TextField} name="category" label="Kategori" fullWidth />
          <Button type="submit" variant="contained" color="primary">Kaydet</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
