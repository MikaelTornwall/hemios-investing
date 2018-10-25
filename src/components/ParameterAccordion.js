import React, { Component } from 'react';
import { Accordion, Icon, Grid, GridColumn, GridRow } from 'semantic-ui-react';

import './ParameterAccordion.scss';
import CompanySelect from './CompanySelect';
import KPISelect from './KPISelect';
import TimeIntervalSelect from './TimeIntervalSelect';

export default class ParameterAccordion extends Component {
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
          Parameters
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Grid columns={3} stackable>
            <GridRow>
              <GridColumn>
                <CompanySelect />
              </GridColumn>
              <GridColumn>
                <KPISelect />
              </GridColumn>
              <GridColumn>
                <TimeIntervalSelect />
              </GridColumn>
            </GridRow>
          </Grid>
        </Accordion.Content>
      </Accordion>
    );
  }
}
