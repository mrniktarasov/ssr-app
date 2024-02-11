import {v4 as uuidv4} from 'uuid';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';

import Tasks from './components/Tasks';

import { addTask } from './reducers/tasksSlice';

function Home() {
  const dispatch = useDispatch();

  const handleClick = () => {
    const task = {
      key: uuidv4(),
      text: null,
      checked: false
    };

    dispatch(addTask(task))
  }

  return (
    <div>
      <h3>Add task</h3>
      <Tasks />
      <Button
        variant='secondary'
        onClick={handleClick}
      >
        Add task
      </Button>
    </div>
  );
};
  
export default Home;