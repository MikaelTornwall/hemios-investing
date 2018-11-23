import React, { Component } from 'react';
import { Container, Accordion, List, Segment, Icon } from 'semantic-ui-react';
import './IncomeStatementList.scss';

export default class IncomeStatementList extends Component {
  state = {
    activeIndex: 0
  };

  handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const scrollBar = {
      height: '100%',
      overflowY: 'scroll'
    };

    const incomeStatement = this.props.data;

    return (
      <>
        <Container className="IncomeStatementList">
          <Accordion key={incomeStatement.name}>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleAccordionClick}
            >
              <Icon name="dropdown" />
              {incomeStatement.name}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <Segment style={scrollBar} className="kpiList">
                <List>
                  {incomeStatement.kpis.map(kpi => {
                    let selectedKPIS = [];
                    this.props.selectedItems.map(item =>
                      selectedKPIS.push(item.value)
                    );
                    let kpiName = Object.values(kpi)[0];
                    let kpiVal = Object.keys(kpi)[0];
                    // filter out selected kpis
                    if (!selectedKPIS.includes(kpiVal)) {
                      return (
                        <List.Item
                          key={kpiVal}
                          value={kpiVal}
                          onClick={this.props.handleChange}
                        >
                          {kpiName}
                        </List.Item>
                      );
                    }
                    return '';
                  })}
                </List>
              </Segment>
            </Accordion.Content>
          </Accordion>
        </Container>
      </>
    );
  }
}
