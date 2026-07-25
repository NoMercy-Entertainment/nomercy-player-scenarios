// -----------------------------------------------------------------------------
//  Copyright (c) NoMercy Entertainment
//
//  Licensed under the Apache License, Version 2.0. See LICENSE for details.
//
//  SPDX-License-Identifier: Apache-2.0
// -----------------------------------------------------------------------------

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here: string = dirname(fileURLToPath(import.meta.url));

export const REPO_ROOT: string = resolve(here, '..', '..', '..');
export const CONTRACT_PATH: string = resolve(REPO_ROOT, 'tools', 'player-contract', 'contract', 'contract.json');
export const SCENARIOS_PATH: string = resolve(here, '..', 'scenarios', 'scenarios.json');
