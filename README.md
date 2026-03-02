# LogicThink

A modern React application built with [Vite](https://vite.dev) and [Tailwind CSS](https://tailwindcss.com).

## Features

- ⚡ **Vite** - Next generation frontend tooling
- ⚛️ **React 19** - Modern JavaScript library
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔄 **Hot Module Replacement (HMR)** - Fast refresh during development

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
logicthink/
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # App styles
│   ├── index.css        # Global styles with Tailwind directives
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## Styling

This project uses Tailwind CSS for styling. All styles are applied using utility classes directly in the JSX markup. See the [Tailwind documentation](https://tailwindcss.com/docs) for more information.

## Contributing

Feel free to fork this project and submit pull requests.

## License

This project is open source and available under the MIT License.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
