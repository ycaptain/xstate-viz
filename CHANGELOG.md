# XState Visualizer

## 0.4.0

### Minor Changes

- [#209](https://github.com/statelyai/xstate-viz/pull/209) [`45cdb47`](https://github.com/statelyai/xstate-viz/commit/45cdb47349f2507ad3a8199d9938199f1261f11c) Thanks [@farskid](https://github.com/farskid)! - Embedded Mode!

  The visualizer/inspector can now be used in the embedded mode. In this mode, some parts of the application can be configured such as control buttons, panning, zooming, etc.
  The most important parameter to configure embedded mode it the `mode` that can be one of `viz`, `full` or `panels`.

* [#246](https://github.com/statelyai/xstate-viz/pull/246) [`22f1724`](https://github.com/statelyai/xstate-viz/commit/22f17242d85d86c6a3101900b0c90310d4c2b365) Thanks [@Andarist](https://github.com/Andarist)! - Added a hand icon to the canvas' toolbar:

  <img alt="Canvas toolbar with the hand icon" src="https://user-images.githubusercontent.com/9800850/133060078-30127739-1f8b-47fd-9f2b-308fc3c641bb.png" width="255" />

  This allows you to enable the "pan mode" to drag the canvas around without holding the spacebar button down at the same time.

### Patch Changes

- [#263](https://github.com/statelyai/xstate-viz/pull/263) [`4a0f041`](https://github.com/statelyai/xstate-viz/commit/4a0f041d52cb3c0c15d27244b83c41f5120bf28a) Thanks [@Andarist](https://github.com/Andarist)! - Fixed an issue with right-side panels getting cut off after stretching them and shrinking back with the resize handle.

* [#240](https://github.com/statelyai/xstate-viz/pull/240) [`fbb2f00`](https://github.com/statelyai/xstate-viz/commit/fbb2f006aebe5a0413f62274666cb69dcd00d0bc) Thanks [@mattpocock](https://github.com/mattpocock)! - Added support for using setInterval, setTimeout, clearInterval and clearTimeout in the viz.

- [#238](https://github.com/statelyai/xstate-viz/pull/238) [`e074059`](https://github.com/statelyai/xstate-viz/commit/e074059d45247de5fbea116449c093728b7d3e6f) Thanks [@mattpocock](https://github.com/mattpocock)! - When you press visualize, machines will now automatically 'fit to view'. This prevents various bugs around state machines appearing not to be visible, when they're actually just off screen.

* [#247](https://github.com/statelyai/xstate-viz/pull/247) [`bdbc892`](https://github.com/statelyai/xstate-viz/commit/bdbc892a010fc7dc3ef3f304348ecac60f62966e) Thanks [@Andarist](https://github.com/Andarist)! - Fixed an issue with the code editor becoming visually broken after saving a machine.

## 0.3.0

### Minor Changes

- [#215](https://github.com/statelyai/xstate-viz/pull/215) [`f030057`](https://github.com/statelyai/xstate-viz/commit/f0300575ca1e92c58cb0bcded8877d255530fe72) Thanks [@mattpocock](https://github.com/mattpocock)! - Added a welcome area for new users to help new folks understand what the viz can do.

  ![image](https://user-images.githubusercontent.com/28293365/130925861-93cd9ded-4126-4856-9e56-251c2a287478.png)

* [#210](https://github.com/statelyai/xstate-viz/pull/210) [`a8dbee6`](https://github.com/statelyai/xstate-viz/commit/a8dbee6b6c9aa44050d6da075ff86e7e61bbe869) Thanks [@davidkpiano](https://github.com/davidkpiano)! - You can now click the **Fit to view** button to fit your entire diagram into view:

  https://user-images.githubusercontent.com/1093738/130982742-f9523cd9-ca51-4981-ae94-68ba72971577.mp4

### Patch Changes

- [#203](https://github.com/statelyai/xstate-viz/pull/203) [`fd35c53`](https://github.com/statelyai/xstate-viz/commit/fd35c53c0d69b3fe57573c1699966dbcf157c35d) Thanks [@Andarist](https://github.com/Andarist)! - Fixed an issue with action buttons for the editor being often left out of the screen after viewport resizes.

* [#208](https://github.com/statelyai/xstate-viz/pull/208) [`a1b7379`](https://github.com/statelyai/xstate-viz/commit/a1b73790c2e09e30765d5e86f86fe40d019b0138) Thanks [@Andarist](https://github.com/Andarist)! - Fixed an issue with global keybindings being also triggered when providing input to input-like elements.

- [#228](https://github.com/statelyai/xstate-viz/pull/228) [`7ca7e9a`](https://github.com/statelyai/xstate-viz/commit/7ca7e9a83a8e8e3d8ce5c43890aa39d6b09a17ce) Thanks [@davidkpiano](https://github.com/davidkpiano)! - The layout algorithm was parenting some of the edges incorrectly. This has been fixed.

  ![CleanShot 2021-08-30 at 07 14 58](https://user-images.githubusercontent.com/1093738/131331546-4a780c96-c58e-498e-aeaa-f44dc5e81fb4.png)

## 0.2.0

### Minor Changes

- [#190](https://github.com/statelyai/xstate-viz/pull/190) [`fd64139`](https://github.com/statelyai/xstate-viz/commit/fd64139f20325532e954b8c37fc3a996b522d83a) Thanks [@davidkpiano](https://github.com/davidkpiano)! - In the visualized machine, the entire event is now clickable.

* [#189](https://github.com/statelyai/xstate-viz/pull/189) [`77e808b`](https://github.com/statelyai/xstate-viz/commit/77e808bdf13dc334d06736030d09c28724f23e06) Thanks [@davidkpiano](https://github.com/davidkpiano)! - Styles for invoked actors are now consistent with other action styles.

- [#182](https://github.com/statelyai/xstate-viz/pull/182) [`80f6966`](https://github.com/statelyai/xstate-viz/commit/80f69666118ce4edffb14cf822ab36eda7a2ec46) Thanks [@Andarist](https://github.com/Andarist)! - All keyboard shortcuts and keyboard-based interactions should now only allow platform-specific meta keys to be used. That means that on Mac they work with <kbd>CMD</kbd> and on other platforms they work with <kbd>Ctrl</kbd>.

* [#192](https://github.com/statelyai/xstate-viz/pull/192) [`87ffc50`](https://github.com/statelyai/xstate-viz/commit/87ffc50938f7670ff16d5cdfd1fa540e7baca79f) Thanks [@davidkpiano](https://github.com/davidkpiano)! - Sometimes, initial states will end up in an unexpected place, such as all the way to the right of the graph. This was due to the graph layout algorithm trying to prioritize _all_ transitions to point to the right, even transitions cycling back to the initial state. Now, transitions coming from the initial state are prioritized over all others, to ensure that the initial state ends up in an expected top-left placement.

### Patch Changes

- [#186](https://github.com/statelyai/xstate-viz/pull/186) Thanks [@santicros](https://github.com/santicros)! - Fixed an issue which caused browsers to zoom together with the visualization canvas when zooming using wheel.

* [#187](https://github.com/statelyai/xstate-viz/pull/187) [`1d69848`](https://github.com/statelyai/xstate-viz/commit/1d6984804fd29592c58ccb474693df43540d7215) Thanks [@Andarist](https://github.com/Andarist)! - Fixed an issue with inspector crashing on some inline action objects used in the config.

- [#195](https://github.com/statelyai/xstate-viz/pull/195) [`3ed3c0d`](https://github.com/statelyai/xstate-viz/commit/3ed3c0d02640c243cec08b21fd2d514727c1a7fd) Thanks [@davidkpiano](https://github.com/davidkpiano)! - The graph layout algorithm (using ELK) is now more resilient to layout failures caused by some layout options (such as compaction), so heuristics have been applied that make it more resilient to potential layout failures.

## 0.1.0

Initial release of the new Visualizer.
