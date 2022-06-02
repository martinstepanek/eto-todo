import React, { FC } from 'react';
import { Task } from '../../types/Task';
import CheckBoxOption from '../../../../base/form/CheckBoxOption';
import { useMutation } from '@apollo/client';
import { taskLocalOperation } from '../../operations/taskLocalOperation';
import MARK_TASK_AS_DONE from '../../operations/markTaskAsDone';
import { TaskEntryInput } from '../../types/TaskEntryInput';
import MARK_TASK_AS_NOT_DONE from '../../operations/markTaskAsNotDone';

interface TaskItemProps {
  task: Task;
}

const TaskItem: FC<TaskItemProps> = ({ task, ...props }) => {
  const checkBoxId = 'checkbox-' + task.taskId;

  const [markTaskAsDone] = useMutation(MARK_TASK_AS_DONE, {
    update(cache, { data: { markTaskAsDone } }) {
      taskLocalOperation(cache, markTaskAsDone);
    },
  });

  const [markTaskAsNotDone] = useMutation(MARK_TASK_AS_NOT_DONE, {
    update(cache, { data: { markTaskAsNotDone } }) {
      taskLocalOperation(cache, markTaskAsNotDone);
    },
  });

  const onCheckBoxChange = async (value: boolean) => {
    const taskEntryInput: TaskEntryInput = {
      taskId: task.taskId,
      when: new Date(),
    };

    if (task.isDone) {
      await markTaskAsNotDone({ variables: { taskEntry: taskEntryInput } });
    } else {
      await markTaskAsDone({ variables: { taskEntry: taskEntryInput } });
    }
  };

  return (
    <CheckBoxOption
      id={checkBoxId}
      label={task.name}
      isChecked={task.isDone}
      onChange={onCheckBoxChange}
      {...props}
    />
  );
};

export default TaskItem;
