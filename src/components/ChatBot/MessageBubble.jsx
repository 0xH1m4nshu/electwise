export default function MessageBubble({ message }) {
  const isUser = message.from === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} w-full`}
    >
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-md transition ${
          isUser
            ? "bg-linear-to-r from-indigo-500 to-pink-500 text-white rounded-br-none"
            : "bg-white/10 backdrop-blur-md text-gray-200 rounded-bl-none border border-white/10"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}