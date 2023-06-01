import { Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import '../App.css';

export default function Form({addItem}) {

    const [text, setText] = useState('');

    const handleClick = () => {
        addItem(text)
        setText('');
    };

    return (
        <Paper className='formulario'>
            <TextField
                id="outlined-basic"
                label="Tarefa"
                value={text}
                onChange={(e) => setText(e.target.value)}
                variant="outlined"
                fullWidth
            />
            <Button variant="contained" onClick={handleClick}>Add</Button>
        </Paper>
    );
}
