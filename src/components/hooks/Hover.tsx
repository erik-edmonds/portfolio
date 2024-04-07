import { useMemo, useState } from "react";

export default function Hover() {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = useMemo(()=> ({
    onPointerEnter: () => setIsHovered(true),
    onPointerLeave: () => setIsHovered(false),
  }), []);

  return { isHovered, setIsHovered, hoverProps };
}
