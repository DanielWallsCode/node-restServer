import { response } from "express";


const esAdminRole = (req,res = response,next) => {
    if(!req.usuario){
        return req.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero'
        });
    }

    const { rol,nombre } = req.usuario;

    if(rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `${ nombre } no es administrador - No puede hacer esto`
        })
    }

    next();
}

const tieneRole = ( ...roles ) => {
    return (req,res = response,next) => {
        if(!req.usuario){
            return req.status(500).json({
                msg: 'Se quiere verificar el role sin validar el token primero'
            });
        }

        if(!roles.includes(req.usuario.rol)){
            return rs.status(401).json({
                msg:`El servicio requiere unode estos roles ${roles}`
            })
        }


       next() 
    }
}

export {esAdminRole, tieneRole};