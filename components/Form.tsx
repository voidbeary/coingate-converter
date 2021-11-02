import { Box } from "@mui/system";
import type { FC } from "react";

type Props = {
  isDesktop: boolean;
};

const Form: FC<Props> = ({ isDesktop }) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "30px",
        width: isDesktop ? "75%" : "100%",
        height: "40vh", //TODO: delete me
        gridArea: "form",
        position: "relative",
        marginBottom: isDesktop ? undefined : "10%",
        "&::before": isDesktop
          ? {
              position: "absolute",
              width: "100%",
              height: "100%",
              content: '""',
              zIndex: -1,
              backgroundColor: "#E9F6FF",
              top: "-10%",
              left: "-13%",
              transform: "rotate(-5.53deg)",
              borderRadius: "30px",
            }
          : undefined,
      }}
    />
  );
};
export { Form };
