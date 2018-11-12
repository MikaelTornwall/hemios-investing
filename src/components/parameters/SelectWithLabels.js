import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import _ from 'lodash';

import SelectLabel from './SelectLabel';

const colors = ['red', 'green', 'blue', 'yellow', 'grey'];

export function selectWithLabels(WrappedSelectComponent, type) {
  class SelectWithLabels extends Component {
    options = [];
    selectedItems = [];

    handleChange = (e, { value }) => {
      const options = this.options.slice();
      const selectedItem = _.remove(options, item => {
        return item.value === value;
      });

      this.selectedItems = [...this.selectedItems, ...selectedItem];
      this.options = options;
      this.props.updateSelection(this.selectedItems);
    };
    unSelectItem = value => {
      const selectedItems = this.selectedItems.slice();
      const removedItem = _.remove(selectedItems, item => {
        return item.value === value;
      });

      this.options = this.sortItemsAphabetically([
        ...this.options,
        ...removedItem
      ]);
      this.selectedItems = selectedItems;

      this.props.updateSelection(this.selectedItems.slice());
    };

    sortItemsAphabetically = items => {
      return _.orderBy(items, [item => item.text.toLowerCase()], ['asc']);
    };

    populate = options => {
      if (type === 1) {
        this.colorOptions(options);
      }
      this.sortItemsAphabetically(options);
      this.options = options;
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
              selectedItems={this.selectedItems}
              options={this.options}
              visible={this.props.visible}
            />
          </Container>
          <Container>
            {this.selectedItems.map(selectedItem => (
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
