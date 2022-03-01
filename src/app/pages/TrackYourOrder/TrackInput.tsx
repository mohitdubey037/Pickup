import React, {useEffect, useState} from "react";
import { Drawer } from "app/components/Drawer";
import { IconButton, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import { logo } from "app/assets/Icons";
import { Button } from "app/components/Buttons";
import { H1 } from "app/components/Typography/Typography";
import { AppDownloadBox, InputPaper, LogoBox, TrackInputBox } from "./style";
import SearchOrderDetailsDrawer from '../DashboardPage/DashboardContainers/SearchContainer/SearchOrderDetailsDrawer';
import { useFormik } from "formik";

export function TrackInput() {

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(drawerOpen);
  })

  const {
    values,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {orderId: ""},
    onSubmit: () => {
      setDrawerOpen(true);
    },
  });

  return (
    <>
      <LogoBox>
        <img src={logo} alt="logo" />
      </LogoBox>
      <TrackInputBox>
        <Box className="inputbox">
          <H1 title="Track Your Order" mb={24} />

          <InputPaper>
            <InputBase
              name="orderId"
              onChange={handleChange} 
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search by order ID or tracking ID"
            />

            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <Button
                type="button"
                size="medium"
                label="Track"
                onClick={handleSubmit}
              />
            </IconButton>
          </InputPaper>
        </Box>
      </TrackInputBox>
      <AppDownloadBox />

      <Drawer
        title=""
        open={drawerOpen}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        size={"large"}
      >
        <SearchOrderDetailsDrawer orderId={values.orderId} setDrawerOpen={(flag) => setDrawerOpen(flag)}/>
      </Drawer>
    </>
  );
}
