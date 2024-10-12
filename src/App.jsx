import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDom from 'react-dom'
import Child from './children'
import Saludo from './saludo'
import saludoIdioma from './saludo'
import Contador from './contUseState'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
<>
<Child />

{/* funcion simple de saludar */}
{/* <Saludo name = "Sebas" /> */}

{saludoIdioma({ idioma: 'en', name: 'Sebas' })}

<Contador />




</>
)
export default App

/*
Nombre: Johan Sebastián Tobón Vargas
Ficha: 

1.¿Cuál es la diferencia entre un componente UI y un componente funcional en React?

La principal función de los componentes UI son manejar y presentar la interfaz visual, 
como por ejemplo botones, formularios, listas, modales etc y su sintaxis usualmente funciones que
retornan JSX, el estado interno estos pueden tener estado(usando useEstate) sin embargo su enfoque 
principal es la representación 

La función principal de los componentes funcionales es encapsular la lógica y 
comportamiento de la app, también pueden tener estado y efectos secundarios usando 
(useEstate y useEffect), se puede aplicar en manejo de autenticación, validación de formularios, 
lógica de rutas et, también son funciones que retornan JSX, pero su enfoque está en lógica.



¿Qué son las props en React y cuál es su propósito principal?


Las props en React son propiedades que se pasan de un componente padre a un hijo. Su propósito 
principal es transmitir datos y métodos, ayudando a crear componentes reutilizables y mantenibles. 
Son inmutables y permiten que los componentes compartan información de forma eficiente.

Componente Padre: Es un componente que contiene y pasa datos o funciones a otros componentes.
Controla y gestiona el estado o la lógica principal.
Componente Hijo: Es un componente que recibe datos (props) de su componente padre y 
los usa para renderizar contenido específico.

¿Qué son los children props en React y por qué no se recomienda su uso excesivo?


Los children props en React permiten pasar componentes o elementos hijos dentro de otros componentes, 
lo que facilita la reutilización y composición de interfaces. Sin embargo, su uso excesivo puede complicar el código,
haciendo difícil de seguir la jerarquía de componentes y la lógica interna, afectando la legibilidad y mantenibilidad

¿Qué es useState en React y para qué se utiliza principalmente?

`useState` es un hook en React que permite agregar y gestionar el estado local en componentes 
funcionales. Se utiliza principalmente para almacenar y actualizar valores que cambian a lo largo 
del ciclo de vida del componente, como datos de formularios, contadores o interacciones del usuario.

*/