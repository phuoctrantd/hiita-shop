import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import {
  setPopupStatusToStorage,
  getPopupStatusFromStorage,
} from "../../lib/utils/localStorage";
import Link from "next/link";
import PopupImg from "@/public/images/fruit_demo.png";
import { useMediaQuery, useTheme } from "@mui/material";

export default function WelcomePopup() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  React.useEffect(() => {
    const popupStatus = async () => {
      const status = await getPopupStatusFromStorage();
      if (!status) {
        setOpen(true);

        // setTimeout(() => {
        //   handleClose();
        // }, 5000);
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
    height: "30%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 1,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Link href="/">
            <img src={PopupImg.src} alt="popup" width="100%" height="100%" />
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
