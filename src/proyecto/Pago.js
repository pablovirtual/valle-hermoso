import React, {useState}from "react";
import './style/Estilos.module.css';
import { Formulario, ContenedorBotonCentrado, MensajeError, MensajeExito, Boton} from "./elementos/Formulario";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from "./elementos/Input";





const Pago = () => {

    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [email, cambiarEmail] = useState({ campo: '', valido: null });
    const [tarjeta, cambiarTarjeta] = useState({ campo: '', valido: null });
    const [fecha, cambiarFecha] = useState({ campo: '', valido: null });
    const [codigo, cambiarCodigo] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);


    const onSubmit = (e) => {
        e.preventDefault();
    
        if (
            nombre.valido === 'true' &&
            email.valido === 'true' &&
            tarjeta.valido === 'true' &&
            fecha.valido === 'true' &&
            codigo.valido === 'true'
        ) {
            cambiarFormularioValido(true);
            cambiarNombre({ campo: '', valido: null });
            cambiarEmail({ campo: '', valido: null });
            cambiarTarjeta({ campo: '', valido: null });
            cambiarFecha({ campo: '', valido: null });
            cambiarCodigo({ campo: '', valido: null });
            cambiarFormularioValido(false);
        }
    }



    return (



        <main>

            <h2>Pago</h2>
            <br></br>

            <p>Por favor, rellene el siguiente formulario para realizar el pago.</p>

    <Formulario action="" onSubmit={onSubmit} >

        <ComponenteInput

            estado={nombre}
            cambiarEstado={cambiarNombre}
            type="text"
            label="Nombre"
            placeholder="Nombre de Usuario"
            name="Nombre"
            leyendaError="El nombre de usuario debe ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo."

        />

        <ComponenteInput
        
            estado={email}
            cambiarEstado={cambiarEmail}
            type="email"
            label="Correo Electronico"
            placeholder="Correo Electronico"
            name="Correo Electronico"
            leyendaError="El nombre de usuario debe ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo."

        />

        <ComponenteInput
            estado={tarjeta}
            cambiarEstado={cambiarTarjeta}
            type="text"
            label="Numero de Tarjeta"
            placeholder="Numero de Tarjeta"
            name="Numero de Tarjeta"
            leyendaError="El nombre de usuario debe ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo."
        />

        <ComponenteInput
        
            estado={fecha}
            cambiarEstado={cambiarFecha}
            type="date"
            label="Fecha de Vencimiento"
            placeholder="Fecha de Vencimiento"
            name="Fecha de Vencimiento"

        />

        <ComponenteInput
        
            estado={codigo}
            cambiarEstado={cambiarCodigo}
            type="text"
            label="Codigo de Seguridad"
            placeholder="Codigo de Seguridad"
            name="Codigo de Seguridad"
            
        
        />

<br></br>

{formularioValido === false &&
                    
                    <MensajeError>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <p>
                        <b>Error</b> Por favor rellena el formulario correctamente
                        </p>
                    </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
                    {formularioValido === true &&  <MensajeExito>Formulario Enviado Exitosamente! </MensajeExito>}
                </ContenedorBotonCentrado>

    
    </Formulario>


</main>




    )


}

export default Pago;

