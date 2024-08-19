import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <List>
      <ListItem button component={Link} to="/dashboard">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/products">
        <ListItemText primary="Ürünler" />
      </ListItem>
      <ListItem button component={Link} to="/categories">
        <ListItemText primary="Kategoriler" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
