import { Grid3X3Icon, PlusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

export const InquirySection = () => {
  const navigationItems = [
    { label: "General questions", active: true },
    { label: "Reviews and publications", active: false },
    { label: "For Partners", active: false },
    { label: "For Clients", active: false },
  ];

  const faqItems = [
    {
      id: "item-1",
      question: "What is The GlobalITMarketplace?",
      answer:
        "The Global IT Marketplace is a database of some of the very best in Global IT & SaaS talent. It is a plce to compare your options and find software and provisioners (we like to call them partners!) that are right for your business. It's our mission to save you time, money & effort by giving you access to software providers that meet your budget, timeline and scope.",
      defaultOpen: true,
    },
    {
      id: "item-2",
      question:
        "What makes GlobalITMarketplace different from other comparison platforms?",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-3",
      question: "How can I sign up as a partner?",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-4",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-5",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-6",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#000002] py-20">
      {/* Background Image */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[1097px] h-[847px] pointer-events-none">
        <div className="absolute top-0 left-[calc(50.00%_-_402px)] w-[804px] h-[804px]">
          <img
            className="absolute h-[calc(100%_-_129px)] top-16 left-[calc(50.00%_-_338px)] w-[675px] opacity-80"
            alt="Q background"
            src="/q-62492b69-png.png"
          />
          <div className="absolute top-[105px] left-[calc(50.00%_-_297px)] w-[595px] h-[595px] rounded-[392px] rotate-[152.04deg] [background:conic-gradient(from_226deg_at_44%_47%,rgba(25,213,255,0)_4%,rgba(37,117,238,0.4)_99%)]" />
        </div>
        <div className="absolute top-[402px] left-[calc(50.00%_-_548px)] w-[1097px] h-[445px] blur-[15.6px] backdrop-blur-[26.2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(26.2px)_brightness(100%)] bg-[linear-gradient(184deg,rgba(3,0,20,0)_0%,rgba(0,0,2,1)_85%)]" />
      </div>

      {/* Heading */}
      <div className="relative z-10 w-full flex justify-center mb-6">
        <h1 className="w-[1142px] h-16 flex items-center justify-center [font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-6xl text-center tracking-[-0.60px] leading-[64px]">
          You have questions? We have answers!
        </h1>
      </div>

      {/* Subheading */}
      <div className="relative z-10 w-full flex justify-center mb-16">
        <p className="w-[974px] h-7 flex items-center justify-center [font-family:'Manrope',Helvetica] font-normal text-transparent text-xl text-center tracking-[0] leading-5">
          <span className="text-[#efedfdb2]">
            If you don&apos;t find the answer you need, you can{" "}
          </span>
          <span className="font-extrabold text-[#1da1f2]">contact us</span>
          <span className="font-extrabold text-[#1da1f2]"> directly</span>
          <span className="text-[#efedfdb2]">, or fill out our </span>
          <span className="font-extrabold text-[#1da1f2]">query form.</span>
        </p>
      </div>

      <div className="relative z-10 w-full flex justify-center">
        <div className="flex w-full max-w-[1097px] h-[860px] relative flex-col items-start gap-2.5 px-12 py-10 bg-[#eaeaea0d] rounded-[28px] border-[none] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[28px] before:[background:linear-gradient(142deg,rgba(75,95,162,1)_29%,rgba(16,16,16,0)_74%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="inline-flex flex-col h-[780px] items-center justify-center gap-2.5 relative">
            <div className="flex w-[950px] items-start justify-between relative flex-[0_0_auto]">
              <nav className="flex flex-col w-[184px] items-start gap-4 relative">
                {navigationItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`relative flex items-center justify-center self-stretch h-auto p-0 [font-family:'Manrope',Helvetica] text-base tracking-[0] leading-6 ${
                      item.active
                        ? "font-bold text-[#efedfd]"
                        : "font-normal text-[#efedfd66] hover:text-[#efedfd]"
                    }`}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>

              <div className="flex flex-col w-[712px] items-start gap-10 relative">
                <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                    <Grid3X3Icon className="relative w-[31px] h-[31px] text-[#eaeaea]" />
                    <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#eaeaea] text-2xl tracking-[-0.53px] leading-[34px] whitespace-nowrap">
                      Top General Questions
                    </h2>
                  </div>

                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-1"
                    className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
                  >
                    {faqItems.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="flex items-center justify-between px-0 py-8 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-transparent [border-image:linear-gradient(90deg,rgba(234,234,234,0.5)_0%,rgba(132,132,132,0.1)_63%)_1] data-[state=open]:pb-4"
                      >
                        <AccordionTrigger className="flex items-center justify-between w-full p-0 hover:no-underline [&[data-state=open]>svg]:hidden">
                          <div className="flex flex-col items-start gap-4 relative flex-1">
                            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-[#eaeaea] text-base tracking-[-0.35px] leading-[34px] text-left">
                              {item.question}
                            </h3>
                          </div>
                          <PlusIcon className="relative w-6 h-6 text-[#eaeaea] shrink-0" />
                        </AccordionTrigger>

                        {item.answer && (
                          <AccordionContent className="pt-0 pb-4">
                            <div className="relative flex items-center justify-center w-[656px] font-body-small font-[number:var(--body-small-font-weight)] text-[#efedfdb2] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                              {item.answer}
                            </div>
                          </AccordionContent>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                <span className="text-[#efedfdb2]">
                    See all frequently asked questions<Button variant="link" className="font-bold text-[#1da1f2] p-0 h-auto">here</Button>
                </span>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};