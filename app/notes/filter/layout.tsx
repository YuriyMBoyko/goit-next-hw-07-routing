import type { ReactNode } from 'react';
import css from './LayoutNotes.module.css';

interface LayoutSidebarProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function LayoutSidebar({ children, sidebar }: LayoutSidebarProps) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}
