import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Trash2 } from "lucide-react";
import MessageBubble from "./MessageBubble";

const BOT_NAME = "ElectWise Bot";

const quickReplies = [
  "How to register?",
  "Who can vote?",
  "Required documents?",
  "What is EVM?",
  "Election timeline",
];

function getBotReply(text) {
  const t = text.toLowerCase();

  if (t.includes("register")) {
    return "You can register online on the voter portal.";
  }
  if (t.includes("vote") || t.includes("eligib")) {
    return "Anyone 18+ with valid ID can vote.";
  }
  if (t.includes("document")) {
    return "Use Aadhaar, PAN, DL or Passport.";
  }
  if (t.includes("evm")) {
    return "EVM is used to record votes electronically.";
  }
  if (t.includes("timeline")) {
    return "Announcement → Campaign → Voting → Results.";
  }

  return "Ask me about registration, voting, documents or election process.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("electwise_chat");
    return saved
      ? JSON.parse(saved)
      : [
          {
            from: "bot",
            text: "Hi! I’m ElectWise Bot 🤖. Ask me anything.",
          },
        ];
  });

  const [typing, setTyping] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("electwise_chat", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTyping(true);
    setTimeout(() => {
      const reply = getBotReply(text);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setTyping(false);
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  // ✅ CLEAR CHAT (actual delete)
  const clearChat = () => {
    localStorage.removeItem("electwise_chat");
    setMessages([
      {
        from: "bot",
        text: "Hi! I’m ElectWise Bot 🤖. Ask me anything.",
      },
    ]);
    setShowConfirm(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-linear-to-br from-indigo-500 to-pink-400 shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[320px] h-120 bg-linear-to-br from-indigo-300/10 via-purple-300/10 to-pink-300/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white">

          {/* Header */}
          <div className="px-4 py-3 border-b border-white/20 bg-white/10 flex items-center justify-between">
            <span className="font-semibold">{BOT_NAME}</span>

            <div className="flex items-center gap-3">
              
              {/* 🧹 Open popup instead of direct clear */}
              <button
                onClick={() => setShowConfirm(true)}
                className="p-1 hover:bg-white/10 rounded"
              >
                <Trash2 size={16} />
              </button>

              <button onClick={() => setOpen(false)}>
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
            {messages.map((m, i) => (
              <MessageBubble key={i} message={m} />
            ))}

            {typing && (
              <div className="text-sm opacity-70">typing...</div>
            )}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-3 flex flex-wrap gap-2">
            {quickReplies.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition hover:scale-105"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-white/20 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* 🔥 CONFIRMATION POPUP */}
      {showConfirm && (
        <div className="fixed inset-0 text-white z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm">

          <div className="bg-linear-to-br from-indigo-300/10 via-purple-300/10 to-pink-300/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-75 text-center shadow-2xl">

            <h2 className="text-lg font-semibold mb-2">
              Clear Chat?
            </h2>

            <p className="text-sm opacity-70 mb-5">
              This will delete all messages.
            </p>

            <div className="flex justify-center gap-4">

              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
              >
                Cancel
              </button>

              <button
                onClick={clearChat}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
              >
                Clear
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}