import { Link } from "react-router-dom";

export default function Button({ text, textcolor, bgcolor, icon, src }) {
  return (
    <Link to={src}>
      <button
        className="flex flex-row items-center gap-2 rounded-md p-2 px-4 md:py-2 md:px-7 transition duration-300 ease-in-out transform hover:opacity-75 hover:scale-105"
        style={{
          backgroundColor: bgcolor,
          color: textcolor,
        }}
      >
        {text}
        {icon}
      </button>
    </Link>
  );
}
