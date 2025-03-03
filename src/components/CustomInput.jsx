import "./CustomInput.scss";

const CustomInput = ({ label, value, onChange, onEnterPress }) => {
    const handlekeyDown = (e)=> {
        if (e.key === "Enter") {
            onEnterPress();
        }
    }

    return (
        <div className="custom-input-container">
            <input
                type="text"
                className="custom-input"
                value={value}
                onChange={(e) => onChange(e)}
                onKeyDown={(e) => handlekeyDown(e)}
            />

            {label ? (
                <label
                    className={`${
                        value.length > 0 ? "shrink" : ""
                    } custom-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default CustomInput;
