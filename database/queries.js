import supabase from "./index.js";

export const find = async ()=>{
    const QUERY = "SELECT * FROM usuarios";
    try {
        let { data, error } = await supabase.from('usuarios').select('*')
        return data;
    } catch (error) {
        console.log('error during the find');
        throw error;
        
    }
}

export const findById = async (id)=>{
    const QUERY = "SELECT * FROM usuarios WHERE id = ?";
    try {
        let { data, error } = await supabase.from('usuarios').select('*').eq('id', id)
        return data;
    } catch (error) {
        console.log('error during find by id');
        throw error;
        
    }
}

export const createUsers = async (nombre, apellido, email, telefono, status)=>{
    const QUERY = `INSERT INTO usuarios 
        (nombre, apellido, email, telefono, status)
        VALUES(?, ?, ?, ?, ?)
        `; 
    try {
        let { data, error } = await supabase.from('usuarios')
        .insert([{nombre, apellido, email, telefono, status}])
        .select()
        if (error) {
            console.error('Error al insertar en la base de datos:', error);
            throw error;
        }
        return data;
    } catch (error) {
        console.log('error during creating new record');
        throw error;
        
    }
}

export const updateUsers = async (nombre, apellido, email, telefono, status, id)=>{
    const QUERY = `UPDATE usuarios
        SET nombre = ?, apellido = ?, email = ?, telefono = ?, status = ?
        WHERE id = ?`;
    try {
        
        let { data, error } = await supabase.from('usuarios')
        .update({
            nombre, 
            apellido,
            email, 
            telefono, 
            status
        })
        .eq('id', id)
        .select()        
    } catch (error) {
        console.log('error during updating new record');
        throw error;
        
    }
}

export const deleteUsers = async (id)=>{
    const QUERY = `DELETE FROM usuarios WHERE id = ?`;
    try {
        let { data, error } = await supabase.from('usuarios').delete().eq('id', id).select()
        if (error) {
            console.log('User not found or error fetching user:', fetchError);
            return null;
        }
        return data;
    } catch (error) {
        console.log('error during deleting a user');
    }
}