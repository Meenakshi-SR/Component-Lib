import { ReactNode } from "react";
import { type CardAppearanceVariants } from "../Card";

const cardAppearanceVariants = {
  primary: "border-t border-gray-300",
  stripped: "border-t border-gray-300 bg-gray-100",
  clear: "",
};

interface CardFooterProps {
  /**The footer content, generally with links to more information */
  footer: ReactNode;
  appearance: CardAppearanceVariants;
}

const CardFooter = ({ footer, appearance }: CardFooterProps) => {
  const className = `p-3 ${cardAppearanceVariants[appearance]} text-right`;
  return <>{footer && <div className={className}>{footer}</div>}</>;
};

export default CardFooter;
