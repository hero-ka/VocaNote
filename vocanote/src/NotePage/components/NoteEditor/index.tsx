import type { Note } from "../../../core/types/note";

type NoteEditorProps = {
  note: Note;
  onBack: () => void;
};

const NoteEditor = ({ note, onBack, }: NoteEditorProps) => {
  return (
    <main className="min-h-screen px-6 py-8" style={{ backgroundColor: note.color, }}>
      <div className="mx-auto max-w-3xl">
        <button type="button" onClick={onBack} className="   mb-8 text-sm text-neutral-500   transition hover:text-neutral-900 ">
          ← Back
        </button>
        <div className="   rounded-3xl bg-white/70 p-8   shadow-sm backdrop-blur ">
          <h1 className="text-3xl font-semibold text-neutral-900">
            {note.title}
          </h1>

          <div className="   mt-8 min-h-72 whitespace-pre-wrap   text-base leading-8 text-neutral-700 ">
            {note.content ||
              "Start speaking and your words will appear here..."}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NoteEditor;