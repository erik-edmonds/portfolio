import { Container, Image, Text } from "@coconut-xr/koestlich";
import { ComponentPropsWithoutRef } from "react";
import Hover from "@/components/hooks/Hover";
import Card from "@/components/canvas/Cards";
import colors from "@/themes/colors";

const emails = [
  {
    avatar: "/img/hannah-morgan.png",
    name: "Hannah Morgan",
    subject: "Meeting scheduled",
    time: "1:24 PM"
  },
  {
    avatar: "/img/megan-clark.png",
    name: "Megan Clark",
    subject: "Update on marketing campaign",
    time: "12:32 PM"
  },
  {
    avatar: "/img/brandon-williams.png",
    name: "Brandon Williams",
    subject: "co-ui 2.0 is about to launch",
    time: "Yesterday at 8:57 PM"
  },
  {
    avatar: "/img/reid-smith.png",
    name: "Reid Smith",
    subject: "My friend Julie loves WebXR!",
    time: "Yesterday at 8:49 PM"
  },
  {
    avatar: "/img/stella-cook.png",
    name: "Stella Cook",
    subject: "My product recommendation",
    time: "Yesterday at 5:23 PM"
  }
];

interface RowProps extends ComponentPropsWithoutRef<typeof Container> {
  avatar: string;
  name: string;
  subject: string;
  time: string;
}

function Row({avatar, name, subject, time, ...props}: RowProps) {
  const { isHovered, hoverProps } = Hover();

  return (
    <Container {...props} {...hoverProps} 
    flexDirection="row" alignItems="center" paddingY={3} marginLeft={30} translateZ={isHovered ? 60 : 0}>
      <Image url={avatar} height={120} width={80} borderRadius={6} />
      <Text fontSize={40} color={colors.neutral11} marginLeft={40}>
        {name}
      </Text>
    </Container>

  )
}

export default function Emails() {
  return (
    <Card ratio={2} radius={4} flexGrow={1} marginLeft={4} flexDirection="column" hoverAnimation={false}>
      <Text fontSize={40} margin={25} color={colors.primary12}>
        Friends
      </Text> 
      {emails.map((email, index) => (
        <Row key={index} {...email} />
      ))}
    </Card>
  )
}
