import React from 'react';
import Icon, { Props } from './index';
import withTooltip, { TooltipTextType } from '../tooltip/with-tooltip';

type PropsWithTooltip = Props & TooltipTextType;

const IconWithTooltip: React.FC<PropsWithTooltip> = (props) => {
  const { tooltipText, ...otherProps } = props;
  return <Icon {...otherProps} />;
};

export default withTooltip<Props>(IconWithTooltip);
