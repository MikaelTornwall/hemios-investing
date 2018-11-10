import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { getPortPromise } from 'portfinder';

export function parameterAccordion(WrappedComponent, title) {
  class ParameterAccordion extends Component {
    state = { activeIndex: 0 };

    handleClick = (e, titleProps) => {
      const { index } = titleProps;
      const { activeIndex } = this.state;
      const newIndex = activeIndex === index ? -1 : index;

      this.setState({ activeIndex: newIndex });

      this.props.hideAccordion(newIndex === -1);
    };

    render() {
      const activeIndex = this.props.hidden ? -1 : 0;
      return (
        <Accordion styled className={'parameter-accordion'}>
          <Accordion.Title
            active={!this.props.hidden}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" size="large" />
            {title}
          </Accordion.Title>
          <Accordion.Content active={!this.props.hidden}>
            <WrappedComponent />
          </Accordion.Content>
        </Accordion>
      );
    }
  }
  return ParameterAccordion;
}
