import { useState } from 'react';

const NoteCard = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content,
    tags: note.tags.join(', ')
  });

  const handleSave = () => {
    onEdit(note._id, {
      ...editData,
      tags: editData.tags.split(',').map(tag => tag.trim())
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow rounded p-4 space-y-2">
      {isEditing ? (
        <>
          <input
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <textarea
            value={editData.content}
            onChange={(e) => setEditData({ ...editData, content: e.target.value })}
            className="w-full p-2 border rounded"
            rows={4}
          />
          <input
            value={editData.tags}
            onChange={(e) => setEditData({ ...editData, tags: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-end gap-2">
            <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded">Save</button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold">{note.title}</h2>
          <p className="text-gray-700">{note.content}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {note.tags.map((tag, i) => (
              <span key={i} className="bg-blue-100 text-blue-600 px-2 py-1 text-sm rounded">
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400">Created: {new Date(note.createdAt).toLocaleString()}</p>
          <div className="flex justify-end gap-2">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-400 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={() => onDelete(note._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteCard;
