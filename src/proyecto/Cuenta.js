import React, { useState } from "react";
import './style/Estilos.module.css';
import { Formulario, Label, Terminos ,  ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, Input } from "./elementos/Formulario";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from "./elementos/Input";




const App = () => {

    const [usuario, cambiarUsuario] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [email, cambiarEmail] = useState({ campo: '', valido: null });
    const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [casa, cambiarCasa] = useState({ campo: '', valido: null });
    
const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }


    const onSubmit = (e) => {
        e.preventDefault();

        if(
            usuario.valido === 'true' &&
            password.valido === 'true' &&
            email.valido === 'true' &&
            telefono.valido === 'true' &&
            casa.valido === 'true' &&
            terminos
        ) {
            cambiarFormularioValido(true);
            cambiarUsuario({campo: '', valido: null});
            cambiarPassword({campo: '', valido: null});
            cambiarEmail({campo: '', valido: null});
            cambiarTelefono({campo: '', valido: null});
            cambiarCasa({campo: '', valido: null});
            cambiarTerminos(false);
        } else {
            cambiarFormularioValido(false);
        }
    }



    return (
    
        <main>

<h2>Fomulario de resgistro</h2>
            <br></br>   

<p>Por favor, rellene el siguiente formulario para registrarse en nuestro sitio web.</p>

    
            <Formulario action="" onSubmit={onSubmit} >
            
                <ComponenteInput
                    
                    estado={usuario}
                    cambiarEstado={cambiarUsuario}
                    type="text"
                    label="Usuario"
                    placeholder="Nombre de Usuario"
                    name="usuario"
                    leyendaError="El nombre de usuario debe ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo."
                    expresionRegular={/^[a-zA-Z0-9_-]{4,16}$/}
                />

                <ComponenteInput
                    estado={email}
                    cambiarEstado={cambiarEmail}
                    type="email"
                    label="Correo Electronico"
                    placeholder="Ingresa tu correo electronico"
                    name="email"
                    leyendaError="El correo electronico no es valido."
                    expresionRegular={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
                />

                <ComponenteInput
                    estado={password}
                    cambiarEstado={cambiarPassword}
                    type="password"
                    label="Contraseña"
                    placeholder="Contraseña"
                    name="password"
                    leyendaError="La contraseña tiene que ser de 4 a 12 digitos."
                    expresionRegular={/^[a-zA-Z0-9_-]{4,12}$/}
                />

                
                <ComponenteInput
                    estado={telefono}
                    cambiarEstado={cambiarTelefono}
                    type="text"
                    label="Telefono"
                    placeholder="Numero de telefono"
                    name="telefono"
                    leyendaError="El numero de telefono solo puede contener numeros y el maximo son 14 digitos."
                    expresionRegular={/^[0-9]{7,14}$/}
                />

                <ComponenteInput
                
                    estado={casa}
                    cambiarEstado={cambiarCasa}
                    type="text"
                    label="No. de Casa"
                    placeholder="Numero de casa"
                    name="casa"
                    leyendaError="El numero de casa no puede estar vacio."
                    expresionRegular={/^[a-zA-Z0-9_-]{1,16}$/}
                
                />

                <Terminos>
                    <Label>
                        <Input type="checkbox" 
                        name="terminos" 
                        id="terminos" 
                        checked={terminos}
                        onChange = {onChangeTerminos}                      
                        />
                        Acepto los terminos y condiciones
                    </Label>
                </Terminos>

                {formularioValido === false &&
                    
                    <MensajeError>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <p>
                        <b>Error</b> Por favor rellena el formulario correctamente
                        </p>
                    </MensajeError>}
            
                        <br></br>
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
                    {formularioValido === true &&  <MensajeExito>Formulario Enviado Exitosamente! </MensajeExito>}
                </ContenedorBotonCentrado>

            </Formulario>
        </main>
    );
}

export default App;

