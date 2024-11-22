# Debatables

Debatable is a registered concept designed to create a social media space for spirited, respectful debates on the latest U.S. news. Drawing inspiration from diverse outlets like Fox News and CNN, it champions free speech while fostering civil discussions.

[Watch the Demo](...)
[Live website here](https://debatables-nine.vercel.app/)

## Table of Contents
* [Images](#images)
* [Getting Started](#getting-started)
* [Technology Stack](#technology-stack)
* [Technical Issuee](#technical-issuee)

## Images

![example 1](https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/debatables/Screenshot%20from%202024-11-22%2001-15-31.png)
![example 2](https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/debatables/Screenshot%20from%202024-11-22%2001-15-39.png)
![example 3](https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/debatables/Screenshot%20from%202024-11-22%2001-15-55.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

### Core Dependencies:
- Next.js (14.2.10): A powerful React framework for building server-rendered and statically generated web applications.
- React (18.3.1) and React-DOM (18.3.1): The foundational libraries for building user interfaces and managing DOM rendering.
- Framer Motion (11.11.17): For creating fluid animations and interactive user experiences.
- React-Scan (0.0.13): Provides advanced utilities for analyzing React applications.

### Testing Tools:
- Jest (29.7.0) and Jest-Environment-JSDOM (29.7.0): Used for unit and integration testing in a browser-like environment.
- @testing-library/react (16.0.1), @testing-library/dom (10.4.0), and @testing-library/jest-dom (6.6.3): Facilitate robust testing of React components with a focus on accessibility and user interaction.
- @testing-library/react-hooks (8.0.1): For testing custom hooks effectively.

### Development Tools:
- ESLint (8.x) and ESLint-Config-Next (14.2.11): Ensure code quality and enforce best practices specific to Next.js and React.
- Babel-Jest (29.7.0): Integrates Babel with Jest to handle modern JavaScript features during tests.
- Identity-Obj-Proxy (3.0.0): Simplifies testing by mocking CSS module imports during development.

## Technical Issuee

In the browser's console log, we are seeing the following warning:
Warning: Extra attributes from the server: data-new-gr-c-s-check-loaded, data-gr-ext-installed, cz-shortcut-listen, data-lt-installed

This issue is typically caused by browser extensions adding extra attributes when the code is executed in the browser, which creates a mismatch between the content rendered on the server and the client.

Extensions like Grammarly, ColorZilla, and LanguageTool are common culprits of this warning. To resolve it, identify which extension is adding these attributes and either disable it or configure it to not run on the ports you typically use for development. This is the recommended fix since it's best practice to avoid using browser extensions during development.

### Solution

To suppress hydration warnings caused by mismatched attributes, you can set the `suppressHydrationWarning` attribute to `true`. Add it to the opening `<body>` tag in your `RootLayout` component as shown below:

```js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
```

In some cases, if the attributes are added to the <html> tag, you may need to apply the attribute there instead:

```js
<html lang="en" suppressHydrationWarning={true}>
```

This approach will suppress the hydration warnings and allow your application to render without issues.
