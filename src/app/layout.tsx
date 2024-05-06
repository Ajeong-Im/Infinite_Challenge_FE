import { ReactNode } from "react";
import "./globals.css";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div className="text-red-600">왜 안 됨?</div>
        {children}
      </body>
    </html>
  );
}
