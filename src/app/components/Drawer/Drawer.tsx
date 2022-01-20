import { ReactNode } from "react";
import { cross } from "app/assets/Icons/index";
import {
  CustomDrawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitleDiv,
} from "./style";
import { DrawerTitle } from "../Typography/Typography";
import { Button } from "@material-ui/core";
import ThemeButton from "../Buttons/Buttons";

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
  maxWidth ?: string;
}

export default function Drawer({
  open,
  setDrawerOpen,
  closeIcon,
  title,
  children,
  actionButtons,
  maxWidth
}: DrawerProps) {
  return (
    <div>
      <CustomDrawer
        open={open}
        anchor={"right"}
        maxWidth={maxWidth}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerTitleDiv>
          <DrawerTitle title={title} />
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
        {/* {actionButtons && (
          <DrawerFooter>
          </DrawerFooter>
        )} */}
      </CustomDrawer>
    </div>
  );
}
