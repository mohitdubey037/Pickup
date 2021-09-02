import { useState } from "react";
import { SplashScreensArr } from "./helper";
import { CustomCard, CardContent, LeftContent, RightContent, LogoImage,SplashHeader,SplashSubHeader,ButtonBox, CardCount } from "./style";
import { SplashScreenType } from "./type";
import { Button } from "../Buttons";

const SplashScreens = () => {
  const [currentScreen, setScreen] = useState(1);
  const [show,setShow] = useState(true);

  const handleNext = () => {
    if (currentScreen < SplashScreensArr.length ) {
      setScreen(currentScreen + 1);
    }
  };

//   const handlePrevious = () => {
//     if (currentScreen > 0) {
//       setScreen(currentScreen - 1);
//     }
//   };

  return (
      show ?
    <CustomCard>
      {SplashScreensArr.map((content: SplashScreenType) => {
        if (currentScreen === content.screenNo)
          return (
            <CardContent>
              <LeftContent>
                  <div className='yellowSplash'> </div>
                  <img src={content.svg} alt=''/>
              </LeftContent>
              <RightContent>
                  <LogoImage/>
                  <SplashHeader>{content.headerText}</SplashHeader>
                  <SplashSubHeader>{content.subHeaderText}</SplashSubHeader>
                  {
                      content.screenNo===SplashScreensArr.length
                        ?<Button label='Go to Dashboard' onClick={()=>{}}/>
                        :(<ButtonBox>
                            <Button label='Skip' onClick={()=>setShow(false)}/>
                            <Button label='Next' onClick={handleNext}/>
                        </ButtonBox>)
                  }                 
                </RightContent>
                <CardCount>{content.screenNo}/{SplashScreensArr.length}</CardCount>
            </CardContent>
          );
      })}
    </CustomCard>
    :
    <></>
  );
};

export default SplashScreens;
