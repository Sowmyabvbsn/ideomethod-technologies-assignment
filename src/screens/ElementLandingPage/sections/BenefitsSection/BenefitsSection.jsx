import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSection = () => {
  const benefitCards = [
    {
      id: "save-time",
      title: "Save time",
      description:
        "Skip weeks of research. Our platform aggregates real user reviews, pricing data, feature comparisons and key metrics to help you make informed decisions in a fraction of the time.",
      image: "/gradient-glass--17--1.png",
      isLarge: true,
    },
    {
      id: "save-money",
      title: "Save money",
      description:
        "Find cost-effective software solutions that match your scope and budget, including high-quality global options you may not have considered.",
      image: "/gradient-glass--20--1.png",
      isLarge: false,
    },
    {
      id: "save-effort",
      title: "Save effort",
      description:
        "We've done the hard work! Shortlist, compare and connect with partners that are ready to deliver exactly what you need.",
      image: "/gradient-glass--18--1.png",
      isLarge: false,
    },
  ];

  return (
    <section className="w-full relative">
      <div className="flex flex-col items-center gap-6 mb-[113px]">
        <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-6xl text-center tracking-[-0.60px] leading-[64px] whitespace-nowrap">
          A better way to...
        </h2>

        <p className="w-[732px] font-subtitle font-[number:var(--subtitle-font-weight)] text-[#efedfdb2] text-[length:var(--subtitle-font-size)] text-center tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] [font-style:var(--subtitle-font-style)]">
          Discover how GlobalITMarket gives you the tools to make informed
          software decisions with or without technical knowledge
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Large Save Time Card */}
        <Card className="w-full h-[278px] rounded-[30px] border-[none] bg-[linear-gradient(132deg,rgba(16,16,16,1)_14%,rgba(22,21,21,0.29)_51%,rgba(156,178,255,0.19)_84%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[30px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative overflow-hidden">
          <CardContent className="flex items-center justify-between h-full p-12">
            <div className="flex flex-col gap-5 max-w-[716px]">
              <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[40px] tracking-[-0.40px] leading-[64px]">
                {benefitCards[0].title}
              </h3>
              <p className="[font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-xl tracking-[0] leading-[30px]">
                {benefitCards[0].description}
              </p>
            </div>
            <img
              className="w-[296px] h-[236px] object-cover flex-shrink-0"
              alt="Gradient glass"
              src={benefitCards[0].image}
            />
          </CardContent>
        </Card>

        {/* Bottom Two Cards */}
        <div className="grid grid-cols-2 gap-6">
          {benefitCards.slice(1).map((card, index) => (
            <Card
              key={card.id}
              className="h-[459px] rounded-[30px] border-[none] bg-[linear-gradient(41deg,rgba(16,16,16,1)_14%,rgba(22,21,21,0.29)_58%,rgba(156,178,255,0.19)_84%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[30px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative"
            >
              <CardContent className="flex flex-col justify-between h-full p-12">
                <div className="flex flex-col gap-6">
                  <img
                    className={`object-cover ${index === 0 ? "w-28 h-[120px]" : "w-[120px] h-[120px]"}`}
                    alt="Gradient glass"
                    src={card.image}
                  />
                  <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[40px] tracking-[-0.40px] leading-[64px]">
                    {card.title}
                  </h3>
                </div>
                <p className="[font-family:'Manrope',Helvetica] font-normal text-[#efedfdb2] text-xl tracking-[0] leading-[30px]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};