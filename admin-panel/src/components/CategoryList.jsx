import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const CategoryList = () => {
  const categories = useSelector((state) => state.products.categories);

  return (
    <div>
      <h2>Kategoriler</h2>
      <Button variant="contained" color="primary">Yeni Kategori Ekle</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Kategori Adı</TableCell>
            <TableCell>İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
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

export default CategoryList;
