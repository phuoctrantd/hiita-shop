import React from "react";
import ZaloIcon from "@/public/images/zalo-icon.png";
import TelephoneIcon from "@/public/images/telephone-call.png";
import { Stack } from "@mui/material";
import Link from "next/link";
import styles from "./../styles/ButtonContact.module.css";

const ButtonContact = () => {
  return (
    <>
      <Stack gap={2}>
        <Link href="https://zalo.me/0389606663" target="_blank">
          <img
            src={ZaloIcon.src}
            alt="zalo-icon"
            className={`zalo-icon ${styles.hithere}`}
            width={47}
            height={47}
          />
        </Link>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => window.open("tel:0818836383")}
          src={TelephoneIcon.src}
          alt="telephone-icon"
          className={`zalo-icon ${styles.hithere}`}
          width={45}
          height={45}
        />
      </Stack>
    </>
  );
};

export default ButtonContact;
