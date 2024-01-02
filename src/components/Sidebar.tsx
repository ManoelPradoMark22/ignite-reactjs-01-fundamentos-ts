import { PencilLine } from '@phosphor-icons/react';

import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/ManoelPradoMark22.png" />

        <strong>Manoel Prado</strong>
        <span>FullStack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}