import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import {
  setPopupStatusToStorage,
  getPopupStatusFromStorage,
} from "../../lib/utils/localStorage";
import Link from "next/link";
import { useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "react-query";
import { PopupType } from "@/lib/types/popup";
import { getImageUrl } from "@/lib/utils/ultil";

export default function WelcomePopup() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  React.useEffect(() => {
    const popupStatus = async () => {
      const status = await getPopupStatusFromStorage();
      if (!status) {
        setOpen(true);
        setPopupStatusToStorage(false);
      } else {
        setOpen(false);
      }
    };
    popupStatus();
  }, []);
  const handleClose = () => {
    setOpen(false);
    setPopupStatusToStorage(false);
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "40%",
    height: "35%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 1,
    outline: "none",
    objectFit: "cover",
  };
  const { data } = useQuery<PopupType>(`/pop-up`, {
    keepPreviousData: true,
  });
  return (
    <>
      {!!data && !!data.status && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Link href={data.url}>
              <img
                src={getImageUrl(data.image_url)}
                alt="popup"
                width="100%"
                height="100%"
              />
            </Link>
          </Box>
        </Modal>
      )}
    </>
  );
}
