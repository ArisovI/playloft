import { Images, Icons } from "../assets";

export interface IStyle {
  icon: string;
  info: string;
}

export interface ICard {
  item: {
    title: string;
    text: string;
    price: string;
    img: string;
    styles: IStyle[];
  };
}

export const recommendationDate = [
  {
    title: "Стильный лофт и крыша на дизайн-заводе Flacon №2316",
    text: "Арт-пространство на дизайн-заводе - светлый лофт для проведения фотосъемок, видеосъемок, мероприятий",
    price: "от 1 400 до 10 000 ₽ / час",
    img: Images.recommendation1,
    styles: [
      {
        icon: Icons.style1,
        info: "1000 м²",
      },
      {
        icon: Icons.style2,
        info: "40",
      },
      {
        icon: Icons.style3,
        info: "Да",
      },
      {
        icon: Icons.style4,
        info: "Да",
      },
    ],
  },
  {
    title: "Стильный лофт и крыша на дизайн-заводе Flacon №2316",
    text: "Арт-пространство на дизайн-заводе - светлый лофт для проведения фотосъемок, видеосъемок, мероприятий",
    price: "от 2 500 до 4 000 ₽ / час",
    img: Images.recommendation2,
    styles: [
      {
        icon: Icons.style1,
        info: "1000 м²",
      },
      {
        icon: Icons.style2,
        info: "40",
      },
      {
        icon: Icons.style3,
        info: "Да",
      },
      {
        icon: Icons.style4,
        info: "Да",
      },
    ],
  },
  {
    title: "Стильный лофт и крыша на дизайн-заводе Flacon №2316",
    text: "Арт-пространство на дизайн-заводе - светлый лофт для проведения фотосъемок, видеосъемок, мероприятий",
    price: "от 4 000 до 9 000 ₽ / час",
    img: Images.recommendation3,
    styles: [
      {
        icon: Icons.style1,
        info: "1000 м²",
      },
      {
        icon: Icons.style2,
        info: "40",
      },
      {
        icon: Icons.style3,
        info: "Да",
      },
      {
        icon: Icons.style4,
        info: "Да",
      },
    ],
  },
  {
    title: "Стильный лофт и крыша на дизайн-заводе Flacon №2316",
    text: "Арт-пространство на дизайн-заводе - светлый лофт для проведения фотосъемок, видеосъемок, мероприятий",
    price: "от 1 000 до 5 000 ₽ / час",
    img: Images.recommendation4,
    styles: [
      {
        icon: Icons.style1,
        info: "1000 м²",
      },
      {
        icon: Icons.style2,
        info: "40",
      },
      {
        icon: Icons.style3,
        info: "Да",
      },
      {
        icon: Icons.style4,
        info: "Да",
      },
    ],
  },
  {
    title: "Стильный лофт и крыша на дизайн-заводе Flacon №2316",
    text: "Арт-пространство на дизайн-заводе - светлый лофт для проведения фотосъемок, видеосъемок, мероприятий",
    price: "от 1 000 до 5 000 ₽ / час",
    img: Images.recommendation4,
    styles: [
      {
        icon: Icons.style1,
        info: "1000 м²",
      },
      {
        icon: Icons.style2,
        info: "40",
      },
      {
        icon: Icons.style3,
        info: "Да",
      },
      {
        icon: Icons.style4,
        info: "Да",
      },
    ],
  },
];
