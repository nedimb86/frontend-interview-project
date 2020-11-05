import React from 'react';
import Avatar, { Props } from './index';
import withTooltip, { TooltipTextType } from '../tooltip/with-tooltip';

type PropsWithTooltip = Props & TooltipTextType;

const AvatarWithTooltip: React.FC<PropsWithTooltip> = (props) => {
  const { tooltipText, ...otherProps } = props;
  return <Avatar {...otherProps} />;
};

export default withTooltip<Props>(AvatarWithTooltip);
