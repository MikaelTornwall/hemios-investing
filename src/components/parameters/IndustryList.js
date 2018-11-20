import React, { Component } from 'react';
import { Icon, Container, Accordion, List, Segment } from 'semantic-ui-react';
import './IndustryList.scss';

export default class IndustryList extends Component {
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

    return (
      <>
        <Container className="IndustryList">
          <Segment style={scrollBar}>
            {Object.keys(this.props.contentData).map((industry, index) => (
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
                      {this.props.contentData[industry].map(company => {
                        let selectedCompanies = [];
                        this.props.selectedItems.map(item =>
                          selectedCompanies.push(item.text)
                        );
                        // filter out selected companies
                        if (!selectedCompanies.includes(company)) {
                          return (
                            <List.Item
                              key={company}
                              value={company}
                              onClick={this.props.handleChange}
                            >
                              {company}
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
