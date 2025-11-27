const Webshop = () => {
  return (
    <div className="my-10 lg:my-20 w-full flex flex-col items-center">
      <h2 className="text-2xl lg:text-4xl pb-6 px-8 font-main font-semibold text-center">
        Välkommen till min lilla webbshop! <br /> - Här kan du köpa mina böcker
        -
      </h2>

      <div className="w-[90%] lg:flex flex-row gap-10 ">
        <iframe
          title="Webshop"
          src="https://widget.publit.com/webshop/2819?embedType=embed"
          scrolling="yes"
          className="w-full"
          style={{
            border: "none",
            overflow: "hidden",
            minHeight: "600px", // gives initial space, but not fixed
            height: "1000px",
          }}
        />
        <iframe
          title="Webshop"
          src="https://widget.publit.com/webshop/5249?embedType=embed"
          scrolling="no"
          className="w-full"
          style={{
            border: "none",
            overflow: "hidden",
            minHeight: "600px", // gives initial space, but not fixed
            height: "1000px",
          }}
        />
      </div>
    </div>
  );
};

export default Webshop;
