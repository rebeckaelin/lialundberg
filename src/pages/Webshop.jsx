import DividerLine from "../components/DividerLine.jsx";

const Webshop = () => {
  return (
    <div className=" w-full text-black/80 flex flex-col items-center font-second bg-primary/40 leading-relaxed pb-10">
      <h2 className="text-2xl lg:text-4xl text-black px-8 pt-4 font-semibold text-center mt-10">
        Välkommen till min webbshop
      </h2>
      <h3 className="text-lg pb-4">Här kan du köpa mina böcker</h3>
      <iframe
        title="Webshop"
        src="https://widget.publit.com/webshop/5249?embedType=embed"
        className="w-full"
        style={{
          border: "none",
          overflow: "hidden",
          minHeight: "600px",
          height: "1000px",
        }}
      />
    </div>
  );
};

export default Webshop;
