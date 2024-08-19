import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ProductList = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <div>
      <h2>Ürünler</h2>
      <Button variant="contained" color="primary">Yeni Ürün Ekle</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ürün Adı</TableCell>
            <TableCell>Fiyat</TableCell>
            <TableCell>Kategori</TableCell>
            <TableCell>İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary">Düzenle</Button>
                <Button variant="contained" color="error">Sil</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductList;
