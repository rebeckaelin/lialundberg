const Card = ({
  image,
  title,
  description,
  time,
  extraContent,
  minHeight,
  isExpanded,
  onToggle,
  toggleVisible,
  minwidth,
}) => {
  return (
    <div
      className={`bg-fourth font-second border shadow-2xl text-white w-auto min-w-[200px] max-w-[350px] grid grid-rows-[auto_auto_1fr_auto_auto] mt-20 mb-5 rounded-lg`}
      style={{ minHeight: minHeight || "480px", minWidth: minwidth || "300px" }}
    >
      {/* Image */}
      {image && (
        <div className="relative w-[150px] h-[150px] -mt-24 justify-self-center">
          <div className="w-full h-full rounded-full bg-white p-2 box-content">
            <img
              src={image}
              alt={title}
              className="h-full object-contain rounded-full"
            />
          </div>
        </div>
      )}

      {/* Title */}
      {title && (
        <div className="flex justify-center items-center pt-8">
          <h3 className="relative text-black inline-block font-main uppercase text-2xl text-wrap text-center px-2 text-[#2e4c3a] custom-underline">
            {title}
          </h3>
        </div>
      )}
      {time && (
        <div className="flex justify-center mt-4 text-black">{time}</div>
      )}

      {/* Description */}
      {description && (
        <div className="flex flex-col px-4 text-center pt-6">
          <p className="text-sm text-black transition-all duration-300">
            {description}
          </p>

          {toggleVisible && (
            <button
              onClick={onToggle}
              className="text-xs text-[#2e4c3a] underline underline-offset-4 mt-3 self-center"
            >
              {isExpanded ? "Visa mindre" : "Visa mer"}
            </button>
          )}
        </div>
      )}

      {/* Extra content always rendered */}
      {extraContent && (
        <div className="flex justify-center pb-8">{extraContent}</div>
      )}
    </div>
  );
};

export default Card;
