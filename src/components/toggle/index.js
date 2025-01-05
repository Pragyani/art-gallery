import './style.css';

const Toggle = ({ checked = "", onChange = () => { }, label = "" }) => {
    return <div className="display-flex">
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className="slider">
                <span className="toggle-circle"></span>
            </span>
            <span className="toggle-label">{label}</span>
        </label>
    </div>
}

export default Toggle;