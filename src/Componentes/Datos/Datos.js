

function Datos( props ){

    return(
        <div className='tarjeta_todo'>
            <h3 >
                Your from Data
            </h3>
            <h2> FirstName: {props.nombre}</h2>
            <h2> LastName: {props.apellido}</h2>
            <h2> Email: {props.email}</h2>
            <h2 > Password: {props.password}</h2>
            <h2> ComfirmPassword: {props.comfirmPassword}</h2>

        </div>
    ) 
}

export default Datos;