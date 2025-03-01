import { ReactNode } from "react";
import LoadingIcon from "./LoadingIcon/LoadingIcon";

interface CardBodyProps {
  /**Render a loading indicator instead of content */
  isLoading: boolean;
  /**The main content of the card */
  body: ReactNode;
}

const CardBody = ({ body, isLoading }: CardBodyProps) => {
  return isLoading ? (
    <div className="flex justify-center align-middle">
      <LoadingIcon />
    </div>
  ) : (
    <div className="p-4 text-sm">{body}</div>
  );
};

export default CardBody;
