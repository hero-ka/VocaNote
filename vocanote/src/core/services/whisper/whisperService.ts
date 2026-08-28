import {
    pipeline,
    type AutomaticSpeechRecognitionPipeline,
} from "@huggingface/transformers";

let transcriber: AutomaticSpeechRecognitionPipeline | null =
    null;

const getTranscriber = async () => {
    if (transcriber) {
        return transcriber;
    }
    //search in git hub
    transcriber = await pipeline(
        "automatic-speech-recognition",
        "onnx-community/whisper-tiny",
        {
            device: "wasm",
            dtype: "fp32",
        }
    );

    return transcriber;
};

export const transcribeAudio = async (
    audio: Blob
): Promise<string> => {
    const transcriber = await getTranscriber();

    const audioUrl = URL.createObjectURL(audio);

    try {
        const result = await transcriber(audioUrl, {
            language: "persian",
            task: "transcribe",
        });

        return result.text.trim();
    } finally {
        URL.revokeObjectURL(audioUrl);
    }
};