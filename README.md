# Neon Wars

Mobile-first horizontal AFK auto-battler prototype for hypothesis testing.

## Prototype scope

- 5 heroes vs 5 enemies
- Landscape 16:9 layout
- Touch-first formation editing
- Auto battle with basic attacks, skills, energy and ultimates
- Victory / defeat flow
- Simple rewards and persistent upgrades via localStorage

The first goal is to test whether formation changes and team progression make the auto-battle loop engaging on a smartphone.

## Mobile test

The prototype is intentionally dependency-free: the whole playable build is in `index.html`.

For a permanent browser link, enable **Settings → Pages → Build and deployment → Source: GitHub Actions** for this repository. The included workflow will then deploy the current `main` branch.

On a phone, rotate to landscape. Tap a hero card or a hero on the field, then tap another hero to swap positions. Press **НАЧАТЬ БОЙ** to launch the 5v5 auto-battle. Credits earned from battles can be used to upgrade a selected hero; stage, credits, levels and formation are stored locally in the browser.
