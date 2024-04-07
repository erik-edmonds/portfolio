import { Object, SVG, Text } from "@coconut-xr/koestlich";
import Hover from "@/components/hooks/Hover";
import CardMesh from "@/templates/Card";
import colors from "@/themes/colors";
import { useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, useMemo } from "react";

export default function Navigation() {
  const mesh = useMemo(() => new CardMesh(3, 0.1), []);

  return (
    <Object color={colors.neutral9} height="100%" width="90%" object={mesh} index={2} flexDirection="column"
      padding={15} marginRight={20}>
      <Text opacity={1} translateZ={1} fontSize={40} marginX="auto" color={colors.white}>
        Menu
      </Text>

      <Item url="/img/svg/home.svg" marginTop={20} isActive link="/"/>
      <Item url="/img/svg/calendar.svg" marginTop={10} link="https://calendly.com/erikedmonds" />
      <Item url="/img/svg/mail.svg" marginTop={10} link="/contact" />
      <Item url="/img/svg/linkedin.svg" marginTop={10} link="https://www.linkedin.com/in/erik-edmonds/"/>
      <Item url="/img/svg/github.svg" marginTop={10} link="https://github.com/erik-edmonds" />
      <Item url="/img/svg/twitter.svg" marginTop={10} link="https://twitter.com/ErikEdmonds5" />
      <Item url="/img/svg/coffee.svg" marginTop={10} link="https://www.buymeacoffee.com/erikedmonds" />
      <Item url="/img/svg/settings.svg" marginTop="auto" /> {/* ?? */}
    </Object>
  )
}

interface ItemProps extends Omit<ComponentPropsWithoutRef<typeof Object>, "object"> {
  url: string;
  isActive?: boolean;
  link: string;
}

function Item({url, isActive, link="/", ...props} : ItemProps) {
  const { isHovered, hoverProps } = Hover();
  const router = useRouter();

  const mesh = useMemo(() => new CardMesh(10, 1), []);

  return (
    <Object object={mesh} {...props} height="8%" width="100%" alignItems="center" justifyContent="center" onClick={() => router.push(link)}
      color={isActive ? colors.neutral1 : colors.neutral11} depth={isHovered ? 80 : isActive ? 60 : 40} {...hoverProps}>
        <SVG url={url} height="50%" width="50%" color={isActive ? colors.primary12 : colors.white} />
    </Object>
  )
}
