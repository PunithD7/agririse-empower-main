import { useState, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVoiceInput, speak } from "@/hooks/useVoiceInput";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Mic, MicOff, Send, Volume2, Bot, User } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const mockResponses: Record<string, string> = {
  default:
    "👨‍🌾 Namaste Farmer!\n\nI am your AI farming assistant.\n\nI can help you with:\n\n🌾 Crop advice\n🐛 Disease identification\n🌧 Rainfall & irrigation tips\n🏦 Government schemes\n\nAsk me anything about farming!",

  yellow:
    "🌿 **Yellow leaves on tomatoes** can indicate:\n\n1️⃣ **Nitrogen deficiency** → Apply Urea 50kg/acre\n2️⃣ **Early blight disease** → Spray Mancozeb (2g/L)\n3️⃣ **Overwatering** → Reduce irrigation\n\n✅ **Tip:** If yellowing starts from bottom leaves it is usually nitrogen deficiency.\n\n📚 Source: ICAR Crop Disease Manual",

  scheme:
    "🏦 **Government Schemes for Farmers:**\n\n1️⃣ **PM-KISAN** → ₹6000/year support\n2️⃣ **Kisan Credit Card** → Low interest loans\n3️⃣ **MKSP (Women Farmers)** → Training & empowerment\n4️⃣ **National Sustainable Agriculture Mission**\n\n📍 Visit your nearest **Krishi Vigyan Kendra** to apply.",

  rainfall:
    "🌧 **Best crops for low rainfall areas (<500mm):**\n\n🌾 Millets (Ragi, Jowar)\n🌱 Pulses (Chickpea, Pigeon Pea)\n🥜 Groundnut\n🌻 Sesame\n\n💡 **Tip:** Use mulching to retain soil moisture.\n\n📚 Source: ICRISAT Dryland Agriculture Guide",
};

const getResponse = (q: string): string => {
  const lower = q.toLowerCase();

  if (lower.includes("yellow") || lower.includes("leaf") || lower.includes("tomato"))
    return mockResponses.yellow;

  if (lower.includes("scheme") || lower.includes("government") || lower.includes("women"))
    return mockResponses.scheme;

  if (lower.includes("rain") || lower.includes("drought") || lower.includes("water"))
    return mockResponses.rainfall;

  return mockResponses.default;
};

const AIAssistant = () => {
  const { t, language } = useLanguage();

  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: mockResponses.default },
  ]);

  const [input, setInput] = useState("");

  const handleSend = useCallback(
    (text?: string) => {
      const msg = text || input;

      if (!msg.trim()) return;

      const userMsg: Message = { role: "user", content: msg };
      const response = getResponse(msg);

      setMessages((prev) => [...prev, userMsg, { role: "assistant", content: response }]);
      setInput("");
    },
    [input]
  );

  const { isListening, startListening, stopListening } = useVoiceInput((text) => {
    setInput(text);
    handleSend(text);
  });

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6 bg-gradient-to-b from-green-50 to-yellow-50 rounded-xl">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-lime-500 text-white p-6 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
          🌾 AI Farmer Assistant
        </h1>

        <p className="opacity-90 mt-1">
          Ask about crops, diseases, weather, and government schemes
        </p>
      </motion.div>

      {/* CHAT CARD */}
      <Card className="h-[500px] flex flex-col shadow-lg border-green-200">

        <CardHeader className="pb-2 border-b bg-green-100">
          <CardTitle className="flex items-center gap-2 text-green-800 text-base font-semibold">
            <MessageCircle className="h-4 w-4" />
            Farmer Conversation
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">

          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
              >

                {/* BOT ICON */}
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-green-700" />
                  </div>
                )}

                {/* MESSAGE */}
                <div
                  className={`max-w-[80%] rounded-xl p-3 text-sm whitespace-pre-line shadow ${
                    msg.role === "user"
                      ? "bg-green-600 text-white"
                      : "bg-yellow-50 border border-green-200"
                  }`}
                >
                  {msg.content}
                </div>

                {/* USER ICON */}
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center shrink-0">
                    <User className="h-4 w-4 text-yellow-700" />
                  </div>
                )}

              </motion.div>
            ))}
          </AnimatePresence>

        </CardContent>

        {/* INPUT AREA */}
        <div className="p-4 border-t flex gap-2 bg-white">

          {/* MIC BUTTON */}
          <Button
            size="icon"
            onClick={isListening ? stopListening : startListening}
            className={
              isListening
                ? "bg-red-500 text-white animate-pulse"
                : "bg-green-600 text-white hover:bg-green-700"
            }
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>

          {/* INPUT */}
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("voice.speak") + "..."}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          {/* SEND */}
          <Button
            onClick={() => handleSend()}
            size="icon"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>

          {/* SPEAK RESPONSE */}
          {messages.length > 1 && (
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                speak(messages[messages.length - 1].content.replace(/[*#📚]/g, ""), language)
              }
            >
              <Volume2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </Card>

      {/* QUICK QUESTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

        {[
          "My tomato leaves are yellow",
          "Which government scheme supports women farmers?",
          "What crop is best for low rainfall?",
        ].map((q) => (
          <Button
            key={q}
            onClick={() => handleSend(q)}
            className="bg-green-100 hover:bg-green-200 border border-green-300 text-green-900 font-medium h-auto py-3"
          >
            🌾 {q}
          </Button>
        ))}

      </div>
    </div>
  );
};

export default AIAssistant;