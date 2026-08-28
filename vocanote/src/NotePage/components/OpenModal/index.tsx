import Button from "../../../components/ui/Button";
import ColorPicker from "../../../components/ui/ColorPicker";
import Input from "../../../components/ui/Input";
import Modal from "../../../components/ui/Modal";

import type { Notecolor } from "../../../core/constants/noteColors";

interface OpenModalProps {
    isCreateModalOpen: boolean;
    title: string;
    color: (typeof Notecolor)[number];
    setTitle: (value: string) => void;
    setColor: (value: (typeof Notecolor)[number]) => void;
    onClose: () => void;
    onCreate: () => void;
}

export default function OpenModal({ isCreateModalOpen, title, color, setTitle, setColor, onClose, onCreate,}: OpenModalProps) {
    return (
        <Modal isOpen={isCreateModalOpen} onClose={onClose}>
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

                    <button type="button" onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-lg text-lg text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700">
                        ×
                    </button>
                </div>

                <div className="mt-7 space-y-6">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-neutral-700">
                            Note name
                        </label>

                        <Input
                            value={title}
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
                        <Button variant="secondary" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button disabled={!title.trim()} onClick={onCreate}>
                            Add Note
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}