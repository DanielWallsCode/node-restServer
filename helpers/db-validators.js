import Role from "../models/role.js";
import Usuario from "../models/usuario.js";

const esRoleValido = async(rol = '') => {

    const existeRol = await Role.findOne({rol});
    if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}

const emailExiste = async(correo = '') => {
     // VERIFICAR SI EL CORREO EXISTE
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
            throw new Error(`El Correo ${correo} ya esta registrado en la base de datos`);
    }
}

const existeUsuarioPorId = async(id) => {
        // VERIFICAR SI EL CORREO EXISTE
       const existeUsuario = await Usuario.findById(id);
       if(!existeUsuario){
               throw new Error(`El id no ${id} existe`);
       }
   }

export {esRoleValido,emailExiste,existeUsuarioPorId};