import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { deleteTask, checkTask, editTask } from '../../reducers/tasksSlice';

import trashIcon from './assets/trash3.svg';

import styles from './index.module.css';

export default function Task(props) {
  const { task } = props;
  const dispatch = useDispatch();

  const handleClickCheckbox = () => dispatch(checkTask({
    key: task.key,
    checked: !task.checked,
  }))
  const handleDeleteClick = () => dispatch(deleteTask({
    key: task.key
  }));
  const handleChange = (event) => {
    const text = event.target.value;

    dispatch(editTask({
      key: task.key,
      text,
    }))
  }
  debugger
  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        name="checknox"
        checked={task.checked}
        onClick={handleClickCheckbox}
        className={styles.task_checkBox}
      />
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        maxLength={200}
        value={task.text}
        className={classNames(styles.input, {
          [styles.task_text_checked]: task.checked,
        })}
      />
      <img
        src={trashIcon}
        alt="Trash"
        onClick={handleDeleteClick}
        className={styles.task_trashButton}
      />
    </div>
  );
}