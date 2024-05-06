import { ReactNode } from "react";
import NavBar from "@/app/(route)/_component/NavBar";

type Props = { children: ReactNode };

export default function layout({ children }: Props) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>{children}</div>
    </div>
  );
}
