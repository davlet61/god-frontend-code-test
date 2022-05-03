import { IconButton } from 'vcc-ui';

export const PrevArrow = (props: any) => {
  const { onClick } = props;

  return (
    <IconButton
      className="custom-prev"
      aria-label="chevronback"
      iconName="navigation-chevronback"
      variant="outline"
      onClick={onClick}
    />
  );
};
