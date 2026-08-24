import NoteCard from "../NoteCard";
import EmptyState from "../EmptyState";
import type { Note } from "../../../core/types/note";

type NoteListProps = {
  notes: Note[];
  onAddNote: () => void;
  onSelectNote: (note: Note) => void;
  onDeleteNote: (id: string) => void;
};

const NoteList = ({ notes, onAddNote, onSelectNote, onDeleteNote,}: NoteListProps) => {
  if (notes.length === 0) {
    return <EmptyState onAddNote={onAddNote} />;
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onClick={() => onSelectNote(note)}
          onDelete={() => onDeleteNote(note.id)}
        />
      ))}
    </div>
  );
};

export default NoteList;