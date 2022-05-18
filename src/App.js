import { useState } from 'react';
import Datos from './Componentes/Datos/Datos';


function App() {
  //variables de estado 
  const[FirstName, setFirstName] = useState("");
  const[LastName, setLastName] = useState("");
  const[Email, setEmail] = useState("");
  const[Password, setPassword] = useState("");
  const[ComfirmPassword, setComfirmarPassword] = useState("");
  //variables de error 
  const[FirstNameError, setFirstNameError] = useState(true);
  const[LastNameError, setLastNameError] = useState(true);
  const[EmailError, setEmailError] = useState(true);
  const[PasswordError, setPasswordError] = useState(true);
  const[ComfirmPasswordError, setComfirmarPasswordError] = useState(true);


  const agregarDatos = (event) => {
    event.preventDefault();
    setFirstName( () => FirstName);
    setLastName( () => LastName);
    setEmail( () => Email);
    setPassword( () => Password)
    setComfirmarPassword( () => ComfirmPassword);
  }


//creando validaciones 
  const validaNombre = (event) => {
    setFirstName(event.target.value);
    if(event.target.value.length < 1){
      setFirstNameError("Nombre requerido");
    }else if(event.target.value.length <2){
      setFirstNameError("el nombre requiere mas de 2 caracteres")
    }else{
      setFirstNameError( '' );
    }
  }

  const validaApellido = (event) => {
    setLastName(event.target.value);
    if(event.target.value.length < 1){
      setLastNameError("Apellido requerido");
    }else if(event.target.value.length <2){
      setLastNameError("el apellido requiere mas de 2 caracteres")
    }else{
      setLastNameError( '' );
    }
  }

  const validaEmail = (event) => {
    setEmail(event.target.value);
    if(event.target.value.length < 1){
      setEmailError("Email requerido");
    }else if(event.target.value.length <2){
      setEmailError("el email requiere mas de 2 caracteres")
    }else{
      setEmailError( '' );
    }
  }

  const validaPassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value.length < 1){
      setPasswordError("Password requerido");
    }else if(event.target.value.length <8){
      setPasswordError("el password requiere mas de 8 caracteres")
    }else{
      setPasswordError( '' );
    }
  }

  const validaComfirmPassword = (event) => {
    setComfirmarPassword(event.target.value);
    if(event.target.value !== Password ){
      setComfirmarPasswordError("El password no coincide");
    }else{
      setComfirmarPasswordError( '' );
    }
  }
  

  return (
    <div className="App">
      <form onSubmit={agregarDatos}>
        
        <div>
        <label htmlFor='firstName'>
          FirstName : 
        </label>
        <input type="text" id='firstName'
               value={FirstName}
               onChange={ validaNombre } />
        {
          FirstNameError ? <p style= {{color:'red'}}>{FirstNameError}</p> : <p style = {{color:'green'}}> campo completado </p>
        }
        </div>
        
        <div>
        <label htmlFor='lastName'>
          LastName : 
        </label>
        <input type="text" id='lastName'
               value={LastName}
               onChange={ validaApellido} /> 
        {
          LastNameError ? <p style= {{color:'red'}}>{LastNameError}</p>: <p style = {{color:'green'}}> campo completado </p>
        }
        </div>

        <div>
        <label htmlFor='email'>
          Email : 
        </label>
        <input type="text" id='email'
               value={Email}
               onChange={ validaEmail} />
        {
          EmailError ? <p style= {{color:'red'}}>{EmailError}</p>: <p style = {{color:'green'}}> campo completado </p>
        }
        </div>

        <div>
        <label htmlFor='password'>
          Password : 
        </label>
        <input type="password" id='password'
               value={Password}
               onChange={ validaPassword} />
        {
          PasswordError ? <p style= {{color:'red'}}>{PasswordError}</p>: <p style = {{color:'green'}}> campo completado </p>
        }         
        </div>

        <div>
        <label htmlFor='comfirmPassword'>
          ComfirmPassword : 
        </label>
        <input type="password" id='comfirmPassword'
               value={ComfirmPassword}
               onChange={ validaComfirmPassword} />
        {
          ComfirmPasswordError ? <p style= {{color:'red'}}>{ComfirmPasswordError}</p>: <p style = {{color:'green'}}> campo completado </p>
        } 
        </div>
      </form>

      <Datos nombre={FirstName} apellido={LastName} email={Email} password={Password} comfirmPassword = {ComfirmPassword}/>
      
    </div>
  );
}

export default App;
