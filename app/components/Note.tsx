import clsx from "clsx";

type NoteProps = {
  color?: "blue" | "red" | "green" | "yellow";
  children: React.ReactNode;
  className?: string;
};

const colorMap = {
  blue: {
    border: "border-blue",
    bg: "bg-blue/20",
    text: "text-blue",
  },
  red: {
    border: "border-red",
    bg: "bg-red/20",
    text: "text-red",
  },
  green: {
    border: "border-green",
    bg: "bg-green/20",
    text: "text-green",
  },
  yellow: {
    border: "border-yellow",
    bg: "bg-yellow/20",
    text: "text-yellow",
  },
};

export default function Note({
  color = "blue",
  children,
  className,
}: NoteProps) {
  return (
    <div
      className={clsx(
        `my-8 rounded-md border-l-4 p-4`,
        colorMap[color].border,
        colorMap[color].bg,
        colorMap[color].text,
        className,
      )}
    >
      <p>{children}</p>
    </div>
  );
}
