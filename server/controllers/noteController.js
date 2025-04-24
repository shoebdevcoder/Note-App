import Note from "../models/Note.js";

// create a note
export const createNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const note = new Note({ title, content, tags });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all notes
export const getNotes = async (req, res) => {
  try {
    const search = req.query.search || "";
    const notes = await Note.find({
      $or: [{ title: new RegExp(search, "i") }, { tags: { $in: [search] } }],
    }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Uodate Notes
export const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Notes
export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};