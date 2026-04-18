export type ServiceItem = {
  title: string;
  description: string;
  img: string;
  imgPosition: string;
  href?: string;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
  position: string;
};

export type PriceItem = {
  name: string;
  price: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  label: string;
  items: PriceItem[];
};

export const services: ServiceItem[] = [
  {
    title: "Vippeextensions",
    description:
      "Få fyldige, vakre vipper skreddersydd etter dine ønsker. Vi tilbyr alt fra naturlig volumøkning til dramatisk effekt med langvarige resultater som fremhever blikket ditt.",
    img: "/img/lashes-by-linh-1.jpg",
    imgPosition: "center 30%",
    href: "/vippeextensions",
  },
  {
    title: "Farging av vipper",
    description:
      "Gi vippene dine dybde og intensitet med profesjonell vippefarging. Perfekt for deg som ønsker et definert blikk uten å bruke maskara hver dag.",
    img: "/img/lashes-by-linh-1.jpg",
    imgPosition: "center 20%",
  },
  {
    title: "Vippeløft",
    description:
      "Løft og krum dine naturlige vipper for en åpen, frisk effekt som varer i 6–8 uker. En elegant behandling som fremhever det du allerede har.",
    img: "/img/instagram/7.jpg",
    imgPosition: "center 36%",
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/img/instagram/1.jpg", alt: "Vippeextensions", position: "center center" },
  { src: "/img/instagram/2.jpg", alt: "Vippeløft", position: "center center" },
  { src: "/img/instagram/3.jpg", alt: "Klassisk sett", position: "center center" },
  { src: "/img/instagram/4.jpg", alt: "Volum vipper", position: "center center" },
  { src: "/img/instagram/5.jpg", alt: "Mix/wispy", position: "center center" },
  { src: "/img/instagram/6.jpg", alt: "Farging av vipper", position: "center center" },
];

export const priceCategories: PriceCategory[] = [
  {
    id: "vipperextensions-nytt-sett",
    title: "Vippeextensions nytt sett",
    label: "Vippeextensions by Linh",
    items: [
      { name: "Klassisk nytt sett", price: "799 kr" },
      { name: "Volum 2D–8D nytt sett", price: "999 kr" },
      { name: "Mix / wispy nytt sett", price: "999 kr" },
      { name: "Mega volum nytt sett", price: "1 299 kr" },
      { name: "Brune vipper", price: "+49 kr" },
    ],
  },
  {
    id: "pafyll-og-vedlikehold",
    title: "Påfyll & vedlikehold",
    label: "Påfyll by Linh",
    items: [
      { name: "Klassisk påfyll under 3 uker", price: "699 kr" },
      { name: "Mix / wispy påfyll under 3 uker", price: "799 kr" },
      { name: "Volum påfyll under 3 uker", price: "799 kr" },
      { name: "Mega volum under 2–3 uker", price: "1 199 kr" },
      { name: "Rask påfyll klassisk under 2 uker", price: "599 kr" },
      { name: "Rask påfyll volum / mix / wispy", price: "699 kr" },
      { name: "Ekstra gebyr fra andre steder", price: "+100 kr" },
    ],
  },
  {
    id: "vippeloft-og-tillegg",
    title: "Vippeløft & tillegg",
    label: "Vippeløft by Linh",
    items: [
      { name: "Vippeløft", price: "699 kr" },
      { name: "Vippeløft med farging", price: "799 kr" },
      { name: "Fjerning av vippeextensions", price: "199 kr" },
      { name: "Farging av vipper", price: "199 kr" },
    ],
  },
];
