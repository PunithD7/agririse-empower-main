import { useState, useCallback, useRef } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const langMap: Record<Language, string> = {
  en: "en-US",
  hi: "hi-IN",
  kn: "kn-IN",
};

export const useVoiceInput = (onResult: (text: string) => void) => {
  const [isListening, setIsListening] = useState(false);
  const { language } = useLanguage();
  const recognitionRef = useRef<any>(null);

  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = langMap[language];
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [language, onResult]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return { isListening, startListening, stopListening };
};

export const speak = (text: string, lang: Language) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langMap[lang];
  speechSynthesis.speak(utterance);
};
