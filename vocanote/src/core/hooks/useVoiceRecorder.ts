import { useRef, useState } from "react";

const useVoiceRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });

        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunksRef.current.push(event.data);
            }
        };

        mediaRecorder.start();

        setIsRecording(true);
    };

    const stopRecording = (): Promise<Blob> => {
        return new Promise((resolve) => {
            const mediaRecorder = mediaRecorderRef.current;

            if (!mediaRecorder) {
                return;
            }

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(
                    audioChunksRef.current,
                    {
                        type: "audio/webm",
                    }
                );

                mediaRecorder.stream
                    .getTracks()
                    .forEach((track) => track.stop());

                setIsRecording(false);

                resolve(audioBlob);
            };

            mediaRecorder.stop();
        });
    };

    return { isRecording, startRecording, stopRecording, };
};

export default useVoiceRecorder;