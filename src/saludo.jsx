//funcion simple de saludar
// function Saludo(props){
//     return <h1>Hola {props.name}</h1>
// }

function saludoIdioma(props){
    switch(props.idioma){
        case 'es':
            return <h1>Hola! {props.name}</h1>
            break;
        case 'en':
            return <h1>Hello! {props.name}</h1>
            break;
    }
}


export default saludoIdioma
// export default Saludo