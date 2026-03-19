import "./field_text.css";

const FieldText = (props) => {

    const getDigited = (evento) => {
        props.onChange(evento.target.value)
    }
    return (
        <div className="field_text">
            <label>{props.label}</label>
            <input
                onChange={getDigited}
                placeholder={props.placeholder}
                value={props.value}
            />
        </div>
    )
}
export default FieldText;