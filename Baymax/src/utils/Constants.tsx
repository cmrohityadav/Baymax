import { screenWidth } from "./Scaling";
export enum Colors {
  primary = '#AF1125',
  active = '#1054E8',
  inactive = '#666',
  lightText = "#222",
  background = '#fff',
  white='#fff',
  secondry='#C71E25',
  border='#fff',
  text = '#222',
}

export const lightColors=[
  'rgba(255,255,255,1)',
  'rgba(255,255,255,0.9)',
  'rgba(255,255,255,0.7)',
  'rgba(255,255,255,0.6)',
  'rgba(255,255,255,0.5)',
  'rgba(255,255,255,0.4)',
  'rgba(255,255,255,0.003)',
]

export const circleRadius=screenWidth*0.18;

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};




