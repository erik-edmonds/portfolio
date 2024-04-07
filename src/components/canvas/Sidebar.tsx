import { Container, Image, Object, SVG, Text } from "@coconut-xr/koestlich";
import Hover from "@/components/hooks/Hover";
import colors from "@/themes/colors";
import { ComponentPropsWithoutRef, useMemo } from "react";
import CardMesh from "@/templates/Card";
import Activity from "@/components/canvas/Activity";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const mesh = useMemo(() => new CardMesh(3, 0.4), []);

  return (
    <Object object={mesh} width="100%" color={colors.primary3} padding={6} marginLeft={8} height="100%"
    flexDirection="column" overflow="hidden" alignItems="center" depth={15}>
      <Image url="/img/avatarNew.png" width={200} height={200} />
      <Text fontSize={50} color={colors.primary12} marginTop={4}>
        Erik Edmonds
      </Text>
      <Container flexDirection="row">
        <Icon url="/img/svg/calendar.svg" link="https://calendly.com/erikedmonds"/>
        <Icon url="/img/svg/notification.svg" link="/vr"/>
        <Icon url="/img/svg/message.svg" link="/contact"/>
      </Container>

      <Activity />
    </Object>
  );
}

interface IconProps extends ComponentPropsWithoutRef<typeof Container> {
  url: string;
  link: string;
  isActive?: boolean;
}

function Icon({url, link, isActive, ...props}: IconProps) {
  const { isHovered, hoverProps } = Hover();
  const router = useRouter();

  return (
    <Container {...props} height={50} width={50} marginX={10} alignItems="center" justifyContent="center" borderRadius={6}
      backgroundOpacity={1} backgroundColor={colors.primary3} translateZ={isHovered ? 40 : 0} {...hoverProps}>
      <SVG url={url} height={40} width={40} color={colors.primary12} onClick={() => router.push(link)} />
    </Container>
  );
}
