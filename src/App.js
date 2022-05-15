import { useState } from 'react';
import Datos from './Componentes/Datos/Datos';


function App() {

  const[FirstName, setFirstName] = useState("");
  const[LastName, setLastName] = useState("");
  const[Email, setEmail] = useState("");
  const[Password, setPassword] = useState("");
  const[ComfirmPassword, setComfirmarPassword] = useState("");

  const agregarDatos = (event) => {
    event.preventDefault();
    setFirstName( () => FirstName);
    setLastName( () => LastName);
    setEmail( () => Email);
    setPassword( () => Password)
    setComfirmarPassword( () => ComfirmPassword);
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
               onChange={ ( event ) => setFirstName(event.target.value)} />
        </div>
        
        <div>
        <label htmlFor='lastName'>
          LastName : 
        </label>
        <input type="text" id='lastName'
               value={LastName}
               onChange={ ( event ) => setLastName(event.target.value)} /> 
        </div>
        <div>
        <label htmlFor='email'>
          Email : 
        </label>
        <input type="text" id='email'
               value={Email}
               onChange={ ( event ) => setEmail(event.target.value)} />
        </div>

        <div>
        <label htmlFor='password'>
          Password : 
        </label>
        <input type="password" id='password'
               value={Password}
               onChange={ ( event ) => setPassword(event.target.value)} />         
        </div>

        <div>
        <label htmlFor='comfirmPassword'>
          ComfirmPassword : 
        </label>
        <input type="password" id='comfirmPassword'
               value={ComfirmPassword}
               onChange={ ( event ) => setComfirmarPassword(event.target.value)} />
        </div>
      </form>

      <Datos nombre={FirstName} apellido={LastName} email={Email} password={Password} comfirmPassword = {ComfirmPassword}/>
      
    </div>
  );
}

export default App;
