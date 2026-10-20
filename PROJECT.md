# Choorlak

Choorlak is a restaurant management and online ordering website.

This project uses:

- React (JavaScript + JSX)
- Vite
- Tailwind CSS
- React Router
- JSON files for text and starter data

No Redux. Most UI state uses `useState`.

---

## How to run

In the project folder, run:

```bash
npm install
npm run dev
```

Then open the local URL (usually `http://localhost:5173` or `http://localhost:5174`).

---

## Main folders

| Folder / file | What it is for |
|---------------|----------------|
| `src/pages/` | One file per page (Home, Features, Contact, …) |
| `src/components/layout/` | Navbar (and later Footer) |
| `src/components/home/` | Home sections, like the hero |
| `src/data/` | JSON content, such as `siteContent.json` |
| `src/theme/colors.js` | Brand colors for JavaScript |
| `src/index.css` | Same brand colors for Tailwind classes |
| `src/assets/` | Logo and images |

---

## Brand colors

Keep these the same in `src/theme/colors.js` and `src/index.css`.

| Name | Hex | Example class |
|------|-----|----------------|
| primary | `#D71920` | `bg-primary` |
| primaryHover | `#B8141A` | `hover:bg-primary-hover` |
| black | `#0B0B0C` | `bg-black` |
| white | `#FFFFFF` | `bg-white` |
| textDark | `#111111` | `text-text-dark` |
| textLight | `#FFFFFF` | `text-text-light` |
| textMuted | `#6B7280` | `text-text-muted` |
| grayLight | `#F5F5F5` | `bg-gray-light` |
| border | `#E5E5E5` | `border-border` |

Use these classes instead of default Tailwind colors like `red-600` or `gray-900`.

---

## Routes

| URL | Page |
|-----|------|
| `/` | Home |
| `/features` | Features |
| `/online-ordering` | Online Ordering |
| `/how-it-works` | How It Works |
| `/contact` | Contact |

---

## What is done

- Vite + React project setup
- Tailwind and React Router
- Theme colors
- Navbar (desktop + mobile slide menu + overlay)
- Home hero section (video, heading, live rail card)
- Empty placeholder pages for the other routes

## What is not done yet

- Footer
- Full Features, Online Ordering, How It Works, and Contact pages
- Extra Home sections after the hero

---

## Simple React ideas used so far

- **`useState`** — remembers if the mobile menu is open or closed
- **Event handler** — `onClick` opens, closes, or navigates
- **Conditional class names** — slide the menu with `translate-x-0` vs `translate-x-full`
- **React Router** — `NavLink` and `Routes` change pages without a full reload
