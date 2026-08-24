import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";
import type { Note } from "../../../core/types/note";

type NotesState = {
    notes: Note[];
};

const initialState: NotesState = {
    notes: [],
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<Note>) => {
            state.notes.unshift(action.payload);
        },

        updateNote: (state, action: PayloadAction<Note>) => {
            const index = state.notes.findIndex(
                (note) => note.id === action.payload.id
            );

            if (index !== -1) {
                state.notes[index] = action.payload;
            }
        },

        deleteNote: (state, action: PayloadAction<string>) => {
            state.notes = state.notes.filter(
                (note) => note.id !== action.payload
            );
        },
    },
});

export const { addNote, updateNote, deleteNote, } = notesSlice.actions;
export default notesSlice.reducer;