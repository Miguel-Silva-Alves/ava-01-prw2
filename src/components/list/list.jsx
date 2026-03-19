import './list.css';
const List = (props) => {
    return (
    <div className="list">
        <h2>list de Professores</h2>
        { // Usa o método map para iterar sobre cada elemento do array props.objetos.
        // Para cada elemento, uma função é executada que recebe dois parâmetros:
        // - objeto: o elemento atual do array
        // - index: o índice do elemento atual no array
        //
        // O resultado deste map é um array de elementos JSX,
        // que o React renderiza como uma list de professores na interface do usuário.
        }
        {props.objects.map( (object, index) => (
            // Para cada objeto no array, o código gera um bloco de JSX.
            // Cada bloco é envolvido por uma <div> com uma key única (usando o index).
            // Isso ajuda o React a identificar quais itens mudaram,
            // foram adicionados ou removidos.
            <div key={index}>
                <strong>Nome:</strong> {object.title} {object.name} ({object.area})<br/>
                <strong>Imagem:</strong> {object.image}<br/>
                <hr />
            </div>
        ))}
    </div>
    )
}
export default List;