import Button from "../../../components/ui/Button";
import type { Note } from "../../../core/types/note";
type NoteCardProps = {
    note: Note;
    onClick: () => void;
    onDelete: () => void;
};

const NoteCard = ({ note, onClick, onDelete, }: NoteCardProps) => {
    const preview = note.content.trim() || "Start speaking to add your thoughts...";
    const formattedDate = new Date(note.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", });

    return (
        <article onClick={onClick} style={{ backgroundColor: note.color }} className=" group relative min-h-52 cursor-pointer overflow-hidden rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <h2 className="line-clamp-2 text-lg font-semibold text-neutral-900">
                    {note.title}
                </h2>

                <Button variant="ghost" type="button" onClick={(event) => { event.stopPropagation(); onDelete(); }}
                    aria-label="Delete note"
                    className=" flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 opacity-0 transition hover:bg-black/5 hover:text-neutral-900 group-hover:opacity-100"
                >
                    ⋯
                </Button>
            </div>

            <p className="mt-5 line-clamp-5 text-sm leading-6 text-neutral-700">
                {preview}
            </p>

            <div className="absolute bottom-5 left-5 text-xs text-neutral-500">
                {formattedDate}
            </div>
        </article>
    );
};

export default NoteCard;