import { useState } from "react";

const AddMaterialType = () => {
  const initValue = {
    idVatchat: "",
    number: "",
  };

  const [values, setValues] = useState([]);
  const [value, setValue] = useState(initValue);
  const options = [
    { value: 1, text: "Ban 1" },
    { value: 2, text: "Ban 2" },
    { value: 3, text: "Ghe 1" },
    { value: 4, text: "Ghe 2" },
  ];

  const FormAdd = ({ index, item }) => {
    const [valueItem, setValueItem] = useState(item);
    const handleChange = (index, key, value) => {
      setValueItem({ ...valueItem, [key]: value });
      const temp = [...values];
      temp[index][key] = value;
      setValues(temp);
      console.log(values);
    };

    const handleDelete = (index) => {
      let temp = [...values];
      temp = temp.filter((item, i) => i !== index);
      setValues(temp);
    };
    return (
      <div className="row">
        <div className="col-md-4">
          <label>Vat chat</label>
          <select
            className="form-select"
            onChange={(e) => handleChange(index, "idVatchat", e.target.value)}
            value={valueItem.idVatchat}
          >
            {options.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-4">
          <label>So luong</label>
          <input
            className="form-control"
            onChange={(e) => handleChange(index, "number", e.target.value)}
            value={valueItem.number}
          ></input>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-end h-100">
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(index)}
            >
              Xoa
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleAdd = () => {
    console.log(value.idVatchat);
    if (value.idVatchat.length === 0) {
      value.idVatchat = options[0].value
    }
    if (value.number.length > 0) {
      setValues([...values, value]);
      setValue(initValue);
    }
  };

  return (
    <>
      {values.map((item, index) => (
        <FormAdd key={index} index={index} item={item} />
      ))}
      <div className="row">
        <div className="col-md-4">
          <label>Vat chat</label>
          <select
            className="form-select"
            value={value.idVatchat}
            onChange={(e) => setValue({ ...value, idVatchat: e.target.value })}
          >
            {options.map((item, index) => {
              return <option key={index}>{item.text}</option>;
            })}
          </select>
        </div>
        <div className="col-md-4">
          <label>So luong</label>
          <input
            className="form-control"
            value={value.number}
            onChange={(e) => setValue({ ...value, number: e.target.value })}
          ></input>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-end h-100">
            <button className="btn btn-primary" onClick={handleAdd}>
              Them
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-info" onClick={() => console.log(values)}>
        Submit
      </button>
    </>
  );
};
export default AddMaterialType;
