import React from "react";
import { Card, Container, Grid, Typography } from "@mui/material";
import AppButton from "../button/Button.component";
import { CardDirection, ICard } from "@/shared/components/card/cards.interface";
import TestImage from "@/asserts/image/test.jpg";
import {
  CardContainer,
  CardPlayButonHorizontalSx,
  CardPlayButonVerticalSx,
  CartDescriptionSx,
  CartTitleSx,
  DescriptionContainer,
  HorizontalContainer,
  ImageContainer,
  cardVerticalContainer,
} from "@Shared/components/card/card.style";

function AppCard({
  direction = CardDirection.HORIZONTAL,
  showPlayBtn = false,
  children,
  title,
  description,
  ...props
}: ICard) {
  const verticalLayout = () => {
    return (
      <Container
        sx={{
          margin: "20px auto",
          width: "100%",
        }}
      >
        <ImageContainer>
          <img
            className=""
            src={TestImage}
            alt="test"
            width={150}
            height={150}
          />
        </ImageContainer>
        <Typography sx={CartTitleSx} variant="h6">
          {title}
        </Typography>
        <Typography sx={CartDescriptionSx} paragraph>
          {description}
        </Typography>
      </Container>
    );
  };

  const horizontalLayout = () => {
    return (
      <HorizontalContainer>
        <ImageContainer sx={{ borderRadius: "0px" }}>
          <img
            className=""
            src={TestImage}
            alt="test"
            width={100}
            height={100}
          />
        </ImageContainer>

        <DescriptionContainer>{children}</DescriptionContainer>
      </HorizontalContainer>
    );
  };

  const renderCard = {
    [CardDirection.VERTICAL]: verticalLayout,
    [CardDirection.HORIZONTAL]: horizontalLayout,
  };

  return (
    <CardContainer
      sx={
        direction === "vertical"
          ? {
              width: "12rem",
            }
          : {}
      }
    >
      <Card
        className="card-container"
        sx={direction === "vertical" ? cardVerticalContainer : {}}
        {...props}
      >
        {renderCard[direction]()}
      </Card>

      <AppButton
        className="play-button"
        sx={
          direction === "vertical"
            ? CardPlayButonVerticalSx
            : CardPlayButonHorizontalSx
        }
        color="success"
        isIcon
        icon="playCircle"
      />
    </CardContainer>
  );
}

export default AppCard;
