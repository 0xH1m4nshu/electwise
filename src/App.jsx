import AppRoutes from "./routes/AppRoutes";
import Chatbot from "./components/ChatBot/Chatbot";

export default function App() {
  return (
    <>
      <AppRoutes />
      <Chatbot /> {/* 👈 floating chatbot here */}
    </>
  );
}