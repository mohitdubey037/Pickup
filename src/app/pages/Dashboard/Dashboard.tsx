import { RouteComponentProps } from "@reach/router";
import SplashScreens from "app/components/SplashScreens/SplashScreens";
import { Overlay, Container,Center } from './style'

const Dashboard = ({ navigate }: RouteComponentProps) => {
    return (
        <Container>
            <Overlay>
                <Center>
                <SplashScreens />
                </Center>
            </Overlay>
        </Container>

    )
}

export default Dashboard
