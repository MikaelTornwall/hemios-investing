import React, { Component } from 'react';
import { Container, Accordion, List, Segment } from 'semantic-ui-react';
import './BalanceSheetList.scss';

export default class BalanceSheetList extends Component {
  render() {
    const scrollBar = {
      height: '100%',
      overflowY: 'scroll'
    };

    const balanceSheet = this.props.data;

    // console.log('BalanceSheetList: ' + balanceSheet.name);
    // console.log('BalanceSheetList: ' + balanceSheet.categories[0].category);
    // console.log('BalanceSheetList: ' + balanceSheet.categories[0].kpis);

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
        { key: cat.category, title: cat.category, content: { content: con } }
      )
    );

    const kpiCats = (
      <div>
        <Accordion.Accordion panels={kpiCategories} className="kpiTypes" />
      </div>
    );

    const rootPanel = [
      {
        key: balanceSheet.name,
        title: balanceSheet.name,
        content: { content: kpiCats }
      }
    ];

    const AccordionNested = () => (
      <Accordion defaultActiveIndex={0} panels={rootPanel} />
    );

    return (
      <>
        <Container className="BalanceSheetList">
          <AccordionNested />
        </Container>
      </>
    );
  }
}
