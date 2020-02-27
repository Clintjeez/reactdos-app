import React from 'react';
import { firebase } from '../../firebase';

const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase
      .firebase()
      .collection('tasks')
      .doc(id)
      .update({
        archived: true,
      });
  };

  return (
    <div className="checkbox-holder" data-testid="checkbox-action" onClick={() => archiveTask()}>
      <span className="checkbox" />
    </div>
  )
}

export default Checkbox;