// components/Badge.jsx
const Badge = ({ text }) => {
  return (
    <div className="inline-block px-4 py-2 bg-primary border border-[#7d9d8c]/40 rounded-full">
      <span className="text-sm font-second text-white font-semibold uppercase tracking-wide">
        {text}
      </span>
    </div>
  );
};

export default Badge;
