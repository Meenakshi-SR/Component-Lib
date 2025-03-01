import "./Card.css";
import CardFooter from "./components/CardFooter";
import CardBody from "./components/CardBody";
import CardHeader from "./components/CardHeader";
import { ReactNode, type CSSProperties } from "react";

export type CardAppearanceVariants = "primary" | "stripped" | "clear";

export interface CardProps {
  /**Add a classname to the card */
  addClassName?: string;
  style?: CSSProperties;
  appearance?: CardAppearanceVariants;
  /**Add an icon to the header */
  icon?: ReactNode;
  /**Describes the purpose of the card */
  title: string;
  /**Refines the purpose of the card */
  subtitle: string;
  /**Render a loading indicator instead of content */
  isLoading?: boolean;
  /**The main content of the card */
  body: string;
  /**The footer content, generally with links to more information */
  footer: string;
}

export default function Card({
  addClassName = "",
  appearance = "primary",
  style = {},
  icon,
  title,
  subtitle,
  body,
  footer,
  isLoading = false,
}: CardProps) {
  const className = `w-72 border border-gray-300 rounded-lg shadow-md overflow-hidden font-sans ${addClassName} `;

  return (
    <div className={className} style={style}>
      <CardHeader
        icon={icon}
        title={title}
        subtitle={subtitle}
        appearance={appearance}
      />
      <CardBody body={body} isLoading={isLoading} />
      <CardFooter footer={footer} appearance={appearance} />
    </div>
  );
}
