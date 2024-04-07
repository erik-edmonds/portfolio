import { RootContainer, Container, Text } from "@coconut-xr/koestlich";
import colors from "@/themes/colors";
import Navigation from "@/components/canvas/Navigation";
import Payment from "@/components/canvas/Payment";
import Stat from "@/components/canvas/Stat";
import Emails from "@/components/canvas/Emails";
import Sidebar from "@/components/canvas/Sidebar";

export default function NavigationLayout() {
  return (
    <RootContainer backgroundColor={colors.neutral4} index={3} sizeX={5} sizeY={3} padding={20} precision={0.5} flexDirection="row" overflow="scroll">
      {/* Navigation Container */}
      <Container flexGrow={1}>
        <Navigation />
      </Container>

      {/* Center Column */}
      <Container flexGrow={10}>
        {/* Title Container */}
        <Container flexGrow={1}>
          <Text horizontalAlign="center" fontSize={60} color={colors.primary12}>
            Simple VR Scene
          </Text>
        </Container>

        {/* Square Cards Container */}
        <Container margin={10} flexGrow={4} flexDirection="row">
          <Container flexGrow={1} margin={10}>
            <Payment flexGrow={1} icon="/img/svg/tech.svg" label="View My Tech Stack"/>
          </Container>
          <Container flexGrow={1} margin={10}>
            <Payment flexGrow={1} icon="/img/svg/kart.svg" label="Mario Kart in R3f"/>
          </Container>
        </Container>

        {/* Scrolling Container */}
        <Container flexDirection="row" flexGrow={15} >
          <Container flexGrow={5} margin={10}>
            <Emails />
          </Container>
        </Container>
      </Container>

      {/* SideBar */}
      <Container flexGrow={4} margin={20}>
        <Sidebar />
      </Container>
    </RootContainer>
  )
};
