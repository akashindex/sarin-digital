import Image from "next/image";

const adTechPoints = [
  {
    text: (
      <>
        We have a <strong>powerful home-grown CMS</strong> to help manage the
        advertisements and screens.
      </>
    ),
  },
  {
    text: (
      <>
        Our <strong>cloud-scale technology</strong> enables us to handle{" "}
        <strong>billions of ad impressions</strong>, and{" "}
        <strong>terabytes of data</strong>. We are managing a{" "}
        <strong>24x7 high-availability</strong> technology.
      </>
    ),
  },
  {
    text: <>We have an Infra which you can trust.</>,
  },
];

export default function AdTechSection() {
  return (
    <section className="bg-white">
        <div className="max-w-[1200px] w-full mx-auto sm:px-[200px]">
      <h2 className="text-4xl font-bold text-center mb-2 text-black">
        We Are Invested in Ad-Tech
      </h2>
      <p className="text-center text-lg text-gray-600 mb-16">
        Billions of Impressions & Terabytes Of Data
      </p>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image-tech.jpg"
            alt="AdTech Graphic"
            width={400}
            height={400}
            className="object-cover bg-white border-rounnded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 text-gray-800 text-lg">
          {adTechPoints.map((point, index) => (
            <p key={index}>{point.text}</p>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
