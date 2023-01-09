import { PropsWithChildren } from "react";

export type LayoutProps = PropsWithChildren & {};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-black flex flex-col">
      <section className="flex flex-row p-2 bg-dark-grey sticky top-0">
        <nav>
          <ul>
            <li className="text-white font-bold text-lg">
              <a href="/" className="hover:text-orange">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </section>
      {children}
    </div>
  );
}
