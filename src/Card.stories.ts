import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Card Title",
    subtitle: "Card Subtitle",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    footer: "Footer content",
  },
};

export const WithIcon = {
  args: {
    icon: "📌",
  },
};

export const StrippedAppearance = {
  args: {
    appearance: "stripped",
  },
};

export const ClearAppearance = {
  args: {
    appearance: "clear",
  },
};

export const LoadingState = {
  args: {
    isLoading: true,
  },
};
