import { IconButton } from 'vcc-ui';

export const NextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <IconButton
      className="custom-next"
      aria-label="chevronforward"
      iconName="navigation-chevronforward"
      variant="outline"
      onClick={onClick}
    />
  );
};
