import { IconType } from 'react-icons';

export type Video = {
  id: number;
  title: string;
  source: string;
  icon: IconType;
  iconColor?: string;
};
