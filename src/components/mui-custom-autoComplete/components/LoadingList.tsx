import { Skeleton } from "@mui/material";

export default function LoadingList({count} : {count: number}) {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <Skeleton   
          key={index}
          variant="rectangular"
          width="100%"
          height={40}
          animation="wave"
        />
      ))}
    </>
  );
}
