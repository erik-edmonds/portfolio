import { Container, Text } from "@coconut-xr/koestlich";
import colors from "@/themes/colors";
import { ComponentPropsWithoutRef } from "react";
import Card from "./Cards";

const { format } = Intl.NumberFormat("en-EN", {
  style: "percent",
  signDisplay: "exceptZero", 
  minimumFractionDigits: 1
});

interface StatProps extends ComponentPropsWithoutRef<typeof Card> {
  label: string;
  amount: number;
  delta: number;
  status: "success" | "danger";
}


export default function Stat({label, amount, status, delta, ...props}: StatProps) {
  return (
    <Card radius={10} ratio={1.5} {...props} flexDirection="column">
      <Text fontSize={50} color={colors.primary12}>
        {label}
      </Text>
      <Container flexDirection="row" alignItems="center">
      </Container>
    </Card>
  );
}
