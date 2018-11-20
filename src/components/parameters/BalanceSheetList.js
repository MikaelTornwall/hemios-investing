import React, { Component } from 'react';
import { Icon, Container, Accordion, List, Segment } from 'semantic-ui-react';
import './BalanceSheetList.scss';

export default class BalanceSheetList extends Component {
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

    const balanceSheet = this.props.data;

    console.log('BalanceSheetList: ' + balanceSheet.name);
    console.log('BalanceSheetList: ' + balanceSheet.categories[0].category);
    console.log('BalanceSheetList: ' + balanceSheet.categories[0].kpis);

    // let kpiCategories = [];
    let list;
    let con;
    let kpiCategories = balanceSheet.categories.map(
      cat => (
        (list = cat.kpis.map(kpi => (
          <List.Item key={kpi} value={kpi} onClick={this.props.handleChange}>
            {kpi}
          </List.Item>
        ))),
        (con = (
          <Segment style={scrollBar} className="kpiList">
            <List>{list}</List>
          </Segment>
        )),
        { key: cat.category, title: cat.category, content: con }
      )
    );

    // const kpiCategories = [
    //   { key: 'panel-1a', title: 'Level 1A', content: 'Level 1A Contents' },
    //   { key: 'panel-ba', title: 'Level 1B', content: 'Level 1B Contents' },
    // ]

    const kpiCats = (
      <div>
        <Accordion.Accordion panels={kpiCategories} style={scrollBar} />
      </div>
    );

    const rootPanels = [
      {
        key: balanceSheet.name,
        title: balanceSheet.name,
        content: { content: kpiCats }
      }
    ];

    const AccordionNested = () => (
      <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
    );

    return (
      <>
        <Container className="BalanceSheetList">
          <AccordionNested style={scrollBar} />
        </Container>
      </>
    );
  }
}
