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

    let list;
    let con;
    let kpiName;
    let kpiVal;
    let selectedKPIs;
    let kpiCategories = balanceSheet.categories.map(
      cat => (
        (list = cat.kpis.map(
          kpi => (
            (selectedKPIs = []),
            this.props.selectedItems.map(item => selectedKPIs.push(item.value)),
            (kpiName = Object.values(kpi)[0]),
            (kpiVal = Object.keys(kpi)[0]),
            // filter out selected kpis
            !selectedKPIs.includes(kpiVal) && (
              <List.Item
                key={kpiVal}
                value={kpiVal}
                onClick={this.props.handleChange}
              >
                {kpiName}
              </List.Item>
            )
          )
        )),
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
