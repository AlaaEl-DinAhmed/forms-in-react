import { Fragment } from "react";
import './SimpleInput.css';

const Input = ({label, id, value, updateValue}) => {
    const changeInput = (event) => updateValue(event.target.value);
    
    return (
        <Fragment>
            <label htmlFor="userName">{label} </label>
            <input type="text" id={id} value={value} onChange={changeInput}/>
            <br />
            <br />
        </Fragment>
    )
}
export default Input;