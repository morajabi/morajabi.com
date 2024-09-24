import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';
import './style.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/favicon-180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="152x152"
          href="/icons/favicon-152.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="195x195"
          href="/icons/favicon-195.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/icons/favicon-196.png"
        />
        <meta name="msapplication-TileImage" content="/icons/favicon-152.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16.png"
        />

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
