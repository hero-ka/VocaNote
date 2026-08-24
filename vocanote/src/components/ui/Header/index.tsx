import Button from "../Button";

type HeaderProps = {
    onAddNote: () => void;
};

const Header = ({ onAddNote }: HeaderProps) => {
    return (
        <header className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
                    VocaNote
                </h1>

                <p className="mt-2 text-sm text-neutral-500">
                    Capture your thoughts with your voice.
                </p>
            </div>

            <Button variant="ghost" type="button" onClick={onAddNote} className=" flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 active:scale-[0.98]">
                <span className="text-lg leading-none">+</span>

                New Note
            </Button>
        </header>
    );
};

export default Header;