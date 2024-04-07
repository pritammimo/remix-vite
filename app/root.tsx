import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
const queryClient = new QueryClient();
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
  return  <QueryClientProvider client={queryClient}>
  <Outlet/>
</QueryClientProvider>
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
