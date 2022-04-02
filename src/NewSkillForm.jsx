import "./NewSkillForm.css";
import { useState } from "react";
export default function NewSkillForm({ addSkill }) {
  const [formData, setFormData] = useState({
    name: "",
    level: 3
  });

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  function handleAddNewSkill(evt) {
    evt.preventDefault();
    console.log(formData);
    addSkill(formData);
    setFormData({ name: "", level: 3 });
  }

  return (
    <form className="NewSkillForm" onSubmit={handleAddNewSkill}>
      <label>
        Skill
        <input name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Level
        <select name="level" value={formData.level} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>

      <button type="submit">Add Skill</button>
    </form>
  );
}
