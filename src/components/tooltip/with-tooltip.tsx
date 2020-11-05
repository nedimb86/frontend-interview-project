import React, { useState } from 'react';
import classnames from 'classnames';
import Tooltip from './index';
import styles from './tooltip.module.scss';

export interface TooltipTextType {
  tooltipText: string;
  className?: string;
}

type WrapperComponentType<P> = React.FC<P & TooltipTextType>;

function withTooltip<P>(
  Component: React.FC<P & TooltipTextType>,
): WrapperComponentType<P> {
  function WrapperComponent(props: P & TooltipTextType) {
    const [selected, setSelected] = useState(false);
    const { tooltipText, className } = props;
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const rootClass = classnames(
      {
        [styles.wrapper]: true,
        [styles.wrapperSelected]: selected,
      },
      className,
    );

    function onSelect(e: React.MouseEvent<HTMLDivElement>): void {
      const { pageX, pageY, currentTarget } = e;
      const { scrollX, scrollY } = window;
      const { left: posLeft, top: posTop } = currentTarget.getClientRects()[0];
      const tooltipElement = currentTarget.firstElementChild
        ?.firstElementChild as HTMLDivElement;
      const tooltipHalfWidth = tooltipElement.offsetWidth / 2;
      const tooltipHeight = tooltipElement.offsetHeight;
      const posLeftCalc = pageX - posLeft;

      setTop(pageY - posTop - tooltipHeight - 4 - scrollY);
      setLeft(
        posLeftCalc > tooltipHalfWidth
          ? posLeftCalc - tooltipHalfWidth + scrollX
          : scrollX,
      );
      setSelected(true);
    }

    function onFocus(): void {}

    function onUnselect(): void {
      setSelected(false);
    }

    if (!tooltipText) {
      return <Component {...props} />;
    }

    return (
      <div
        onMouseOver={onSelect}
        onMouseMove={onSelect}
        onMouseOut={onUnselect}
        onBlur={onUnselect}
        onFocus={onFocus}
        className={rootClass}
      >
        <div className={styles.relative}>
          <Tooltip
            text={tooltipText}
            className={styles.tooltip}
            top={top}
            left={left}
          />
          <Component {...props} />
        </div>
      </div>
    );
  }
  return WrapperComponent;
}

export default withTooltip;
