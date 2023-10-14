export const Icon = ({ ...props }) => {
  return (
    <span
      className="flex gap-4 text-zinc-400 cursor-pointer hover:text-zinc-100 transition-colors font-semibold text-base  "
      {...props}
    ></span>
  );
};
