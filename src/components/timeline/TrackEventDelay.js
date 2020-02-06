/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @flow

import * as React from 'react';
import explicitConnect from '../../utils/connect';
import { TrackEventDelayGraph } from './TrackEventDelayGraph';
import {
  TRACK_MEMORY_GRAPH_HEIGHT,
  TRACK_MEMORY_LINE_WIDTH,
} from '../../app-logic/constants';

import type { ThreadIndex } from 'firefox-profiler/types';
import type { ConnectedProps } from '../../utils/connect';

import './TrackMemory.css';

type OwnProps = {|
  +threadIndex: ThreadIndex,
|};

type Props = ConnectedProps<OwnProps, {||}, {||}>;

export class TrackEventDelayImpl extends React.PureComponent<Props, {||}> {
  render() {
    const { threadIndex } = this.props;
    const graphHeight = TRACK_MEMORY_GRAPH_HEIGHT + 15;
    return (
      <div
        className="timelineTrackMemory"
        style={{
          height: graphHeight,
          '--graph-height': `${graphHeight}px`,
          '--markers-height': `0px`,
        }}
      >
        <TrackEventDelayGraph
          threadIndex={threadIndex}
          lineWidth={TRACK_MEMORY_LINE_WIDTH}
          graphHeight={graphHeight}
        />
      </div>
    );
  }
}

export const TrackEventDelay = explicitConnect<OwnProps, {||}, {||}>({
  component: TrackEventDelayImpl,
});
