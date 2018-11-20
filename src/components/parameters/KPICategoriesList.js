import React, { Component } from 'react';
import { Icon, Accordion, List } from 'semantic-ui-react';
import BalanceSheetList from './BalanceSheetList';

export default class KPICategoriesList extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <>
        <BalanceSheetList data={this.props.contentData} />
      </>
    );
  }
}
