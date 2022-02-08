import { ReactNode } from "react";
import { cross } from "app/assets/Icons/index";
import {
  CustomDrawer,
  DrawerContent,
  DrawerTitleDiv,
} from "./style";
import { DrawerHeading } from "../Typography/Typography";

interface DrawerProps {
  open: boolean;
  setDrawerOpen: Function;
  closeIcon?: boolean;
  title: string;
  children?: ReactNode;
  actionButtons?: boolean;
  cancelButtonText?: string;
  actionButtonText?: string;
  cancelButtonType?: string;
  actionButtonType?: string;
  size?: string;
}

export default function Drawer({
  open,
  setDrawerOpen,
  closeIcon,
  title,
  children,
  size = "small"
}: DrawerProps) {
  return (
    <>
      <CustomDrawer
        open={open}
        anchor={"right"}
        size={size}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerTitleDiv>
          <DrawerHeading title={title} />
          {closeIcon && (
            <img
              style={{ cursor: "pointer" }}
              onClick={() => setDrawerOpen(false)}
              src={cross}
              alt="cross"
            />
          )}
        </DrawerTitleDiv>
        <DrawerContent>{children}</DrawerContent>
      </CustomDrawer>
    </>
  );
}
