import React from 'react';
import { withKnobs, color } from '@storybook/addon-knobs';
import Avatar from '../components/avatar/avatar-with-tooltip';
import ImageWithTooltip from '../components/image/image-with-tooltip';

export default {
  title: 'Tooltip',
  decorators: [withKnobs],
};

export const withIcon: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ width: '45px' }}>
      <Avatar
        iconKey="paper-plane"
        color="#5644D8"
        tooltipText="Friendly tooltip"
      />
    </div>
    <br />
    <div style={{ width: '45px' }}>
      <Avatar
        iconKey="clock"
        color={color('Background', '#7BC4A9')}
        tooltipText="Friendly tooltip"
      />
    </div>
    <div style={{ width: '45px' }}>
      <Avatar
        iconKey="salesforce"
        color="#18a8d8"
        isBrandIcon
        tooltipText="Friendly tooltip"
      />
    </div>
    <div style={{ width: '45px' }}>
      <Avatar
        iconKey="magento"
        color="#c14800"
        isBrandIcon
        tooltipText="Friendly tooltip"
      />
    </div>
    <div style={{ width: '32px' }}>
      <Avatar
        isSmallIcon
        iconKey="paper-plane"
        color="#5644D8"
        tooltipText="Friendly tooltip"
      />
    </div>
    <div style={{ width: '32px' }}>
      <Avatar
        isSmallIcon
        iconKey="clock"
        color={color('Background', '#7BC4A9')}
        tooltipText="Friendly tooltip"
      />
    </div>
    <div style={{ width: '32px' }}>
      <Avatar
        isSmallIcon
        iconKey="salesforce"
        color="#18a8d8"
        isBrandIcon
        tooltipText="Friendly tooltip"
      />
    </div>
    <div style={{ width: '32px' }}>
      <Avatar
        isSmallIcon
        iconKey="magento"
        color="#c14800"
        isBrandIcon
        tooltipText="Friendly tooltip"
      />
    </div>
  </div>
);

export const withImage: React.FC = () => (
  <div>
    <div style={{ width: '300px' }}>
      <ImageWithTooltip
        src="https://global-uploads.webflow.com/5873645dcda6383b06dc220a/5b9a825ea6ef6021d01d6774_DIXA-426-2.jpg"
        tooltipText="Keneth Johnson"
      />
    </div>
    <br />
    <div style={{ width: '200px' }}>
      <ImageWithTooltip
        src="https://global-uploads.webflow.com/5873645dcda6383b06dc220a/5b645adbc899f51886b6f1dd_DSC_4137.jpg"
        tooltipText="Mark Gregorsen"
      />
    </div>
  </div>
);
