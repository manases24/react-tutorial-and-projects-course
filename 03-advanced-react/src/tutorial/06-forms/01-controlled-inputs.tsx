import { useState } from "react";

export const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // do something
    console.log(name, email);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          className="form-input"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
