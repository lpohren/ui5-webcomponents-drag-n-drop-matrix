import { Panel } from '@ui5/webcomponents-react';
import { FlexBox, ComboBoxItem, Input, Icon, ComboBox } from '@ui5/webcomponents-react';

const DropDown = () => {
  return (
    <ComboBox style={{marginLeft: '1rem'}}>
      <ComboBoxItem text="ComboBox Entry 1" />
      <ComboBoxItem text="ComboBox Entry 2" />
      <ComboBoxItem text="ComboBox Entry 3" />
      <ComboBoxItem text="ComboBox Entry 4" />
      <ComboBoxItem text="ComboBox Entry 5" />
    </ComboBox>
  );
};

const GridFilters = () => {
  return (
    <Panel headerText="Filters">
      <FlexBox>
        <Input icon={<Icon name="search" />}></Input>
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </FlexBox>
    </Panel>
  );
};

export default GridFilters;
