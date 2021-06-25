import App1 from "../assets/images/rewards/app-1.png";
import App2 from "../assets/images/rewards/app-2.png";
import Balloons from "../assets/images/rewards/balloons.png";
import Confetti1 from "../assets/images/rewards/confetti-1.png";
import Confetti2 from "../assets/images/rewards/confetti-2.png";
import Gifts from "../assets/images/rewards/gifts.png";
import Hurray from "../assets/images/rewards/hurray.png";
import Reward from "../assets/images/rewards/reward.png";

const images = [
  App1,
  App2,
  Balloons,
  Confetti1,
  Confetti2,
  Gifts,
  Hurray,
  Reward,
];

export const randomImageGenerator = () => {
  const num = Math.floor(Math.random() * images?.length);

  return images?.[num];
};

const colorsPallete = [
    '#264653',
    '#2A9D8F',
    '#E7C15F',
    '#F4A261',
    '#E76F51'
];

export const randomColorGenerator = () => {
  const num = Math.floor(Math.random() * colorsPallete?.length);
    return colorsPallete?.[num];
}
