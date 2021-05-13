import * as React from 'react';
import { TrackingStatus } from 'react-native-tracking-transparency';

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

export async function getTrackingTransparencyStatus(): Promise<TrackingStatus>;
export async function requestTrackingTransparencyPermission(): Promise<TrackingStatus>;


type TrackingStatusEnum = {
  UNAVAILABLE: string;
  DENIED: string;
  AUTHORIZED: string;
  RESTRICTED: string;
  NOT_DETERMINED: string;
};

export const Tracking: TrackingStatusEnum;
