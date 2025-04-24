import React, { useState } from "react";

const NoteForm = ({onSubmit}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      content,
      tags: tags.split(",").map((txt) => txt.trim()),
    });
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <div className="NoteForm">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 bg-white shadow rounded"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
