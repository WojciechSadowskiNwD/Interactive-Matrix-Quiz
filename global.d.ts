declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "react-player" {
  import * as React from "react";

  export interface ReactPlayerProps {
    url?: string | string[];
    playing?: boolean;
    controls?: boolean;
    width?: number | string;
    height?: number | string;
    volume?: number;
    muted?: boolean;
    loop?: boolean;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onError?: (error: any) => void;
  }

  const ReactPlayer: React.FC<ReactPlayerProps>;
  export default ReactPlayer;
}