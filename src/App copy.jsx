
function App() {

  const sumar = () =>{
    const numero = 5;
    if(numero > 5){
      console.log('Si es mayor');
    }else{
      console.log('No es mayor');
    }
  }

  const edad= 18;

  return (
    <>
      { edad>18? 'Eres Mayor de Edad':'No eres mayor de edad' }
      <h1>{'Hola Mundo'.toLowerCase()}</h1>      
    </>
  )
}

export default App
