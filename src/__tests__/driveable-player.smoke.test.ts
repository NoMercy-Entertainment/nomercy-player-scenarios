// -----------------------------------------------------------------------------
//  Copyright (c) NoMercy Entertainment
//
//  Licensed under the Apache License, Version 2.0. See LICENSE for details.
//
//  SPDX-License-Identifier: Apache-2.0
// -----------------------------------------------------------------------------

import { describe, expect, it } from 'vitest';

import { buildVideoPlayer } from '../players/video';

describe('driveable player seam', () => {
  it('a real NMVideoPlayer + fake backend emits the canonical play sequence', async () => {
    const { player, dispose } = await buildVideoPlayer({ playlist: [{ id: 'a', title: 'A' }], config: {} });
    const seen: string[] = [];
    player.on('all', (name: string) => seen.push(name));

    await player.play();

    // core transport emits beforePlay → play; the fake backend re-emits playing
    expect(seen).toContain('beforePlay');
    expect(seen).toContain('play');
    expect(seen).toContain('playing');
    expect(seen.indexOf('beforePlay')).toBeLessThan(seen.indexOf('play'));
    await dispose();
  });
});
