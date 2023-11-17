import { Link, useRouteError } from "react-router-dom";
import { MoveRight } from "lucide-react";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="grid justify-center">
      <h1 className="text-white font-bold text-center">Oops!</h1>
      <p className="text-white">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{err.statusText || err.message}</i>
      </p>
      <Link to="/">
        <button className="flex  p-2 border-r-4 bg-transparent border-[#03AFF3] rounded-md relative group hover:cursor-pointer hover:bg-[#03AFF3] hover:transition-all hover:ease-in-out hover:duration-[0.6s]">
          <MoveRight
            color="#ffffff"
            className="grid place-self-center w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          />
          <span className="text-white grid place-self-center z-10 relative">
            Home
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Error;
