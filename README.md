# nothings-happening

When you don't really care what's happening on Twitter.

The reason this is needed: Twitter obfuscates their CSS so that css-targeting ad-blockers can't easily remove ads. This also applies to their sidebars. So instead we use the perceptual ad blocking method to target the span with the "What's happening" text.

Twitter will aggressively try to re-insert this div when you change views (almost every click), so I have it running on a `setInterval` right now. Less intrusive metholodogies are welcome.

Install as a developer extension: clone this repo, go to Extensions in Chrome, ensure developer mode is enabled, hit "Load Unpacked Extension", and point to the folder where you cloned this.

This software is provided "as if".
