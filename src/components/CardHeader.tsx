import { ReactNode } from "react";
import { type CardAppearanceVariants } from "../Card";

const cardAppearanceVariants = {
  primary: "border-b border-gray-300",
  stripped: "border-b border-gray-300 bg-gray-100",
  clear: "",
};

interface CardHeaderProps {
  /**Add an icon to the header */
  icon?: ReactNode;
  /**Describes the purpose of the card */
  title: ReactNode;
  /**Refines the purpose of the card */
  subtitle: ReactNode;
  appearance: CardAppearanceVariants;
}

const CardHeader = ({ icon, title, subtitle, appearance }: CardHeaderProps) => {
  const className = `flex items-center gap-3 p-4 ${cardAppearanceVariants[appearance]}`;
  return (
    <div className={className}>
      {icon && <span className="text-xl">{icon}</span>}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">{title}</h3>
        {subtitle && <span className="text-xs text-gray-600">{subtitle}</span>}
      </div>
    </div>
  );
};

export default CardHeader;
