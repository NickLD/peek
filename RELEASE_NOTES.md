## What's new in v0.4.5

**Overlay placement**
- Put the overlay wherever you want, on any monitor. Open the menu bar icon, choose "Set overlay position...", drag the window into place and lock it there.
- The spot is remembered per display and survives restarts. "Reset overlay position" brings back the default corner.

**Camera aspect ratio**
- The overlay now matches the shape of each camera, so 4:3, 16:9 and 21:9 feeds are shown in full instead of being cropped or stretched.
- When the overlay is locked in place it grows from its anchored corner, so it never drifts off its spot.
- Toggle "Match camera aspect ratio" in the menu bar or Settings to keep a fixed size instead.

**Cameras**
- Cameras are now read straight from your Frigate config, so a newly added camera shows up right away without waiting for its first detection.
- The camera picker in Settings is now a single multi select list.

Thanks to @carlmozo-sketch and @NickLD for the placement idea, and @sunfirester for the aspect ratio request.
