import { Box, SVG, Text } from '@coconut-xr/koestlich';
import { ComponentPropsWithoutRef } from 'react';
import Card from '@/components/canvas/Cards';

interface PaymentProps extends ComponentPropsWithoutRef<typeof Box> {
  icon: string;
  label: string;
}

export default function Payment({icon, label, ...props}: PaymentProps) {
  return (
    <Card radius={10} ratio={1} {...props} >
      <SVG url={icon} width={100} height={100} margin="auto" color="black" />
      <Text fontSize={40} margin="auto" color="black">
        {label}
      </Text>
    </Card>
  );
}


