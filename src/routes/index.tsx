import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { Reservation } from "@/components/site/Reservation";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { cafe, menu } from "@/data/cafe";

const title = "Brew & Bloom Café | Coffee, Food & Good Moments";
const description =
  "Discover Brew & Bloom Café — a cozy destination for handcrafted coffee, delicious food and memorable moments in Pune.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: cafe.name,
          description,
          telephone: cafe.phone,
          email: cafe.email,
          servesCuisine: ["Coffee", "Breakfast", "Desserts"],
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Bloom Street",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411001",
            addressCountry: "IN",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "22:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday", "Sunday"],
              opens: "08:00",
              closes: "23:00",
            },
          ],
          hasMenu: {
            "@type": "Menu",
            hasMenuSection: menu.map((c) => ({
              "@type": "MenuSection",
              name: c.title,
              hasMenuItem: c.items.map((i) => ({
                "@type": "MenuItem",
                name: i.name,
                description: i.description,
                offers: { "@type": "Offer", price: i.price, priceCurrency: "INR" },
              })),
            })),
          },
          sameAs: [cafe.instagram],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
