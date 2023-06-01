import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditItemDialog({ open, dialogHandler, item, editItem }) {

    const [editedItem, setEditedItem] = useState(item.nome)

    const itemHandler = () => {
        editItem(item.id, editedItem)
        dialogHandler()
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={dialogHandler}
            aria-describedby="alert-dialog-slide-description"
            fullWidth
        >
            <DialogTitle>{"Atualizar item"}</DialogTitle>
            <DialogContent>
                <TextField defaultValue={editedItem} fullWidth onChange={(e) => setEditedItem(e.target.value)} />
            </DialogContent>
            <DialogActions>
                <Button onClick={dialogHandler} >Cancelar</Button>
                <Button onClick={itemHandler} >Atualizar</Button>
            </DialogActions>
        </Dialog>
    );
}