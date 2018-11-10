import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

const SelectLabel = function(props) {
  const onIconClick = () => props.onIconClick(props.item.value);
  return (
    <Label color={props.item.color} as="a">
      {props.item.text}
      <Icon onClick={onIconClick} name="delete" />
    </Label>
  );
};

export default SelectLabel;
