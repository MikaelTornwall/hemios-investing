import React, { Component } from 'react';
import { Container, Sticky } from 'semantic-ui-react';
import _ from 'lodash';

import SelectLabel from './SelectLabel';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];

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
      options = this.sortItemsAphabetically(options);
      this.options = options;
    };

    colorOptions = options => {
      var i = 0;
      const optionsWithColor = [];
      options.forEach(item => {
        const coloredItem = item;
        coloredItem.color = colors[i % colors.length];
        optionsWithColor.push(coloredItem);
        i += 1;
      });
    };

    generateLabels = () => {
      return this.selectedItems.map(selectedItem => (
        <SelectLabel
          onIconClick={this.unSelectItem}
          key={selectedItem.key}
          item={selectedItem}
        />
      ));
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
              dataProvider={this.props.dataProvider}
            />
          </Container>
          {type === 1 ? (
            <Sticky>{this.generateLabels()}</Sticky>
          ) : (
            <Container> {this.generateLabels()} </Container>
          )}
        </>
      );
    }
  }
  return SelectWithLabels;
}
