import Image from "next/image";

const points = [
    {
        title: "Transparency and Accuracy",
        description: "Dolphin values transparency and accuracy in OOH advertising",
    },
    {
        title: "Geopath Partnership",
        description:
            "We have partnered with Geopath, an OOH audience measurement auditing pioneer",
    },
    {
        title: "Meticulous Auditing",
        description:
            "Geopath's rigorous auditing process boosts the credibility of our DOOH screens",
    },
    {
        title: "Validation through Analysis",
        description:
            "Geopath validates audience measurement data through rigorous analysis",
    },
    {
        title: "Confident Campaigns",
        description:
            "Advertisers can confidently plan, execute, and optimize campaigns with Geopath-audited data",
    },
    {
        title: "Trustworthy Information",
        description:
            "Rest assured that decisions are based on trustworthy information",
    },
];

export default function GeopathSection() {
    return (
        <section className="  px-4 py-16 bg-white">
            <div className="max-w-[1200px] w-full mx-auto sm:px-[200px]">
                <h2 className="text-[42px] text-black font-bold text-center mb-4">
                    Our Screens Are Geopath Audited
                </h2>
                <p className="text-center text-lg mb-12 text-black">
                    Our Commitment To Transparency
                </p>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-shrink-0">
                        <Image
                            src="/assets/geo-path.jpg"
                            alt="Geopath logo"
                            width={300}
                            height={300}
                            className="mx-auto"
                        />
                    </div>

                    <div className="space-y-4 text-gray-800">
                        {points.map(({ title, description }, index) => (
                            <p key={index}>
                                <span className="font-semibold">{title}:</span> {description}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
