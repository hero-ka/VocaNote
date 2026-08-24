import { useState } from "react";

import Button from "../../../components/ui/Button";
import ColorPicker from "../../../components/ui/ColorPicker";
import Input from "../../../components/ui/Input";
import Modal from "../../../components/ui/Modal";
import { Notecolor } from "../../../core/constants/noteColors";
import type { Note } from "../../../core/types/note";

type CreateNoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (note: Note) => void;
};

const CreateNoteModal = ({ isOpen, onClose, onCreate, }: CreateNoteModalProps) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState(Notecolor[0]);
  const handleClose = () => {
    setTitle("");
    setColor(Notecolor[0]);
    onClose();
  };
  const handleCreate = () => {
    if (!title.trim()) {
      return;
    }

    const now = new Date().toISOString();
    const note: Note = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content: "",
      color,
      createdAt: now,
      updatedAt: now,
    };

    onCreate(note);
    setTitle("");
    setColor(Notecolor[0]);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900">
              Create a new note
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Give your note a name and choose a color.
            </p>
          </div>

          <Button variant="ghost" type="button" onClick={handleClose} className="   flex h-8 w-8 items-center justify-center   rounded-lg text-lg text-neutral-400   transition hover:bg-neutral-100   hover:text-neutral-700">
            ×
          </Button>
        </div>

        <div className="mt-7 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Note name
            </label>

            <Input value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="e.g. Project ideas"
              autoFocus
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-neutral-700">
              Note color
            </label>

            <ColorPicker value={color} onChange={setColor} />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>

            <Button disabled={!title.trim()} onClick={handleCreate}>
              Add Note
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateNoteModal;