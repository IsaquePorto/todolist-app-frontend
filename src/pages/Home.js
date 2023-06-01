/* eslint-disable no-unused-vars */
import { Container, List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import ItemList from '../components/ItemList';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function Home() {

    const [listItems, setListItems] = useState([]);

    const addItem = async (todo) => {
        try {
            if (todo === '') {
                alert('Campo não pode está vazio!')
            } else {
                const res = await axios.post(`${BACKEND_URL}/todolist`, { nome: todo, done: false })
                //console.log(res.data)
                setListItems(prev => [...prev, res.data])
            }
        } catch (err) {
            console.log(err);
        }
    }

    const deleteItem = async (id) => {
        console.log(id)
        try {
            const res = await axios.delete(`${BACKEND_URL}/todolist/${id}`)
            const newListItems = listItems.filter(item => item.id !== id)
            setListItems(newListItems)
        } catch (err) {
            console.log(err);
        }
    }

    const editItem = (id, editedItem) => {

        axios.put(`${BACKEND_URL}/todolist/${id}`, {
            nome: editedItem,
        }).then(function () {
            var itemsListCopy = [...listItems]

            for (var i in itemsListCopy) {
                if (itemsListCopy[i].id === id) {
                    itemsListCopy[i].nome = editedItem
                }
            }
            setListItems(itemsListCopy)
        })
    }

    const changeStatus = (id, status) => {
        axios.put(`${BACKEND_URL}/todolist/${id}`, {
            done: status,
        })      
    }

    useEffect(() => {
        const getItemsList = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/todolist`)
                setListItems(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getItemsList()
    }, [])

    return (
        <Container maxWidth='sm' className='container'>
            <h2 className='title'>
                TODO LIST
            </h2>
            <Form addItem={addItem} />
            <List sx={{ bgcolor: 'background.paper', marginTop: "1em" }} >
                {listItems.map((item) => (
                    <ItemList key={item.id} editItem={editItem} item={item} deleteItem={deleteItem} changeStatus={changeStatus} />
                ))}
            </List>
        </Container>
    );

}
