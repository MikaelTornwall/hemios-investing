import React, { Component } from 'react';
import { Icon, Container, Accordion, List, Segment } from 'semantic-ui-react';
import './IndustryList.scss';

export default class IndustryList extends Component {
  state = {
    activeIndex: -1
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

    const industriesNcompanies = this.props.contentData.getAllCompaniesWithIndustry();

    // Test: see whats inside the file from dataProvider
    // Object.keys(industriesNcompanies).map(industry => (
    //   industriesNcompanies[industry].map(company => {
    //     //console.log(Object.keys(company)[0]) // get ticker from company
    //     //console.log(Object.values(company)[0]) // get company name if ticker isnt needed
    //     //console.log(company[Object.keys(company)[0]]) // get company name
    //   })
    // ));

    return (
      <>
        <Container className="IndustryList">
          <Segment style={scrollBar}>
            {Object.keys(industriesNcompanies).map((industry, index) => (
              <Accordion key={industry}>
                <Accordion.Title
                  active={activeIndex === index}
                  index={index}
                  onClick={this.handleAccordionClick}
                >
                  <Icon name="dropdown" />
                  {industry}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                  <Segment style={scrollBar} className="companyList">
                    <List>
                      {industriesNcompanies[industry].map(company => {
                        let selectedCompanies = [];
                        this.props.selectedItems.map(item =>
                          selectedCompanies.push(item.value)
                        );
                        let companyName = Object.values(company)[0];
                        let ticker = Object.keys(company)[0];
                        // filter out selected companies
                        if (!selectedCompanies.includes(ticker)) {
                          return (
                            <List.Item
                              key={ticker}
                              value={ticker}
                              onClick={this.props.handleChange}
                            >
                              {companyName}
                            </List.Item>
                          );
                        }
                        return '';
                      })}
                    </List>
                  </Segment>
                </Accordion.Content>
              </Accordion>
            ))}
          </Segment>
        </Container>
      </>
    );
  }
}
