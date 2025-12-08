import DividerLine from "../components/DividerLine.jsx";

const Webshop = () => {
  return (
    <div className=" w-full text-black/80 flex flex-col items-center font-second bg-primary/40 leading-relaxed pb-10">
      {/* <DividerLine /> */}
      <h2 className="text-2xl lg:text-4xl text-black px-8 pt-4 font-semibold text-center mt-10">
        Välkommen till min webbshop
      </h2>
      <h3 className="text-lg pb-4">Här kan du köpa mina böcker</h3>
      <p className="text-base italic text-center pb-10">
        *obs, notera att det för närvarande är två separata webbshopar för mina
        böcker*
      </p>

      <div className="w-[90%] flex flex-col lg:flex-row gap-10 ">
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
          scrolling="yes"
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
