import { Container, Object } from "@coconut-xr/koestlich";
import Hover from "@/components/hooks/Hover";
import CardMesh from "@/templates/Card";
import { ComponentPropsWithoutRef, useMemo } from "react";

interface CardProps extends ComponentPropsWithoutRef<typeof Container> {
  hoverAnimation?: boolean;
  ratio: number;
  radius: number;
}

export default function Card({hoverAnimation=true, radius, ratio, ...props}: CardProps ) {
  const { isHovered, hoverProps } = Hover();

  const mesh = useMemo(() => new CardMesh(radius, ratio), [ratio, radius]);

  return (
    <Object {...props} {...hoverProps} object={mesh} padding={6} depth={8} translateZ={isHovered && hoverAnimation ? 80: 0} />
  );
}
