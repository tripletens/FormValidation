import { Form } from "react-bootstrap";

export const Input = ({
  name,
  label,
  type,
  placeholder,
  errorclass,
  errormessage,
  value,
  onchange,
}) => {
  return (
    <>
      <Form.Label>
        <b>{label}</b>
      </Form.Label>
      <Form.Control
        name={name}
        onChange={onchange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
      {errormessage && <p style={errorclass}>{errormessage} </p>}
    </>
  );
};
