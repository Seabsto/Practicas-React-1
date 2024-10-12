function Card (props){
    return (
        <div className="card">
            {props.children}
        </div>
    )
}
const Child = () => {
    return (
        <Card>
            <h1>Practica</h1>
            <p>Practica React</p>
        </Card>
    )
}

export default Child