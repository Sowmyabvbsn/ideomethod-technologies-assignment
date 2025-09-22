import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { ElementAboutUs } from "./ElementAboutUs"; // ✅ Your component

export const NavigationBarSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  const leftNavItems = [
    { label: "Services", id: "services" },
    { label: "FAQs", id: "faqs" },
    { label: "Who we are", id: "who-we-are" },
    { label: "Find my match", id: "find-my-match" },
  ];

  const rightNavItems = [
    { label: "Become a Partner", id: "become-partner" },
    { label: "Write a Review", id: "write-review" },
  ];

  return (
    <div>
      <nav className="flex flex-col w-full items-center gap-3 relative">
        <div className="flex items-center justify-between px-[200px] py-[30px] w-full">
          <img
            className="w-[125.65px] h-12"
            alt="Group"
            src="/group.png"
          />

          <div className="flex w-[226px] h-14 items-center gap-7">
            <Button
              variant="ghost"
              className="text-white text-lg font-semibold hover:bg-transparent"
            >
              Log in
            </Button>

            <Button className="h-14 px-8 py-6 bg-[#eaeaea0d] rounded-[56px]">
              Sign up
            </Button>
          </div>
        </div>

        <Separator className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="flex items-center justify-between px-[200px] w-full">
          <div className="flex gap-10">
            {leftNavItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveSection(item.id)}
                className="text-[#1da1f2] text-base hover:text-[#1da1f2]/80"
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="flex gap-10">
            {rightNavItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveSection(item.id)}
                className="text-[#1da1f2] text-base hover:text-[#1da1f2]/80"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* ✅ Conditionally mount components here */}
      <div className="mt-10">
        {activeSection === "who-we-are" && <ElementAboutUs />}
      </div>
    </div>
  );
};
