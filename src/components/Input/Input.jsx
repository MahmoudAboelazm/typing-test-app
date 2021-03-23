import "./Input.css";

const Input = ({ inputValue, getTheInputValue }) => (
  <input autoFocus value={inputValue} onChange={getTheInputValue} />
);

export default Input;
