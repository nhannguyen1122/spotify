import React from "react";
import { IOverView } from "./overview.interface";
import { OverViewContainer, TitleContainer } from "./overView.style";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import AppCard from "@Shared/components/card/Card.component";

function OverView({
  isCardItem = false,
  cardItemDirection = "vertical",
  ...props
}: IOverView) {
  const renderListCard = () => {
    return props.cardData.length
      ? props.cardData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Grid
                item
                lg={props.maxItemPerRow > 0 && 12 / props.maxItemPerRow}
              >
                {cardItemDirection === "horizontal" ? (
                  <AppCard>
                    <Typography variant="h5">{item.title}</Typography>
                  </AppCard>
                ) : (
                  <AppCard
                    direction="vertical"
                    title=" Dayli Remix 1"
                    description="Hardwell Avicii and more Famouse dj"
                  />
                )}
              </Grid>
            </React.Fragment>
          );
        })
      : [];
  };

  return (
    <OverViewContainer>
      <TitleContainer>
        <Typography fontWeight={"bold"} variant="h4" marginBottom={"1rem"}>
          {props?.title}
        </Typography>

        {props?.hasShowAll && (
          <Link href="#" variant="body2">
            Hiện tất cả
          </Link>
        )}
      </TitleContainer>
      <Grid container spacing={2}>
        {renderListCard()}
      </Grid>
      {props?.children}
    </OverViewContainer>
  );
}

export default OverView;
