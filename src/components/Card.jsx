const Card = ({
  image,
  title,
  description,
  time,
  extraContent,
  isExpanded,
  onToggle,
  toggleVisible,
  minwidth,
}) => {
  return (
    <>
      <div
        className={`text-white font-second shadow-2xl text-white w-auto min-w-[200px] max-w-[350px] mt-20 mb-5 rounded-lg`}
        style={{
          minWidth: minwidth || "300px",
        }}
      >
        {/* Image */}
        {image && (
          <div className="relative w-[150px] h-[150px] -mt-24 justify-self-center">
            <div className="w-full h-full rounded-full bg-white p-2 border-1 shadow-lg border-[#6a8576] box-content justify-self-center">
              <img
                src={image}
                alt={title}
                className="h-full object-contain rounded-full "
              />
            </div>
          </div>
        )}
        {/* Title */}
        {title && (
          <div className="flex justify-center items-center pt-8 px-4">
            <h3 className="relative text-[#2c3e50] text-black font-main text-2xl text-center">
              {title}
              <div className="w-30 h-0.5 bg-primary mx-auto mt-2"></div>
            </h3>
          </div>
        )}
        {time && (
          <div className="flex justify-center mt-4">
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-md leading-relaxed font-semibold rounded-full">
              {time}
            </span>
          </div>
        )}

        {/* Description */}
        {description && (
          <div className="flex flex-col px-4 text-center pt-6">
            <p
              className={`text-base text-black transition-all duration-300 ${
                !isExpanded ? "line-clamp-3" : ""
              }`}
            >
              {description}
            </p>

            {toggleVisible && (
              <button
                onClick={onToggle}
                className="text-base text-[#2e4c3a] underline underline-offset-4 mt-3 self-center"
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
    </>
  );
};

export default Card;
