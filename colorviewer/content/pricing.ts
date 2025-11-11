export type Plan = {
  price: string;
  label: string;
  description: string;
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    price: "39,00",
    label: "Plano Standard",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    highlight: false,
  },
  {
    price: "59,00",
    label: "Plano Standard",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    highlight: true,
  },
  {
    price: "39,00",
    label: "Plano Standard",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    highlight: false,
  },
];


