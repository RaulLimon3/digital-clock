# 🕑 Digital clock

A lightweight, responsive digital clock built with vanilla JavaScript and React. It displays the current day, full date, and time, automatically switching to a dark theme in the evening and early morning.

---

## 🚀 Live Demo

🔗  [JavaScript Version](https://digital-clock-ten-alpha.vercel.app)

---

## 📸 Screenshots

![Mobile](./screenshots/mobile-design.png)
![Dark mode](./screenshots/dark-mode.png)
![Responsive design](./screenshots/responsive-design.png)

---

## Project Overview

This project was initially developed with vanilla JavaScript and later migrated to React to explore component-based architecture and state management. Both versions display the current day, full date, and time, updating every second and switching to a dark theme based on the time of day.

---

## ✨ Features

- Displays the current day, full date, and time.
- Updates the clock every second.
- Switches to a dark theme from 6:00 PM to 7:59 AM.
- Adapts to mobile and desktop screens.

---

## 🛠️ Tech Stack

### Vanilla

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Vite
- Schibsted Grotesk

### React

- React
- JavaScript (ES6+)
- CSS3
- Vite
- React Hooks (useState, useEffect)
- Schibsted Grotesk


---

## 📁 Project Structure

```
digital-clock/
├── react/
│   ├── public/
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   ├── src/
│   │   ├── assets/
│   │   │   └── fonts/
│   │   │       ├── Schibsted_Grotesk/
│   │   │       ├── static/
│   │   │       ├── SchibstedGrotesk-Italic-VariableFont_wght.ttf
│   │   │       └── SchibstedGrotesk-VariableFont_wght.ttf
│   │   ├── css/
│   │   │   └── base/
│   │   │       ├── font.css
│   │   │       └── reset.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
├── screenshots/
│   ├── dark-mode.png
│   ├── mobile-design.png
│   └── responsive-design.png
├── vanilla/
│   ├── public/
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   ├── src/
│   │   ├── assets/
│   │   │   └── font/
│   │   │       ├── Schibsted_Grotesk/
│   │   │       ├── static/
│   │   │       ├── SchibstedGrotesk-Italic-VariableFont_wght.ttf
│   │   │       └── SchibstedGrotesk-VariableFont_wght.ttf
│   │   ├── css/
│   │   │   ├── base/
│   │   │   │   ├── fonts.css
│   │   │   │   ├── normalize.css
│   │   │   │   └── reset.css
│   │   │   └── main.css
│   │   ├── main.js
│   │   └── style.css
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🎯 Learning Objectives

### JavaScript

- Work with the `Date` object.
- Select and update elements in the DOM.
- Update content at regular intervals with `setInterval`.
- Format dates and times with the `Intl` API.
- Toggle CSS classes based on the current time.

### React

- Understand React's component-based architecture.
- Manage component state with `useState`.
- Handle side effects and lifecycle behavior with `useEffect`.
- Update the UI reactively through state changes.
- Work with JavaScript's `Date` object in React.
- Implement dynamic CSS classes based on component state.

---

## 🔮 Future Improvements

- Add a stopwatch.
- Add a countdown timer.
- Add Tailwind CSS to the React version.

---

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm

### Vanilla JavaScript

1. Clone the repository:

```bash
   git clone https://github.com/RaulLimon3/digital-clock.git
```

2. Navigate to the Vanilla project:

```bash
   cd digital-clock/vanilla
```

3. Install dependencies:

```bash
   npm install
```

4. Start the development server:

```bash
   npm run dev
```

### React

1. Clone the repository:

```bash
   git clone https://github.com/RaulLimon3/digital-clock.git
```

2. Navigate to the React project:

```bash
   cd digital-clock/react
```

3. Install dependencies:

```bash
   npm install
```

4. Start the development server:

```bash
   npm run dev
```

---

## 👨‍💻 Author

Developed by **Raúl Limón**  
Frontend Developer focused on building scalable and maintainable web applications while continuously improving JavaScript and frontend architecture skills.

- GitHub: [RaulLimon3](https://github.com/RaulLimon3)  
- LinkedIn: [Raúl Limón](https://www.linkedin.com/in/raul-limon-garcia/)