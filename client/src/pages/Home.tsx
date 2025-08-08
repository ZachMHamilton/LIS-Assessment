import { useState } from "react";
import type { HomeProps, Submission } from "../types"

function Home({onSubmit} : HomeProps) {
  const [formData, setFormData] = useState<Submission>({
    name: "",
    age: "",
    title: "",
    hometown: ""
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "age" ? (value === "" ? "" : parseInt(value) || "") : value
    }));
  }
  

  return (
    <div className="container">
      <h1>Personal Information</h1>
      
      <form onSubmit={() => onSubmit(formData)}>
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="hometown">
            Hometown
          </label>
          <input
            type="text"
            id="hometown"
            name="hometown"
            value={formData.hometown}
            onChange={handleChange}
          />
        </div>
        
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home
