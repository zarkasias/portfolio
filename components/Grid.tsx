import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems as staticGriditems } from "@/data";
import axios from "axios";

const Grid = () => {
  const [gridItems, setGridItems] = useState(staticGriditems);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const { data } = await axios.get("/api/posts");
        if (data && data.length > 0) {
          const latestPost = data[data.length - 1];
          setGridItems((prevItems) =>
            prevItems.map((item) =>
              item.id === 5
                ? {
                    ...item,
                    title: latestPost.title,
                    link: `/blogs`,
                  }
                : item
            )
          );
        }
      } catch (error) {
        console.error("Failed to fetch latest post: ", error);
      }
    };

    fetchLatestPost();
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
              title={title}
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
