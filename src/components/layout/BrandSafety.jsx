const brandSafetyContent = [
  `At Dolphin, we hold a strong commitment to ensuring brand safety in advertising.`,
  `Through a meticulous **screen/location tagging** process, we offer advertisers a comprehensive brand safety solution. We ensure a **100% completion rate** and **Zero Ad-Fraud**.`,
  `Partnering with Dolphin means embracing **worry-free advertising**, where your brand's reputation is safeguarded as it shines on the captivating canvas of DOOH.`,
];

export default function BrandSafety() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Brand Safety: Our Advertiser Assurance
          </h2>
        </div>

        {/* Right Column */}
        <div className="text-gray-800 space-y-6">
          {brandSafetyContent.map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
        </div>
      </div>
    </section>
  );
}
