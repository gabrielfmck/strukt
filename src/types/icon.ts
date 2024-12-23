// src\types\icon.ts
import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export interface NavigationIcon {
  (props: IconProps): JSX.Element;
}