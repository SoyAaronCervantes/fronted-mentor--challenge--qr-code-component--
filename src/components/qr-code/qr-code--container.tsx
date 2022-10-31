import React from 'react';
import { QrCodeWidget } from './qr-code--widget';

import { CardTitle } from '../card/card--title';
import { CardContent } from '../card/card--content';

export const QrCodeContainer = () => {
  return (
    <>
      <QrCodeWidget />
      <div className="[ card--content ] [ flex--content ]">
        <CardTitle />
        <CardContent />
      </div>
    </>
  );
};
