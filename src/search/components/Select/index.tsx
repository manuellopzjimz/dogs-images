import React, { useState } from "react";

import { Option } from "@Search/types/option";
import { Container, Label, ListItem, Item } from "./style";

export type Props = {
  placeholder: string;
  options: Option[];
  onSelect: Function;
  onBlur: Function;
  value?: string;
};

export const Select = (props: Props) => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const [selectedValue, selectValue] = useState<string | undefined>(
    props.value
  );

  const selectOption = (option: Option) => {
    props.onSelect(option.value);
    props.onBlur();
    selectValue(option.value);
    setVisibility(false);
  };

  return (
    <Container>
      <Label
        isVisible={isVisible}
        onClick={() =>
          setVisibility((previousVisibility) => !previousVisibility)
        }
      >
        {props.placeholder}
      </Label>
      {isVisible ? (
        <ListItem>
          {props.options.map((option: Option) => (
            <Item
              isSelected={option.value === selectedValue}
              onClick={() => selectOption(option)}
              key={option.value}
            >
              {option.name}
            </Item>
          ))}
        </ListItem>
      ) : null}
    </Container>
  );
};
