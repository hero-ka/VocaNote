import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, } from "redux-persist";
import storage from "./storage";
import notesReducer from "./slices/notesSlice";

const persistedNotesReducer = persistReducer(
    { key: "notes", storage, },
    notesReducer
);
export const store = configureStore({
    reducer: { notes: persistedNotesReducer, },
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;