import { useState } from "react";
import Header from "../components/ui/Header";
import CreateNoteModal from "./components/CreateNoteModal";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import type { Note } from "../core/types/note";
import { useAppDispatch, useAppSelector, } from "../core/store/hooks";
import { addNote, deleteNote, } from "../core/store/slices/notesSlice";

const Notes = () => {
    const dispatch = useAppDispatch();
    const notes = useAppSelector((state) => state.notes.notes);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [activeNote, setActiveNote] = useState<Note | null>(null);
    const openCreateModal = () => { setIsCreateModalOpen(true); };
    const closeCreateModal = () => { setIsCreateModalOpen(false); };

    if (activeNote) {
        return (
            <NoteEditor note={activeNote} onBack={() => setActiveNote(null)} />
        );
    }

    return (
        <main className="min-h-screen bg-[#F8F8F6] px-6 py-8">
            <div className="mx-auto max-w-6xl">
                <Header onAddNote={openCreateModal} />

                <section className="mt-12">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-lg font-medium text-neutral-900">
                            Your Notes
                        </h2>

                        <span className="text-sm text-neutral-400">
                            {notes.length}{" "}
                            {notes.length === 1 ? "note" : "notes"}
                        </span>
                    </div>

                    <NoteList
                        notes={notes}
                        onAddNote={openCreateModal}
                        onSelectNote={setActiveNote}
                        onDeleteNote={(id) => dispatch(deleteNote(id))}
                    />
                </section>
            </div>

            <CreateNoteModal
                isOpen={isCreateModalOpen}
                onClose={closeCreateModal}
                onCreate={(note) => dispatch(addNote(note))}
            />
        </main>
    );
};

export default Notes;