import { request, response } from "express";
import Usuario from "../models/usuario.js";
import bcrypjs from "bcryptjs";
import generarJWT from "../helpers/generar-jwt.js";


const login = async(req=request,res=response) => {

    const { correo, constrasena } = req.body;

    try {

        //VERIFICAR SI EL EMAIL EXISTE
        const usuario = await Usuario.findOne({correo});
        if(!usuario){
            return res.status(400).json({
                msg: 'Usuario / Contraseña no son correctos - correo'
            });
        }
        
        // SI EL USUARIO ESTA ACTIVO
        if(!usuario.estado){
            return res.status(400).json({
                msg: 'Usuario / Contraseña no son correctos - estado:false'
            });
        }

        // VERIFICAR LA CONTRASEÑA
        const validPassword = bcrypjs.compareSync(constrasena, usuario.constrasena);
        if(!validPassword){
            return res.status(400).json({
                msg: 'Usuario / Contraseña no son correctos - contraseña'
            });
        }

        // GENERAR EL JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Algo salio mal :('
        })
    }
}

export default login