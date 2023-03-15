import colors  from '@Shared/style/palette.scss';

export const iconSx={
       color:colors.lightUnhover,
      "&:hover": {
        color:colors.light,
        transform: "scale(1.2)",
        transition:'all ease 0.5s'
      },
};