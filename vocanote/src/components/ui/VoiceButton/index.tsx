import useVoiceRecorder from "../../../core/hooks/useVoiceRecorder";
import useWhisper from "../../../core/hooks/useWhisper";
type VoiceButtonProps = {
    onText: (text: string) => void;
};

const VoiceButton = ({ onText, }: VoiceButtonProps) => {
    const {
        isRecording,
        startRecording,
        stopRecording,
    } = useVoiceRecorder();

    const { transcribe, isTranscribing, } = useWhisper();

    const handleClick = async () => {
        if (isTranscribing) {
            return;
        }

        if (!isRecording) {
            await startRecording();
            return;
        }

        const audio = await stopRecording();

        const text = await transcribe(audio);

        if (text) {
            onText(text);
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isTranscribing}
            className=" flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
            <span className={` h-3 w-3 rounded-full ${isRecording ? "animate-pulse bg-red-500" : "bg-neutral-400"}`} />
            {isTranscribing ? "Transcribing..." : isRecording ? "Stop recording" : "Start recording"}
        </button>
    );
};

export default VoiceButton;