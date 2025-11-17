import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" /> WhatsApp
    </a>
  );
}
