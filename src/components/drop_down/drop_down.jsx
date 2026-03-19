import './drop_down.css';

const DropDown = (props) => {
    const toChange = (evento) => {
        props.toChange(evento.target.value)
    }
    return (
        <div className='drop_down'>
            <label>{props.label}</label>
            <select value={props.value} onChange={toChange}>
            { props.itens.map( item => <option key={item}>{item}</option>) }
            </select>
        </div>
    )
}
export default DropDown;