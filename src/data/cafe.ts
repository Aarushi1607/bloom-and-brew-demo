import coffeeImg from "@/assets/coffee.jpg";
import teaImg from "@/assets/tea.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import dessertImg from "@/assets/dessert.jpg";
import pancakesImg from "@/assets/pancakes.jpg";
import interiorImg from "@/assets/interior2.jpg";
import peopleImg from "@/assets/people.jpg";
import baristaImg from "@/assets/barista.jpg";

/** Replace these values to re-brand the site for another café. */
export const cafe = {
  name: "Brew & Bloom",
  tagline: "Good Coffee. Good Food. Good Moments.",
  address: "123 Bloom Street, Pune, Maharashtra 411001",
  shortAddress: "Bloom Street, Pune",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappNumber: "919999999999",
  whatsapp:
    "https://wa.me/919999999999?text=Hi%20Brew%20%26%20Bloom%2C%20I%27d%20like%20to%20book%20a%20table.",
  email: "hello@brewandbloom.in",
  instagram: "https://instagram.com/brewandbloom",
  maps: "https://www.google.com/maps/search/?api=1&query=123+Bloom+Street+Pune+Maharashtra",
  mapEmbed: "https://www.google.com/maps?q=Bloom%20Street%20Pune%20Maharashtra&output=embed",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
    { days: "Saturday – Sunday", time: "8:00 AM – 11:00 PM" },
  ],
};

export type MenuItem = {
  name: string;
  description: string;
  price: number;
};

export type MenuCategory = {
  id: string;
  title: string;
  note: string;
  image: string;
  imageAlt: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "coffee",
    title: "Coffee",
    note: "Single-origin Chikmagalur beans, roasted every Tuesday.",
    image: coffeeImg,
    imageAlt: "Cappuccino with heart latte art in a blush pink cup",
    items: [
      { name: "Espresso", description: "Double shot, thick crema, chocolate finish.", price: 120 },
      {
        name: "Cappuccino",
        description: "Velvet microfoam over a balanced house blend.",
        price: 160,
      },
      { name: "Café Latte", description: "Slow-steamed milk, soft and rounded.", price: 170 },
      { name: "Mocha", description: "Dark 62% couverture stirred into espresso.", price: 190 },
      { name: "Cold Coffee", description: "Overnight brew, blended cold with milk.", price: 180 },
    ],
  },
  {
    id: "tea",
    title: "Tea",
    note: "Whole-leaf, brewed to order — never from a pot.",
    image: teaImg,
    imageAlt: "Glass cup of masala chai with cinnamon and star anise",
    items: [
      {
        name: "Masala Chai",
        description: "Assam leaf, ginger, green cardamom, fresh milk.",
        price: 100,
      },
      { name: "Green Tea", description: "Darjeeling first flush, light and grassy.", price: 120 },
      { name: "Iced Tea", description: "Peach and lemongrass over crushed ice.", price: 150 },
      {
        name: "Lemon Ice Tea",
        description: "Freshly brewed black tea, zesty lemon and a touch of honey.",
        price: 150,
      },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast & Bites",
    note: "Served all day, because mornings are a mood.",
    image: breakfastImg,
    imageAlt: "Avocado toast on sourdough with microgreens and chilli",
    items: [
      {
        name: "Avocado Toast",
        description: "Sourdough, smashed avocado, chilli, microgreens.",
        price: 220,
      },
      {
        name: "Classic Pancakes",
        description: "Three buttermilk stacks, berries, honey butter.",
        price: 240,
      },
      {
        name: "Grilled Sandwich",
        description: "Cheddar, roast veg and pesto on country bread.",
        price: 210,
      },
      {
        name: "Garlic Cheese Toast",
        description: "Confit garlic butter, mozzarella, herbs.",
        price: 180,
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    note: "Baked in-house each morning. They do sell out.",
    image: dessertImg,
    imageAlt: "Slice of New York cheesecake with berry compote",
    items: [
      {
        name: "Chocolate Brownie",
        description: "Fudgy centre, sea salt, warm on request.",
        price: 180,
      },
      {
        name: "New York Cheesecake",
        description: "Slow-baked, seasonal berry compote.",
        price: 220,
      },
      { name: "Tiramisu", description: "Espresso-soaked savoiardi, mascarpone cream.", price: 240 },
    ],
  },
];

export const gallery = [
  {
    src: interiorImg,
    alt: "Sunlit café corner with rattan chairs and hanging plants",
    span: "tall",
  },
  { src: coffeeImg, alt: "Overhead shot of a cappuccino on cream linen", span: "normal" },
  { src: pancakesImg, alt: "Stack of buttermilk pancakes with berries and honey", span: "normal" },
  { src: peopleImg, alt: "Two friends laughing over coffee at Brew & Bloom", span: "tall" },
  { src: baristaImg, alt: "Barista pouring steamed milk into an espresso", span: "wide" },
  { src: dessertImg, alt: "Cheesecake slice with berry compote on a blush plate", span: "normal" },
  { src: breakfastImg, alt: "Avocado toast close-up on a cream plate", span: "normal" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit us", href: "#contact" },
];
