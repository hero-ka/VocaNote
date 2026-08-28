import { useState } from "react";
import Header from "../components/ui/Header";
import EmptyState from "./components/EmptyState";
import NoteCard from "./components/NoteCard";
import NoteEditor from "./components/NoteEditor";
import { Notecolor } from "../core/constants/noteColors";
import type { Note } from "../core/types/note";
import { useAppDispatch, useAppSelector } from "../core/store/hooks";
import { addNote, deleteNote, } from "../core/store/slices/notesSlice";
import OpenModal from "./components/OpenModal";

export default function Notes() {
    const dispatch = useAppDispatch();
    const notes = useAppSelector((state) => state.notes.notes);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [color, setColor] = useState(Notecolor[0]);
    const [activeNoteId, setActiveNoteId] = useState<string | null>(null);
    const activeNote = notes.find((note) => note.id === activeNoteId) ?? null;
    const openCreateModal = () => {
        setTitle("");
        setColor(Notecolor[0]);
        setIsCreateModalOpen(true);
    };
    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };
    const createNote = () => {
        if (!title.trim()) return;
        const now = new Date().toISOString();
        const newNote: Note = {
            id: crypto.randomUUID(),
            title: title.trim(),
            content: "",
            color,
            createdAt: now,
            updatedAt: now,
        };

        dispatch(addNote(newNote));
        closeCreateModal();
    };

    const handleDeleteNote = (id: string) => {
        dispatch(deleteNote(id));

        if (activeNoteId === id) {
            setActiveNoteId(null);
        }
    };

    if (activeNote) {
        return (
            <NoteEditor note={activeNote} onBack={() => setActiveNoteId(null)}/>
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

                    {notes.length === 0 ? (
                        <EmptyState onAddNote={openCreateModal} />
                    ) : (
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {notes.map((note) => (
                                <NoteCard
                                    key={note.id}
                                    note={note}
                                    onClick={() => setActiveNoteId(note.id)}
                                    onDelete={() => handleDeleteNote(note.id)}
                                />
                            ))}
                        </div>
                    )}
                </section>
            </div>

            <OpenModal
                isCreateModalOpen={isCreateModalOpen}
                title={title}
                color={color}
                setTitle={setTitle}
                setColor={setColor}
                onClose={closeCreateModal}
                onCreate={createNote}
            />
        </main>
    );
}