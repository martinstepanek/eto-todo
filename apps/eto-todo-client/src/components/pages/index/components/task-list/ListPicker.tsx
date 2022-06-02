import React, { FC } from 'react';
import styled from 'styled-components';
import colors from '../../../../../styles/colors';
import { TaskListType } from '../../types/TaskListType';
import taskListTypeReadable from './taskListTypeReadable';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import ListPickerArrowIcon from './ListPickerArrowIcon';
import SwipeableViews from 'react-swipeable-views';

interface ListPickerProps {
  value: TaskListType;
  onChange: (value: TaskListType) => void;
  isOpen: boolean;
}

const ListPicker: FC<ListPickerProps> = ({
  value,
  onChange,
  isOpen,
  ...props
}) => {
  const keys = Object.keys(taskListTypeReadable) as TaskListType[];

  const selectedOptionIndex = keys.findIndex((key) => key === value);
  const isSelectedFirstOption = selectedOptionIndex === 0;
  const isSelectedLastOption = selectedOptionIndex === keys.length - 1;

  const changeOptionToLeft = () => {
    if (!isSelectedFirstOption) {
      onChange(keys[selectedOptionIndex - 1]);
    }
  };

  const changeOptionToRight = () => {
    if (!isSelectedLastOption) {
      onChange(keys[selectedOptionIndex + 1]);
    }
  };

  const onSwipe = (index) => {
    onChange(keys[index]);
  };

  return (
    <div {...props}>
      <div className="header">
        <ListPickerArrowIcon
          icon={faChevronLeft}
          disabled={isSelectedFirstOption}
          onClick={changeOptionToLeft}
          className={isOpen ? 'arrow-left arrow-left-hidden' : 'arrow-left'}
        />
        <SwipeableViews
          onChangeIndex={onSwipe}
          index={keys.findIndex((key) => key === value)}
          disabled={isOpen}
          className="swipeable-options"
          slideClassName="swipeable-option"
        >
          {keys.map((key) => (
            <div key={key}>{taskListTypeReadable[key]}</div>
          ))}
        </SwipeableViews>
        <ListPickerArrowIcon
          icon={faChevronRight}
          disabled={isSelectedLastOption}
          onClick={changeOptionToRight}
          className={isOpen ? 'arrow-right arrow-right-hidden' : 'arrow-right'}
        />
      </div>
      {keys.map((key) => (
        <div className="option" onClick={() => onChange(key)} key={key}>
          {taskListTypeReadable[key]}
        </div>
      ))}
    </div>
  );
};

export default styled(ListPicker)`
  background-color: ${colors.textBackground} !important;
  user-select: none;
  padding-bottom: 15px;
  position: relative;
  overflow: hidden;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.2em;
    height: 64px;
    padding: 15px;
  }

  .swipeable-options {
    width: 70%;
  }

  .swipeable-option {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.textBackground} !important;
  }

  .arrow-left,
  .arrow-right {
    position: absolute;
    transition: 0.3s;
    top: 21px;
  }

  .arrow-left {
    left: 15px;
  }

  .arrow-left-hidden {
    left: -20px;
  }

  .arrow-right {
    right: 15px;
  }

  .arrow-right-hidden {
    right: -20px;
  }

  .option {
    padding: 15px;
  }
`;
