import { useSelector } from 'react-redux';

import Task from '../Task';

import styles from './index.module.css';

export default function Tasks() {
  const tasks = useSelector(state => state.tasks.items);

  return (
    <div className={styles.tasks}>
      {tasks.map(task => (
        <Task task={task} key={task.key}/>
      ))}
    </div>
  );
}
