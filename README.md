# Nexora Landing Page

Professional React + TypeScript landing page for **Nexora**, an AI-powered productivity platform for modern teams.

## Setup

1. Install dependencies:
   - `npm install`
2. Run development server:
   - `npm start`
3. Build for production:
   - `npm run build`

## Tech Stack

- React 18 + TypeScript
- styled-components (all styling)
- Ant Design
- react-awesome-reveal
- i18next + react-i18next
- react-router-dom with lazy route loading

## Content Management

- All UI content is stored in:
  - `src/content/en.json`
- i18next translation source:
  - `src/translation/en.json`
- Update text in JSON files without modifying component logic.

## Theme / Colors

- Main color tokens are in:
  - `src/styles/theme.ts`
- Adjust brand palette, typography, spacing, and shadows from that file.

## Contact Form Endpoint

Set environment variable before running:

- `REACT_APP_CONTACT_ENDPOINT`

The contact section posts form payloads to this endpoint.
