"use client";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems as staticGriditems } from "@/data";
import axios from "axios";

const Grid = () => {
  const [gridItems, setGridItems] = useState(staticGriditems);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchLatestPost = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("/api/posts", {
          signal: controller.signal,
        });

        // Only update if we got valid data
        if (data && data.length > 0) {
          const latestPost = data[data.length - 1];
          setGridItems((prevItems) =>
            prevItems.map((item) =>
              item.id === 5
                ? {
                    ...item,
                    title: latestPost.title,
                    link: `/blog/${latestPost.id}`,
                  }
                : item
            )
          );
        }
      } catch (error) {
        // Only log if it's not an abort error
        if (!axios.isCancel(error)) {
          console.error("Failed to fetch latest post: ", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Delay the fetch slightly to prioritize initial render
    const timeoutId = setTimeout(() => {
      fetchLatestPost();
    }, 100);

    // Cleanup function
    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
            link,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={isLoading && id === 5 ? "Loading..." : title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              link={link}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
