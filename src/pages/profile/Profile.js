import { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms';
import { Task } from '../../components/Task';
import ProfileChildComponent from './ProfileChildComponent';
import ProfileChildComponentSecond from './ProfileChildComponentSecond';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Profile = ({ title }) => {
  const [username, setUserName] = useState('');
  const [color, setColor] = useState('red');

  const params = useMemo(
    () => ({
      color,
    }),
    [color]
  );

  const onClick = useCallback(() => {
    console.log('USE CALLBACK');
  }, []);

  const newList = useMemo(() => {
    return list.reduce((a, v) => a + v, 0);
  }, []);

  console.log('__PROFILE_RENDER__', newList);

  return (
    <div className="row p-2">
      <div className="row">
        <Task />
      </div>
      <hr />
      <h1>UserName: {username}</h1>
      <h3>{title}</h3>
      <div className="row">
        <div className="col-4">
          <input className="form-control" onChange={({ target }) => setUserName(target.value)} />
        </div>
        <div className="col-4">
          <Button
            className="btn btn-outline-secondary"
            onClick={() => setColor(color === 'red' ? 'green' : 'red')}
          >
            Change Color
          </Button>
        </div>
        <div className="col-4">
          <ProfileChildComponent params={params} onClick={onClick} newList={newList} />
        </div>
        <div className="col-4">
          <ProfileChildComponentSecond />
        </div>
      </div>
    </div>
  );
};

// red->green->red->green -> ცუდი ვარიანტი
// red->red->red->green -> კარგი ვარიანტი

Profile.propTypes = {
  title: PropTypes.string.isRequired,
};
