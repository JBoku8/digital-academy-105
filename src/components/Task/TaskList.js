import PropTypes from 'prop-types';
import { useState } from 'react';

import { Button } from '../../atoms';

export const TaskList = ({ tasks, onTaskRemove, onTaskUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  console.log('__TaskList__', tasks);
  return (
    <div className="row">
      <ul className="list-group p-2">
        {tasks.map((task) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={task.id}
            >
              <div>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={task.done}
                  onChange={({ target }) => {
                    onTaskUpdate({
                      ...task,
                      done: target.checked,
                    });
                  }}
                />
                {/* როდესაც ხდება რედაქტირება ჩანავცლეს ეს ტექსტი ინპუთით */}
                <span className="ml-1">{task.text}</span>
              </div>
              <div>
                <Button
                  className="btn btn-outline-secondary"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Update' : 'Edit'}
                </Button>
                <Button
                  className="btn btn-outline-danger ml-1"
                  onClick={() => onTaskRemove(task.id)}
                >
                  Remove
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onTaskRemove: PropTypes.func.isRequired,
};
