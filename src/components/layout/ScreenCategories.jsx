import Image from "next/image";

const categories = [
  { title: "Convenience Stores", icon: "/assets/stores-1.svg" },
  { title: "Grocery Stores", icon: "/assets/stores-2.svg" },
  { title: "Point of Sale", icon: "/assets/stores-3.svg" },
  { title: "Pharmacies", icon: "/assets/stores-4.svg" },
  { title: "Casual Dining", icon: "/assets/stores-5.svg" },
  { title: "Hotels", icon: "/assets/stores-6.svg" },
  { title: "ATM Toppers", icon: "/assets/stores-7.svg" },
  { title: "Urban Panels", icon: "/assets/stores-8.svg" },
];

export default function ScreenCategories() {
  return (
    <section className=" mx-auto px-4 py-20 bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
      <h2 className="text-[42px] font-bold text-center text-black mb-3">
        Well-Categorised Screens
      </h2>
      <p className="text-center text-[18px] text-black mb-12">
        Wide Range of Venue Types
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
        {categories.map(({ title, icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 transition-transform"
          >
            <Image
              src={icon}
              alt={title}
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
              loading="lazy"
            />
            <span className="font-semibold text-black">{title}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
