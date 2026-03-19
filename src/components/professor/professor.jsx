import './professor.css';
const Professor = (props) => {
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="rodape">
                <h4>{props.name}</h4>
                <h5>{props.title}</h5>
            </div>
        </div>
    )
}
export default Professor;