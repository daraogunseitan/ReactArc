import React, { useState } from "react";
import "../styles.css";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityEnum = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from reloading
    clearForm();
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          className="form-input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityEnum).map(([key, value]) => (
          <label key={key} className="prtiority-label">
            <input
              type="radio"
              value={key}
              className="priority-input"
              checked={priority === key}
              onChange={(e) => setPriority(e.target.value)}
            ></input>
            {value}
          </label>
        ))}
      </fieldset>

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
