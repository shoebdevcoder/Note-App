import React, { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";
import { createNotes, deleteNote, getAllNotes, updateNote } from "../api/notesApi.js";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchNotes = async () => {
    const data = await getAllNotes(search);
    setNotes(data);
  };

  const handleAddNote = async (newNote) => {
    await createNotes(newNote);
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes(); // Refresh
  };

  const handleEdit = async (id, updatedData) => {
    await updateNote(id, updatedData);
    fetchNotes(); // Refresh
  };

  useEffect(() => {
    fetchNotes();
  }, [search]);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">📝 My Notes</h1>
      <input
        type="text"
        placeholder="Search by title or tag..."
        className="w-full p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <NoteForm onSubmit={handleAddNote} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
