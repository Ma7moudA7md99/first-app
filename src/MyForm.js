import { useState } from "react";
// best way to handle form inputs with one useState, deal with all inputs values as one object.
function MyForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    isStudent: false,
    country: "EGY",
    status: "",
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Name </label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          // const newFormInputs = { ...formInputs };
          // newFormInputs.name = event.target.value;
          // setFormInputs(newFormInputs);
          setFormInputs({ ...formInputs, name: event.target.value });
        }}
      />
      <hr />
      <label>Email </label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          // const newFormInputs = { ...formInputs };
          // newFormInputs.email = event.target.value;
          // setFormInputs(newFormInputs);
          setFormInputs({ ...formInputs, email: event.target.value });
        }}
      />
      <hr />
      <label>Age </label>
      <input
        value={formInputs.age}
        onChange={(event) => {
          // const newFormInputs = { ...formInputs };
          // newFormInputs.age = event.target.value;
          // setFormInputs(newFormInputs);
          setFormInputs({ ...formInputs, age: event.target.value });
        }}
      />
      <hr />
      <label>General Info </label>
      <textarea
        value={formInputs.generalInfo}
        onChange={(event) => {
          setFormInputs({ ...formInputs, generalInfo: event.target.value });
        }}
      />

      <hr />
      <label htmlFor="st_check">Are you student ?</label>
      <input
        type="checkbox"
        id="st_check"
        checked={formInputs.isStudent}
        onChange={(event) => {
          setFormInputs({ ...formInputs, isStudent: event.target.checked });
        }}
      />
      <hr />
      <select
        value={formInputs.country}
        onChange={(event) => {
          setFormInputs({ ...formInputs, country: event.target.value });
        }}
      >
        <option>KSA</option>
        <option>EGY</option>
        <option>SYR</option>
      </select>
      <hr />
      <div>
        <input
          type="radio"
          name="status"
          value="student"
          checked={formInputs.status === "student"}
          onChange={(event) => {
            setFormInputs({ ...formInputs, status: event.target.value });
          }}
        />
        Student
        <input
          type="radio"
          name="status"
          value="teacher"
          checked={formInputs.status === "teacher"}
          onChange={(event) => {
            setFormInputs({ ...formInputs, status: event.target.value });
          }}
        />
        Teacher
      </div>
      <hr />
      <button
        onClick={() => {
          console.log(formInputs);
        }}
      >
        Submit
      </button>
    </form>
  );
}
// traditional way to handle form with a state for each input
// function MyForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//       }}
//     >
//       <label>Name</label>
//       <input
//         value={name}
//         onChange={(event) => {
//           setName(event.target.value);
//         }}
//       />
//       <hr />
//       <label>Email</label>
//       <input
//         value={email}
//         onChange={(event) => {
//           setEmail(event.target.value);
//         }}
//       />
//       <hr />
//       <button
//         onClick={() => {
//           console.log(name);
//           console.log(email);
//         }}
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

export default MyForm;
