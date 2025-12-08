const UpdatePosts = ({ postDate, title, description }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white font-second  rounded-lg p-6 shadow-lg flex flex-col h-full ">
      {/* Date badge */}
      <div className="inline-flex items-center justify-center text-primary w-fit px-4 py-2 bg-primary/10 rounded-full mb-4">
        <span className="text-sm font-semibold">{formatDate(postDate)}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-main font-semibold  mb-3">{title}</h3>

      {/* Description */}
      <p className="leading-relaxed ">{description}</p>
    </div>
  );
};

export default UpdatePosts;
