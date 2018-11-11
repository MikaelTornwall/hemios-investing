import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import _ from 'lodash';

import SelectLabel from './SelectLabel';

const colors = ['red', 'green', 'blue', 'yellow', 'grey'];

export function selectWithLabels(WrappedSelectComponent, type) {
  class SelectWithLabels extends Component {
    state = {
      options: [],
      selectedItems: []
    };

    handleChange = (e, { value }) => {
      const options = this.state.options.slice();
      const selectedItem = _.remove(options, item => {
        return item.value === value;
      });
      this.setState(prevState => ({
        selectedItems: [...prevState.selectedItems, ...selectedItem],
        options: options
      }));
      this.props.updateSelection(this.state.selectedItems);
    };

    unSelectItem = value => {
      const selectedItems = this.state.selectedItems.slice();
      const removedItem = _.remove(selectedItems, item => {
        return item.value === value;
      });
      this.setState(prevState => ({
        options: this.sortItemsAphabetically([
          ...prevState.options,
          ...removedItem
        ]),
        selectedItems: selectedItems
      }));
    };

    sortItemsAphabetically = items => {
      return _.orderBy(items, [item => item.text.toLowerCase()], ['asc']);
    };

    populate = options => {
      if (type === 1) {
        this.colorOptions(options);
      }
      this.sortItemsAphabetically(options);
      this.setState({
        options: options
      });
    };

    colorOptions = options => {
      var i = 0;
      const optionsWithColor = [];
      options.forEach(item => {
        const coloredItem = item;
        coloredItem.color = colors[i % (colors.length - 1)];
        optionsWithColor.push(coloredItem);
        i += 1;
      });
    };

    render() {
      return (
        <>
          <Container>
            <WrappedSelectComponent
              handleChange={this.handleChange}
              populate={this.populate}
              selectedItems={this.state.selectedItems}
              options={this.state.options}
              visible={this.props.visible}
            />
          </Container>
          <Container>
            {this.state.selectedItems.map(selectedItem => (
              <SelectLabel
                onIconClick={this.unSelectItem}
                key={selectedItem.key}
                item={selectedItem}
              />
            ))}
          </Container>
        </>
      );
    }
  }
  return SelectWithLabels;
}
