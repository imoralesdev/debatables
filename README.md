This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Note:

Warning: Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed,cz-shortcut-listen,data-lt-installed

This is usually caused by an extension passing these extra attributes with your code when it is executed on the browser trying to interact with the UI, this creates a mismatch between what was rendered on the server and what is rendered on the client.

Extensions similar to Grammarly, ColorZilla and LanguageTool are therefore the cause of this warning, so you have to find out which one is doing this and then disable/configure it to not run on the ports you usually use for development. This is the straightforward fix for the warning, since it is always recommended to avoid extensions in development.

Solution:

You can suppress hydration warnings by setting suppressHydrationWarning to true in the opening <body> tag of the RootLayout:

export default RootLayout({ children }) {
  return (
   <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
sometimes you have to put it in the opening <html> tag if attributes are added there

<html lang="en" suppressHydrationWarning={true}>