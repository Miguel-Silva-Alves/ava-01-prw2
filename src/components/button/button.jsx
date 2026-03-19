import './button.css';
const Button = (props) => {
    return (
        <button className="button-styled">
            {props.text}
        </button>
    )
}
export default Button;