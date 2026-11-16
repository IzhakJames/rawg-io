import bullsEye from "@/assets/bulls-eye.webp";
import thumbsUp from "@/assets/thumbs-up.webp";
import meh from "@/assets/meh.webp";
import { Image, type ImageProps } from "@chakra-ui/react";

const emojiMap: Record<number, ImageProps> = {
  3: { src: meh, alt: "mid", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} marginTop={1}></Image>;
}

export default Emoji;
