import './radio.css';

const Radio = (props) => {

  const onChange = (event) => {
    props.toChange(event.target.value)
  }

  return (
    <div className="radio-group">
      <label className="radio-label">{props.label}</label>

      <div className="radio-options">
        {props.itens.map((item) => (
          <label key={item} className="radio-option">
            <input
              type="radio"
              name={props.name}
              value={item}
              checked={props.value === item}
              onChange={onChange}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  )
}

export default Radio;