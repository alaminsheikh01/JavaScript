import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/UI/button/Button";
const init = {
  title: "",
  bio: "",
  skills: "",
};

function App() {
  const [formState, setFormState] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = checkValidity(formState);
    if (isValid) {
      console.log(formState);
    } else {
      console.log(errors);
    }
  };

  const checkValidity = (formState) => {
    const errors = {};
    const { title, bio, skills } = formState;
    if (!title) {
      errors.title = "Invali title";
    }
    if (!bio) {
      errors.bio = "invalid bio";
    }
    if (!skills) {
      errors.skills = "invalid skills";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <InputGroup
            onChange={handleChange}
            value={formState.title}
            label={"Title"}
            name={"title"}
            placeholder={"Software Engineer"}
          />
          <InputGroup
            onChange={handleChange}
            value={formState.bio}
            label={"Bio"}
            name={"bio"}
            placeholder={"I am a software engineer..."}
          />
          <InputGroup
            onChange={handleChange}
            value={formState.skills}
            label={"Skills"}
            name={"skills"}
            placeholder={"javascript, react"}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default App;
