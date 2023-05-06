import Jazzicon from "react-jazzicon";

interface Props {
  seed: number;
  diameterRem?: number;
}

export const JazziconGenerator: React.FC<Props> = ({ seed, diameterRem }) => {
  return (
    <Jazzicon diameter={(diameterRem ? diameterRem : 1.5) * 16} seed={seed} />
  );
};
