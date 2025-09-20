import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const companyData = [
  {
    name: "TechNinja",
    rating: "5.0",
    tags: ["Great Communication", "Quick Delivery"],
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
  },
  {
    name: "TechNinja",
    rating: "5.0",
    tags: ["Great Communication", "Quick Delivery"],
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
  },
  {
    name: "TechNinja",
    rating: "5.0",
    tags: ["Great Communication", "Quick Delivery"],
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
  },
  {
    name: "TechNinja",
    rating: "5.0",
    tags: ["Great Communication", "Quick Delivery"],
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
  },
  {
    name: "TechNinja",
    rating: "5.0",
    tags: ["Great Communication", "Quick Delivery"],
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
  },
  {
    name: "TechNinja",
    rating: "5.0",
    tags: ["Great Communication", "Quick Delivery"],
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
  },
  {
    name: "TechNinja",
    rating: "5.0",
    tags: ["Great Communication", "Quick Delivery"],
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
  },
  {
    name: "TechNinja",
    rating: "5.0",
    tags: ["Great Communication", "Quick Delivery"],
    location: "Keszthely, Hungary",
    employees: "15-30 employees",
    avgProject: "Avg project $750",
    completedProjects: "24 completed projects",
  },
];

const filterTabs = [
  { name: "Project Management", active: true },
  { name: "Accounting", active: false },
  { name: "Human Resources", active: false },
  { name: "CRM", active: false },
  { name: "Construction Management", active: false },
];

export const MainContentSection = () => {
  return (
    <section className="relative w-full py-16">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Bg"
        src="/bg2.png"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="[font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-6xl text-center tracking-[-0.60px] leading-[64px] mb-6">
            Discover top-viewed software solutions
          </h1>

          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#19a6ff] text-base text-center tracking-[0] leading-[25px]">
              See all software solutions
            </span>
            <img className="w-6 h-6" alt="Arrow back" src="/arrow-back.svg" />
          </div>

          <nav className="flex items-center justify-center gap-2">
            {filterTabs.map((tab, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`h-8 px-4 py-2 rounded-[32px] ${
                  tab.active
                    ? "bg-[linear-gradient(90deg,rgba(229,156,255,0.36)_0%,rgba(186,156,255,0.36)_50%,rgba(156,178,255,0.36)_100%)]"
                    : "border border-solid border-[#ffffff4c]"
                } h-auto`}
              >
                <span
                  className={`[font-family:'Manrope',Helvetica] font-medium text-sm tracking-[0.14px] leading-5 ${
                    tab.active
                      ? "bg-[linear-gradient(90deg,rgba(229,156,255,1)_0%,rgba(186,156,255,1)_50%,rgba(156,178,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                      : "text-white"
                  }`}
                >
                  {tab.name}
                </span>
              </Button>
            ))}
          </nav>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1264px] mx-auto">
          {companyData.map((company, index) => (
            <Card
              key={index}
              className="w-[303px] h-[310px] bg-[#ffffff05] rounded-[20px] border-[none] backdrop-blur-[37.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(142deg,rgba(64,64,64,1)_15%,rgba(16,16,16,0)_63%,rgba(64,64,64,0.25)_98%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative"
            >
              <CardContent className="p-5 flex flex-col gap-6 h-full">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#d9d9d9] rounded-md flex items-center justify-center">
                          <span className="[font-family:'Suisse_Int'l-Bold',Helvetica] font-bold text-black text-xs text-center tracking-[0.12px] leading-[12.8px]">
                            LO
                            <br />
                            GO
                          </span>
                        </div>
                        <span className="[font-family:'Manrope',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[25px]">
                          {company.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <img
                          className="w-5 h-5"
                          alt="Star rate"
                          src="/star-rate.svg"
                        />
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#eaeaeab2] text-sm tracking-[0.14px] leading-[normal]">
                          {company.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5">
                      {company.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className="h-6 px-2 py-1 bg-[#c5f2d31a] rounded-md border-none"
                        >
                          <span className="[font-family:'Manrope',Helvetica] font-medium text-[#1dffbf] text-xs tracking-[-0.12px] leading-[18px]">
                            {tag}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5">
                      <img
                        className="w-4 h-4"
                        alt="Vuesax linear"
                        src="/vuesax-linear-location.svg"
                      />
                      <span className="[font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-[13px] tracking-[0] leading-[18px]">
                        {company.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <img
                        className="w-4 h-4"
                        alt="Vuesax linear"
                        src="/vuesax-linear-profile-2user.svg"
                      />
                      <span className="[font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-[13px] tracking-[0] leading-[18px]">
                        {company.employees}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <img
                        className="w-4 h-4"
                        alt="Vuesax linear dollar"
                        src="/vuesax-linear-dollar-square.svg"
                      />
                      <span className="[font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-[13px] tracking-[0] leading-[18px]">
                        {company.avgProject}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <img
                        className="w-4 h-4"
                        alt="Checkmark"
                        src="/checkmark.svg"
                      />
                      <span className="[font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-[13px] tracking-[0] leading-[18px]">
                        {company.completedProjects}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-[10px] bg-[linear-gradient(90deg,rgba(229,156,255,0.36)_0%,rgba(186,156,255,0.36)_50%,rgba(156,178,255,0.36)_100%)] h-auto"
                >
                  <span className="bg-[linear-gradient(90deg,rgba(229,156,255,1)_0%,rgba(186,156,255,1)_50%,rgba(156,178,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-medium text-transparent text-[13px] tracking-[0] leading-[normal]">
                    See more
                  </span>
                  <img
                    className="w-4 h-4"
                    alt="Vuesax linear export"
                    src="/vuesax-linear-export.svg"
                  />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};