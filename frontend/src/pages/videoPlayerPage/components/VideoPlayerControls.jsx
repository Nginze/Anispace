import {React, useState} from "react";
import {
  Controls,
  PlaybackControl,
  Control,
  Scrim,
  ScrubberControl,
  ControlSpacer,
  VolumeControl,
  SettingsControl,
  DefaultUi,
  FullscreenControl,
  CurrentTime,
  EndTime,
  ControlGroup,
  TimeProgress,
  PipControl,
  CaptionControl,
  Tooltip,
} from '@vime/react';



const VideoPlayerControls = () => {
  const isMobile = false;
  return (
    <DefaultUi noControls>
      {/* Center Controls for play/pause and changing episode */}
      <Controls
        align="center"
        pin="center"
        justify="space-evenly"
        style={{
          '--vm-controls-spacing': '80px',
        }}
      >
        <Control
          // onClick={() => dispatch(decrementEpisode())}
          keys="p"
          label="Previous Episode"
        >
          {/* <ChevronDoubleLeftIcon className="w-9 text-white" /> */}
          <Tooltip>previous(p)</Tooltip>
        </Control>

        <PlaybackControl hideTooltip keys="k/ " />

        <Control
          // onClick={() => dispatch(incrementEpisode())}
          keys="n"
          label="Next Episode"
        >
          {/* <ChevronDoubleRightIcon className="w-9 text-white" /> */}
          <Tooltip className="text-xs">next(n)</Tooltip>
        </Control>
      </Controls>

      {/* Default Controls */}

      {isMobile && (
        <Controls pin="topLeft">
          <ControlSpacer />
          <VolumeControl />
          <SettingsControl />
        </Controls>
      )}

      <Controls
        pin="bottomLeft"
        direction={isMobile ? 'column' : 'column-reverse'}
      >
        <ControlGroup space={isMobile ? 'none' : 'top'}>
          {!isMobile && (
            <>
              <PlaybackControl keys="k/ " tooltipDirection="right" />
              <VolumeControl />
            </>
          )}

          {!isMobile ? (
            <>
              <TimeProgress />
              <ControlSpacer />
            </>
          ) : (
            <>
              <CurrentTime />
              <ControlSpacer />
              <EndTime />
            </>
          )}

          {!isMobile && (
            <>
              <CaptionControl />
              <PipControl keys="i" />
              <SettingsControl />
            </>
          )}

          <FullscreenControl tooltipDirection="left" />
        </ControlGroup>

        <ControlGroup>
          <ScrubberControl />
        </ControlGroup>
      </Controls>
    </DefaultUi> 
  );
};

export default VideoPlayerControls;
