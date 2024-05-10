import "./toggle.css";
import { SunFill, MoonFill } from 'react-bootstrap-icons'

export const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check">{isChecked ? <SunFill /> : <MoonFill />}</label>
        </div>
    );
};