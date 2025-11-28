import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/25 backdrop-blur-xs flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] max-w-md rounded-lg p-8 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-1 right-3 text-2xl">
          ×
        </button>

        <h2 className="text-2xl font-main font-semibold text-center mb-6">
          Hur vill du boka?
        </h2>

        <div className="flex flex-col gap-4">
          <a
            href="https://www.instagram.com/lialundberg/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-pink-500 text-white py-3 rounded-lg text-lg shadow hover:bg-pink-600 transition"
          >
            <FaInstagram size={24} />
            Boka via Instagram DM
          </a>

          <a
            href="https://www.facebook.com/forfattarinnaLialundberg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-blue-600 text-white py-3 rounded-lg text-lg shadow hover:bg-blue-700 transition"
          >
            <FaFacebook size={24} />
            Boka via Facebook DM
          </a>
        </div>
      </div>
    </div>
  );
}
