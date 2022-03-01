import { useState } from "react";
import { SplashScreensArr } from "./helper";
import {
  CustomCard,
  CardContent,
  LeftContent,
  RightContent,
  SplashHeader,
  ButtonBox,
  CardCount,
} from "./style";
import { SplashScreenType } from "./type";
import { Button } from "../Buttons";
import { useEffect } from "react";
import { navigate } from "@reach/router";
import { H4 } from "../Typography/Typography";
import { logo } from "app/assets/Icons";

interface SplashScreensTypes {
  onHide?: Function;
}

const SplashScreens = (props: SplashScreensTypes) => {
  const [currentScreen, setScreen] = useState(1);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show && props.onHide) {
      props.onHide();
    }
  }, [show]);

  const handleNext = () => {
    if (currentScreen < SplashScreensArr.length) {
      setScreen(currentScreen + 1);
    }
  };

  //   const handlePrevious = () => {
  //     if (currentScreen > 0) {
  //       setScreen(currentScreen - 1);
  //     }
  //   };

  return show ? (
    <CustomCard>
      {SplashScreensArr.map((content: SplashScreenType) => {
        if (currentScreen === content.screenNo)
          return (
            <CardContent>
              <LeftContent>
                {/* <div className="yellowSplash"> </div>
                <img src={content.svg} alt="" /> */}
                <img src={content.splashscreenimg} alt="" />
              </LeftContent>
              <RightContent>
              <img src={logo} alt="logo" className="logo" />
                <SplashHeader>{content.headerText}</SplashHeader>
                <H4 text={content.subHeaderText} />
                {content.screenNo === SplashScreensArr.length ? (
                  <Button label="Go to Dashboard" onClick={() => {
                    setShow(false)
                    navigate('/dashboard')

                  }} />
                ) : (
                  <ButtonBox>
                    <Button
                      label="Skip"
                      secondary
                      onClick={() => setShow(false)}
                      size="medium"
                    />
                    <Button label="Next" onClick={handleNext} 
                      size="medium" />
                  </ButtonBox>
                )}
              </RightContent>
              <CardCount>
                {content.screenNo}/{SplashScreensArr.length}
              </CardCount>
            </CardContent>
          );
      })}
    </CustomCard>
  ) : (
    <></>
  );
};

export default SplashScreens;
