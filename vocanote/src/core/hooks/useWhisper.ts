import { useState } from "react";

import { transcribeAudio } from "../services/whisper/whisperService";

const useWhisper = () => {
  const [isTranscribing, setIsTranscribing] =
    useState(false);

  const [error, setError] = useState<string | null>(
    null
  );

  const transcribe = async (audio: Blob) => {
    try {
      setIsTranscribing(true);
      setError(null);

      const text = await transcribeAudio(audio);

      return text;
    } catch (error) {
      console.error(error);

      setError("Could not convert audio to text.");

      return "";
    } finally {
      setIsTranscribing(false);
    }
  };

  return {
    transcribe,
    isTranscribing,
    error,
  };
};

export default useWhisper;