# Neon Wars

Mobile-first horizontal AFK auto-battler prototype for Yandex Games hypothesis testing.

## Current prototype

- 5 VANTA operators vs 5 hostile units
- Landscape layout for smartphones and desktop
- Touch-first formation editing
- Auto battle with attacks, modules, energy and combat protocols
- Narrative sectors, operations, threat levels and hostile factions
- Operator dossiers, callsigns and class terminology
- Victory / defeat debrief flow
- Credits, operator clearance levels and persistent local progress
- Responsive canvas without side letterboxing

## Neon Wars terminology

The prototype intentionally avoids generic fantasy-RPG language. Player-facing terms include **Оперативник**, **Отряд**, **Дислокация**, **Сектор**, **Боевой рейтинг**, **Модификация**, **Модуль** and **Протокол**. The working narrative system and naming rules are documented in `docs/NARRATIVE_SYSTEM.md`.

## Project structure

- `index.html` — page shell
- `styles.css` — responsive mobile/desktop UI
- `js/migrate.js` — local save migration
- `js/data.js` — operators, sectors, terminology and UI state
- `js/battle.js` — autobattle and progression logic
- `js/render.js` — canvas battlefield and pixel-style rendering
- `js/app.js` — touch controls and application wiring

The build has no external runtime dependencies.

## Mobile test

The live prototype is published through GitHub Pages from the `main` branch.

On a phone, rotate to landscape. Tap an operator card or an operator on the battlefield, then tap another operator to swap their positions. Press **НАЧАТЬ ОПЕРАЦИЮ** to launch the 5v5 autobattle. Select an operator and use **МОДИФИКАЦИЯ** to improve their clearance level.

Progress is stored locally in the browser. Existing progress from the earlier prototype save format is migrated automatically.

## Current hypothesis

The prototype is testing whether three things are strong enough to support a larger AFK RPG:

1. Watching a short autonomous 5v5 battle is satisfying.
2. Formation changes meaningfully affect the result.
3. The player wants to improve the squad and continue into another sector.
