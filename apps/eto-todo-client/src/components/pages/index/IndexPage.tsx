import React, { FC, useMemo, useRef, useState } from 'react';
import { TaskListType } from './types/TaskListType';
import TaskListPage from './components/task-list/TaskListPage';
import styled from 'styled-components';
import PlusButton from '../../../components/base/form/buttons/PlusButton';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import colors from '../../../styles/colors';
import CreateTaskForm from './components/create-task-form/CreateTaskForm';
import { FormHandle } from './components/task-form/TaskForm';
import ListPicker from './components/task-list/ListPicker';
import ClientOnly from './../../../components/ClientOnly';
import useResize from '../../../hooks/useResize';

const IndexPage: FC = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef<FormHandle>(null);
  const onFormVisibilityChange = (value) => {
    setIsFormOpen(value);
    if (formRef && formRef.current) {
      if (value) {
        formRef.current.open();
      } else {
        formRef.current.close();
      }
    }
  };

  const onPlusButtonClick = () => {
    onFormVisibilityChange(true);
  };

  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [listType, setListType] = useState(TaskListType.Todo);
  const onPickListType = (listType: TaskListType) => {
    setListType(listType);
    setIsPickerOpen(false);
  };

  const resize = useResize();
  const listPickerHeight = useMemo(() => {
    if (!resize || resize.documentWidth < resize.breakpoints.sm) {
      return 64;
    }
    return 90;
  }, [resize, resize]);

  return (
    <div {...props}>
      <div className="task-list">
        <TaskListPage listType={listType} />
      </div>
      <PlusButton className="plus-button" onClick={onPlusButtonClick} />
      <ClientOnly>
        <div className="bottom-sheets">
          <SwipeableBottomSheet
            open={isPickerOpen}
            scrollTopAtClose={true}
            onChange={(value) => setIsPickerOpen(value)}
            overflowHeight={listPickerHeight}
            shadowTip={false}
            swipeableViewsProps={{ slideClassName: 'swipeable-view' }}
          >
            <ListPicker
              value={listType}
              onChange={onPickListType}
              isOpen={isPickerOpen}
              height={listPickerHeight}
            />
          </SwipeableBottomSheet>
          <SwipeableBottomSheet
            open={isFormOpen}
            scrollTopAtClose={true}
            onChange={onFormVisibilityChange}
            swipeableViewsProps={{ slideClassName: 'swipeable-view' }}
          >
            <CreateTaskForm
              onSubmit={() => setIsFormOpen(false)}
              ref={formRef}
            />
          </SwipeableBottomSheet>
        </div>
      </ClientOnly>
    </div>
  );
};
export default styled(IndexPage)`
  position: relative;
  overflow: auto;
  height: 100%;

  .task-list {
    overflow-y: auto;
    height: calc(100vh - 64px); /* 64px is height of bottom sheets */
  }

  .plus-button {
    position: fixed;
    bottom: 100px;
    right: 20px;
  }

  .swipeable-view,
  .swipeable-view > div {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${colors.background} !important;
  }

  .bottom-sheets {
    z-index: 5;
    position: relative;
  }
`;
