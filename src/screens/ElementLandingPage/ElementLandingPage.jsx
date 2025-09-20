import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { BenefitsSection } from "./sections/BenefitsSection/BenefitsSection";
import { FeaturedSolutionsSection } from "./sections/FeaturedSolutionsSection/FeaturedSolutionsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { InquirySection } from "./sections/InquirySection/InquirySection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { SolutionsOverviewSection } from "./sections/SolutionsOverviewSection/SolutionsOverviewSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";

const features = [
  "Side-by-side comparison tools",
  "Visualised insights",
  "Downloadable comparison lists",
  "Live-consultation calls",
];

const featureCards = [
  {
    icon: "/frame-4275.svg",
    title: "In-depth Comparison Tools",
    description:
      "Narrow down your options. Compare and evaluate features, pricing and ratings.",
    badge: "Coming Soon",
    position: "left-[215px] top-[1609px]",
  },
  {
    icon: "/frame-4275-1.svg",
    title: "One-one-one Consultation",
    description:
      "Speak to one of our experts and let them help you make the right decision",
    badge: "Book a free consultation call",
    hasArrow: true,
    position: "left-[1293px] top-[1860px]",
  },
];

export const ElementLandingPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#000002] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[6645px] left-[412px] w-[1097px] h-[847px]">
        <div className="absolute top-0 left-[calc(50.00%_-_402px)] w-[804px] h-[804px]">
          <img
            className="absolute h-[calc(100%_-_129px)] top-16 left-[calc(50.00%_-_338px)] w-[675px]"
            alt="Q png"
            src="/q-62492b69-png.png"
          />
          <div className="absolute top-[105px] left-[calc(50.00%_-_297px)] w-[595px] h-[595px] rounded-[392px] rotate-[152.04deg] [background:conic-gradient(from_226deg_at_44%_47%,rgba(25,213,255,0)_4%,rgba(37,117,238,0.4)_99%)]" />
        </div>
        <div className="absolute top-[402px] left-[calc(50.00%_-_548px)] w-[1097px] h-[445px] blur-[15.6px] backdrop-blur-[26.2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(26.2px)_brightness(100%)] bg-[linear-gradient(184deg,rgba(3,0,20,0)_0%,rgba(0,0,2,1)_85%)]" />
      </div>

      {/* <img
        className="absolute top-[4940px] left-[calc(50.00%_-_960px)] w-[1920px] h-[925px]"
        alt="Background image"
        src="/background-image.png"
      /> */}

      <img
        className="absolute top-[7097px] left-[calc(50.00%_-_960px)] w-[1920px] h-[2030px]"
        alt="Image"
        src="/image.png"
      />

      <div className="absolute top-[1859px] left-[-7px] w-[1927px] h-[1356px]">
        <img
          className="absolute top-[232px] left-[calc(50.00%_-_956px)] w-[1920px] h-[1124px]"
          alt="Creating project"
          src="/creating-project-background-png.png"
        />
        <div className="absolute top-px left-[7px] w-[1920px] h-[1356px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,0.25)_6%,rgba(0,0,2,0.75)_100%)]" />
      </div>

      <div className="absolute top-[1218px] left-[calc(50.00%_-_930px)] w-[1848px] h-[960px]">
        <img
          className="absolute top-0 left-[calc(50.00%_-_924px)] w-[1848px] h-[947px]"
          alt="Image"
          src="/image-4.png"
        />
        <div className="absolute top-px left-[calc(50.00%_-_924px)] w-[1848px] h-[960px] rounded-[400px_400px_200px_200px] [background:radial-gradient(50%_50%_at_51%_31%,rgba(255,255,255,0)_6%,rgba(86,86,86,1)_37%,rgba(0,0,2,1)_78%)]" />
      </div>

      <img
        className="absolute top-0 left-0 w-[1920px] h-[845px]"
        alt="Group"
        src="/group-38622.png"
      />

      <img
        className="absolute top-[1273px] left-[calc(50.00%_-_500px)] w-[1000px] h-[78px]"
        alt="Frame"
        src="/frame-47278.svg"
      />
      

      <img
        className="absolute top-[5139px] left-[936px] w-[984px] h-[2013px]"
        alt="Group"
        src="/group-38620.png"
      />

      {/* Navigation Bar Section */}
      <NavigationBarSection />

      {/* Hero Section */}
      <HeroSection />

      {/* Solutions Overview Section */}
      <div className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SolutionsOverviewSection />
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Features list */}
          <div className="flex items-center justify-center gap-7 mb-16 flex-wrap">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 flex-[0_0_auto]"
              >
                <CheckIcon className="w-5 h-5 text-green-500" />
                <div className="w-fit font-medium text-[#d6d6d6] text-base leading-[25px] whitespace-nowrap">
                  {feature}
                </div>
              </div>
            ))}
          </div>

          {/* Main comparison tool card */}
          <div className="relative flex justify-center mb-16">
            <Card className="flex flex-col w-[1080px] h-[717px] items-center justify-around px-8 py-6 bg-[#eaeaea14] rounded-[28px] border-none backdrop-blur-[32.5px]">
              <CardContent className="relative w-[984px] h-[621px] rounded-[20px] bg-[url(/frame-38613.png)] bg-cover bg-center p-0" />
            </Card>

            {/* Floating feature cards */}
            <div className="absolute top-56 -translate-y-1/2 -left-36">
              <Card className="flex flex-col w-[320px] items-center justify-center gap-6 px-6 py-8 bg-[#ffffff0d] rounded-3xl border-none shadow-[0px_4px_24px_#00000040] backdrop-blur-[50px]">
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <img
                    className="w-[65px] h-[65px]"
                    alt="Frame"
                    src={featureCards[0].icon}
                  />
                  <div className="flex flex-col items-center gap-4 w-full">
                    <div className="font-bold text-white text-xl text-center">
                      {featureCards[0].title}
                    </div>
                    <div className="text-[#d6d6d6] text-center text-[15px] leading-[22px]">
                      {featureCards[0].description}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#19a6ff] text-base">
                      {featureCards[0].badge}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right floating card */}
            <div className="absolute top-[45%] -right-36">
              <Card className="flex flex-col w-[320px] items-center justify-center gap-6 px-6 py-8 bg-[#ffffff0d] rounded-3xl border-none shadow-[0px_4px_24px_#00000040] backdrop-blur-[50px]">
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <img
                    className="w-[65px] h-[65px]"
                    alt="Frame"
                    src={featureCards[1].icon}
                  />
                  <div className="flex flex-col items-center gap-4 w-full">
                    <div className="font-bold text-white text-xl text-center">
                      {featureCards[1].title}
                    </div>
                    <div className="text-[#d6d6d6] text-center text-[12px] leading-[18px]">
                      {featureCards[1].description}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#19a6ff] text-base">
                      {featureCards[1].badge}
                    </div>
                    {featureCards[1].hasArrow && (
                      <ArrowRightIcon className="w-6 h-6 text-[#19a6ff]" />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <MainContentSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Featured Solutions Section */}
      <FeaturedSolutionsSection />
      

      {/* Inquiry Section */}
      <InquirySection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};