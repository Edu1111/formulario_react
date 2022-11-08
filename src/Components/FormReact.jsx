import React,{useState} from "react";

function FormReact(){
    const [nombre,setNombre]=useState("");
    return(
        <>
        <h1>PRIMER EJERCICIO </h1>
        <div>
            <form> 
                <label htmlFor="Nombre">Nombre:</label>
                <input type="text"placeholder="Ingresa tu nombre" value={nombre} id="nombre" onChange={(a)=>{
                    setNombre(a.target.value)
                }} />
                <button type="submit" onClick={(b)=>{
                    b.preventDefault();
                    alert(`Hola : ${nombre}`)

                }}>Enviar</button>
                <div><h2>Hola: {nombre}</h2></div>


            </form>
        </div>

        </>
    )
}
export default FormReact