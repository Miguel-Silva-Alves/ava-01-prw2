import Professor from '../professor/professor';
import './area.css';

const Area = (props) => {
    return (
        (props.professores.length > 0) ?
            <section className="area" style={props.corDeFundo}>
                <h3 style={props.corSublinhado}>{props.name}</h3>
                <div className="professores">
                    {props.professores.map( prof => <Professor
                    key={prof.name}
                    name={prof.name}
                    title={prof.title}
                    image={prof.image}
                    /> )}
                </div>
            </section>
        : ''
    )
}
export default Area;