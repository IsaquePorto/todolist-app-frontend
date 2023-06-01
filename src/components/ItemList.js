import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditItemDialog from './EditItemDialog';
import EditIcon from '@mui/icons-material/Edit';

export default function ItemList({ item, deleteItem, editItem, changeStatus }) {

  const [openDialog, setOpenDialog] = useState(false)

  const dialogHandler = () => {
    setOpenDialog(!openDialog); //Inverte o valor do dialog
  }

  const editStatus = (id, status) => {
    changeStatus(id, status)
  }

  return (
    <div>
      <EditItemDialog open={openDialog} editItem={editItem} dialogHandler={dialogHandler} item={item} />
      <ListItem
        secondaryAction={
          <>
            <IconButton aria-label="edit-icon" onClick={() => setOpenDialog(true)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete-icon" onClick={() => deleteItem(item.id)}>
              <DeleteIcon />
            </IconButton>
          </>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox edge="start" defaultChecked={item.done} onChange={(e) => {
              editStatus(item.id, e.target.checked)
            }} />
          </ListItemIcon>
          <ListItemText primary={item.nome} />
        </ListItemButton>

      </ListItem>
    </div>
  );
}
