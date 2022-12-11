import { ArrowBackIosNewRounded, Block, ContentPaste, Delete, NotificationsOff, Settings } from "@mui/icons-material";
import { ButtonBase, Divider, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useState, MouseEvent } from "react";
import ReportIcon from "@mui/icons-material/Report";

export const ChatHeader = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const onClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const onClose = () => setAnchorEl(null);

  const isModal =
    router.asPath.includes("#alram") || router.asPath.includes("#report") || router.asPath.includes("#out");

  return (
    <div style={{ height: 60 }}>
      <div
        style={{
          background: "#1A1D2C",
          boxShadow: "0px 0 2px rgba(0, 0, 0, 0.15)",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <ButtonBase sx={{ ml: 1.5, borderRadius: 4, padding: 1 }}>
          <ArrowBackIosNewRounded style={{ fontSize: 24, color: "#ffffff" }} onClick={router.back} />
        </ButtonBase>
        <h3
          style={{
            display: "flex",
            fontWeight: 500,
            fontSize: 25,
            lineHeight: "36px",
          }}
        >
          채팅방뫄뫄
          <img
            src="/icons/letter.png"
            style={{ position: "relative", top: -2, marginLeft: 4, width: 35, height: 29 }}
          />
        </h3>
        <ButtonBase
          sx={{
            mr: 1.5,
            borderRadius: 4,
            padding: 1,
            opacity: isModal ? 0.7 : 1,
            rotate: isModal ? "22.5deg" : 0,
            transition: "opacity 0.2s ease-in, rotate 0.2s ease-in",
          }}
          onClick={onClick}
          disabled={isModal}
        >
          <Settings style={{ fontSize: 33, color: "#ffffff" }} />
        </ButtonBase>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={onClose}
          sx={{
            "span, li": {
              fontFamily: "AppleSDGothicNeo",
              fontWeight: 400,
              fontSize: 15,
              lineHeight: "26px",
              letterSpacing: "-0.4px",
            },
            div: {
              borderRadius: "10px",
            },
          }}
        >
          <MenuItem
            onClick={() => {
              onClose();
              router.push("#alram");
            }}
          >
            <ListItemText>
              <NotificationsOff sx={{ mr: 0.5, position: "relative", top: 5 }} />
              알림 끄기
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={onClose}>
            <Block sx={{ mr: 0.5, position: "relative", top: -1 }} />
            차단하기
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem
            onClick={() => {
              onClose();
              router.push("#report");
            }}
          >
            <ReportIcon sx={{ mr: 0.5, position: "relative", top: -1 }} />
            신고하기
          </MenuItem>
          <MenuItem
            onClick={() => {
              onClose();
              router.push("#out");
            }}
            sx={{ color: "#FF0000" }}
          >
            <Delete sx={{ mr: 0.5 }} />
            채팅방 나가기
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};