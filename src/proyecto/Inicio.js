import React from "react";
import style from './style/Estilos.module.css'


function InicioPagina() {
    return (
        <>
            <div className={style.InicioPaginacontainer}>
                <h1>Fraccionamiento Valle Hermoso</h1>
                <img
                    src="/imagenes/foto_inicio.jpg"
                    className={style.InicioPaginaThumbnail}
                    alt="casas"
                    width={910}
                    height={550}
                />
            </div>
        </>
    );
}

export default InicioPagina;
