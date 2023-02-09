import { response,request } from "express";

const usuariosGet = (req = request,res = response)=>{
    const {edad,q} = req.query;

    res.json({
        msg: 'Get api - Controlador',
        edad
    });
}

const usuariosPost = (req = request,res = response)=>{
    const {nombre, edad} = req.body;

    res.json({
        msg: 'Post api - Controlador',
        nombre, edad
    });
}

const usuariosPut = (req = request,res = response)=>{

    const {id} = req.params;

    res.json({
        msg: 'Put api - Controlador',
        id
    });
}

const usuariosPatch = (req = request,res = response)=>{
    res.json({
        msg: 'Patch api - Controlador'
    });
}

const usuariosDelete = (req = request,res = response)=>{
    res.json({
        msg: 'Delete api - Controlador'
    });
}




export {usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete};