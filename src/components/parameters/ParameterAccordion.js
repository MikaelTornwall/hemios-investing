import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react';

import './ParameterAccordion.scss';

export function parameterAccordion(WrappedComponent, title) {
  class ParameterAccordion extends Component {
    handleClick = () => {
      this.props.showAccordion(!this.props.visible);
    };

    render() {
      return (
        <>
          <h5 className="clickable-header" as="a" onClick={this.handleClick}>
            <Icon
              name="chevron down"
              rotated={this.props.visible ? undefined : 'counterclockwise'}
              size="small"
            />
            {title}
          </h5>
          <Container className={'hemios-parameter'}>
            <WrappedComponent
              updateSelection={this.props.updateSelection}
              visible={this.props.visible}
              dataProvider={this.props.dataProvider}
            />
          </Container>
        </>
      );
    }
  }
  return ParameterAccordion;
}
