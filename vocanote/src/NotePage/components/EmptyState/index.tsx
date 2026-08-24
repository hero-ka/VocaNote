import Button from "../../../components/ui/Button";

type EmptyStateProps = {
    onAddNote: () => void;
};

const EmptyState = ({ onAddNote, }: EmptyStateProps) => {
    return (
        <div className=" flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-white px-6 text-center">
            <div className=" mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-2xl">
                🎙️
            </div>

            <h2 className="text-lg font-semibold text-neutral-900">
                No notes yet
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
                Create a note and start talking. Your words will
                become text automatically.
            </p>

            <Button variant="ghost" type="button" onClick={onAddNote} className=" mt-6 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800">
                Create your first note
            </Button>
        </div>
    );
};

export default EmptyState;