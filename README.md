# Trip at

**Trip at** is a simple web application that allows you to mark and save the places you have visited on a map. You can log in using your Google account, and your data is securely stored with Firebase.

## Technologies:

The project was developed using a variety of technologies, including:

- HTML
- CSS
- JavaScript (JS)
- TypeScript (TS)
- React

### Additional Packages:

The following packages were utilized in the development process, and you can find them listed in the `dependencies` section of the `package.json` file.

## Live Demo

The project is deployed and can be accessed live on Vercel. You can view the live site by visiting the following link:  
[Live Site on Vercel](https://trip-at.vercel.app/)  
This link takes you to the current version of the application hosted on Vercel, allowing you to interact with the fully functional Trip At without needing to install or set up the project locally.

## Installation

To run this project on your local machine, follow these steps:

1. Clone this repository:
   `git clone https://github.com/ParvizAzeroglu/Trip-at.git`

2. Navigate to the cloned directory:
   `cd Trip-at`

3. Install the project dependencies:
   `npm install`

4. Start the development server:
   `npm run dev`

- [Leaflet](https://leafletjs.com/): An open-source JavaScript library for interactive maps.
- [React Hot Toast](https://react-hot-toast.com/): A customizable toast notification library for React.
- [React Router DOM](https://reactrouter.com/): A collection of navigational components for React applications.
- [Universal Cookie](https://www.npmjs.com/package/universal-cookie): A package for handling cookies in both server and client-side React applications.

Feel free to explore the project and contribute to its development!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
