import React from 'react';
import AAL from '../assets/AALfinancials.js';
import ABBV from '../assets/ABBVfinancials.js';
import AEE from '../assets/AEEfinancials.js';
import COG from '../assets/COGfinancials.js';
import EVHC from '../assets/EVHCfinancials.js';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  Crosshair
} from 'react-vis';

class LineChart extends React.Component {
  state = {
    crosshairValues: [],
    financialData: [AAL, ABBV, AEE, COG, EVHC],
    companies: [],
    category: 'cashflowStatementHistory',
    kpi: null,
    timeline: ['2017-12-31', '2016-12-31', '2015-12-31', '2014-12-31'],
    graphData: []
  };

  async componentDidMount() {
    await this.props.companies.map(company =>
      this.setState(prevState => ({
        companies: [...prevState.companies, company.text]
      }))
    );

    if (this.state.kpi == null) {
      this.setState({ kpi: this.props.kpi.value });
    }

    // This function generates the graph
    if (this.state.kpi !== null && this.state.companies.length > 0) {
      this.state.companies.map(company => {
        return this.generateGraphdata(
          this.state.financialData,
          company,
          this.state.category,
          this.state.kpi,
          this.state.timeline
        );
      });
    }
  }

  generateGraphdata = (data, company, category, kpi, timeline) => {
    const arr = [];

    // Let's make the selection array display dates in chronological order
    // timeline = timeline.reverse()

    // Finds the specific company data
    let dataToBeAdded = data.find(c => c.name === company);

    // Calls a function that reverses the order of dates within the data array
    // dataToBeAdded = this.reverseTimelineOfValue(dataToBeAdded, category);
    // Adds each year/quarter and corresponding value into an object
    // Creates an array for each company that contains time - value -pairs for each date
    // Adds these objects into an array of a company in question
    for (let i = 0; i < timeline.length; i++) {
      arr.push({
        x: timeline[i],
        y: dataToBeAdded.values[category][i][timeline[i]][kpi] / 1000000
      });
    }

    this.setState(prevState => ({ graphData: [...prevState.graphData, arr] }));
  };

  reverseTimelineOfValue = (company, kpiSet) => {
    return company.values[kpiSet].reverse();
  };

  // Empties the crosshairValues
  _onMouseLeave = () => {
    this.setState({ crosshairValues: [] });
  };

  // Adds the crosshairValues of the company in question, so they can be displayed during mouseOver event
  _onNearestX = (value, { index }) => {
    this.setState({ crosshairValues: this.state.graphData.map(d => d[index]) });
  };

  render() {
    return (
      <>
        <XYPlot
          onMouseLeave={this._onMouseLeave}
          width={350}
          height={200}
          xType="ordinal"
        >
          <HorizontalGridLines />
          <XAxis />
          <YAxis title="m$" />
          {this.state.graphData.map(d => (
            <LineSeries onNearestX={this._onNearestX} data={d} />
          ))}
          <Crosshair values={this.state.crosshairValues} />
        </XYPlot>
      </>
    );
  }
}

export default LineChart;
