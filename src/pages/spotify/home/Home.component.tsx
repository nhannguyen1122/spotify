import OverView from "@/pages/spotify/home/overview/Overview.component";
import { Direction } from "@/shared/components/card/cards.interface";
import { Button, Switch, Typography } from "@mui/material";
import React, { useState } from "react";

const fakeData = [
  {
    title: "Chaò buổi tối",
    cardData: [
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
    ],
    isShowAll: false,
    cardItemDirection: "horizontal",
    maxItemPerRow: 3,
  },
  {
    title: "Chaò buổi tối",
    cardData: [
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
    ],
    isShowAll: true,
    maxItemPerRow: 9,
  },
  {
    title: "Chaò buổi tối",
    cardData: [
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
    ],
    isShowAll: true,
    maxItemPerRow: 9,
  },
  {
    title: "Chaò buổi tối",
    cardData: [
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
    ],
    isShowAll: true,
    maxItemPerRow: 9,
  },
  {
    title: "Chaò buổi tối",
    cardData: [
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
      {
        title: "nhạc tiktok căng",
      },
    ],
    isShowAll: true,
    maxItemPerRow: 9,
  },
];

function Home() {
  const [homeData, setHomeData] = useState([]);

  const renderHomeData = () => {
    return fakeData.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <OverView
            cardData={item.cardData}
            title={item.title}
            hasShowAll={item.isShowAll}
            maxItemPerRow={item.maxItemPerRow}
            cardItemDirection={item.cardItemDirection as Direction}
          />
        </React.Fragment>
      );
    });
  };

  return <React.Fragment>{renderHomeData()}</React.Fragment>;
}

export default Home;
