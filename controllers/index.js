import { find, createUsers, findById, updateUsers, deleteUsers } from "../database/queries.js"

export const getAllUsers = async (req, res) => {
    try {
        const usuarios = await find();
        return res.status(200).json({ usuarios });
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: "Error occurred" });
    }
}
export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const usuario = await findById(id);
        return res.status(200).json({ usuario });

    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: "Error occurred" });
    }
}
export const createUser = async (req, res) => {
    const { nombre, apellido, email, telefono, status = 1 } = req.body;
    console.log(req.body)
    if (!nombre || !apellido || !email || !telefono) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const usuario = await createUsers(nombre, apellido, email, telefono, status);
        console.log(usuario)
        return res.status(201).json({ usuario });
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: "Error occurred" });
    }
}
export const updateUser = async (req, res) => {
    console.log(req.body, 'body----------------')
    const { nombre, apellido, email, telefono, status } = req.body;
    const id = req.params.id;
    // console.log(req.body)
    if (!nombre || !apellido || !email || !telefono || !status) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const usuario = await updateUsers(nombre, apellido, email, telefono, status , id);
        return res.status(201).json({ usuario });
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: "Error occurred" });
    }
}
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const usuario = await deleteUsers(id);
        return res.status(201).json({ usuario });
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: "Error occurred" });
    }
}