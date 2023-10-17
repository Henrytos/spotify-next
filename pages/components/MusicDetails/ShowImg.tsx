export default function ShowImg({
  url,
  isOpen,
  setIsOpen,
}: {
  url?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div onClick={() => setIsOpen(false)}>
      <div
        className={`absolute w-full h-[100vh] ${
          isOpen ? "bg-black/40 " : "bg-transparent invisible"
        } -translate-x-[99.4%] -translate-y-4 flex justify-center items-center 
       `}
      >
        <div
          className={`w-[40%] max-w-sm flex flex-col items-center
        ${isOpen ? "scale-100" : "scale-0"}
            
          transition-transform
        `}
        >
          <img src={url} alt="image toast" className="w-full" />
          <span className="text-xl font-bold cursor-pointer hover:text-zinc-500 transition-colors">
            Close
          </span>
        </div>
      </div>
    </div>
  );
}
