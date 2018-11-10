import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

export function parameterAccordion(WrappedComponent, title) {
  class ParameterAccordion extends Component {
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
        <Accordion styled className={'parameter-accordion'}>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" size="large" />
            {title}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <WrappedComponent />
          </Accordion.Content>
        </Accordion>
      );
    }
  }
  return ParameterAccordion;
}
