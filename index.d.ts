import * as React from 'react';

interface ModalTrackingProps {
  /**
   * Control Modal visibility
   * @default false
   */
  isVisible: boolean;

  /**
   * Text for button
   * @default "Habilitar"
   */
  textButton: string;

  /**
   * Message Description
   * @default "Habilite o tracking para que o app funcione corretamente."
   */
  description: number;
}

export class ModalTracking extends React.Component<ModalTrackingProps> {}


type TrackingStatusEnum = {
  UNAVAILABLE: string;
  DENIED: string;
  AUTHORIZED: string;
  RESTRICTED: string;
  NOT_DETERMINED: string;
};

export const Tracking: TrackingStatusEnum;
