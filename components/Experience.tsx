import React from "react";

import { improvedExperience, socialMedia } from "@/data";
import { Button } from "./ui/MovingBorders";

export const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My
        <span className="text-purple"> Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {improvedExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-start p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h2 className="text-start text-xl md:text-4xl font-bold">
                  {card.title}
                </h2>
                {card.role && (
                  <h1 className="text-start text-xl md:text-2xl mt-4 font-bold">
                    {card.role}
                  </h1>
                )}
                {card.clients && (
                  <div className="text-start mt-4 font-semibold w-[80%]">
                    {card.clients.map((item, i) => (
                      <div className="py-4" key={i}>
                        <p className="text-xl font-bold text-white-400">
                          {item.name}
                        </p>
                        <ul className="list-none mt-2 text-white-200 border-2 border-slate-600 border-opacity-45 rounded-sm">
                          {item.desc.map((elm, j) => (
                            <li
                              className="py-1.5 p-2 bg-slate-800 bg-opacity-60"
                              key={j}
                            >
                              {elm}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {card.roles && (
                  <div className="text-start mt-4 font-semibold w-[80%]">
                    {card.roles.map((item, i) => (
                      <div className="py-4" key={i}>
                        <p className="text-xl font-bold text-white-400">
                          {item.name}
                        </p>
                        <ul className="list-none mt-2 text-white-200 border-2 border-slate-600 border-opacity-45 rounded-sm">
                          {item.desc.map((elm, j) => (
                            <li
                              className="py-1.5 p-2 bg-slate-800 bg-opacity-60"
                              key={j}
                            >
                              {elm}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {card.desc && (
                  <div className="text-start text-white-100 mt-3 font-semibold">
                    <ul className="list-none">
                      {card.desc.map((item, i) => (
                        <li className="py-2" key={i}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
      <div className="flex w-full items-center justify-center mt-5">
        <p className="mr-4 text-white-200 font-semibold">
          For more work experience:{" "}
        </p>
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <a href={info.link} target="_blank">
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
