"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function UpdateRoute() {
  const path = usePathname();
  const [route, setRoute] = useState(path)

  useEffect(() => {
    setRoute(path)
  }, [path])

  return path
}
