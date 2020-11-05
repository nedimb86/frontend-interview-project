import React from 'react';
import Image, { Props } from './index';
import withTooltip, { TooltipTextType } from '../tooltip/with-tooltip';

type PropsWithTooltip = Props & TooltipTextType;

const ImageWithTooltip: React.FC<PropsWithTooltip> = (props) => {
  const { tooltipText, ...otherProps } = props;
  return <Image {...otherProps} />;
};

export default withTooltip<Props>(ImageWithTooltip);
