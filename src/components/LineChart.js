import React from 'react';
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
    financialData: [],
    companies: [],
    category: 'balanceSheetHistoryQuarterly',
    kpi: null,
    timeline: ['2018-06-30', '2018-03-31', '2017-12-31', '2017-09-30'],
    graphData: [],
    colors: []
  };

  async componentDidMount() {
    await this.props.companies.map(company =>
      this.setState(prevState => ({
        companies: [...prevState.companies, company.text],
        colors: [...prevState.colors, company.color]
      }))
    );

    if (this.state.kpi == null) {
      this.setState({ kpi: this.props.kpi.value });
    }

    // This function generates the graph
    if (this.state.kpi !== null && this.state.companies.length > 0) {
      this.state.companies.map(company => {
        return this.generateGraphdata(
          this.props.dataProvider,
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

    console.log('Parametrit: ');
    console.log(company);
    console.log(category);
    console.log(kpi);
    console.log(timeline);

    // Let's make the selection array display dates in chronological order
    // timeline = timeline.reverse()

    // Finds the specific company data
    console.log('Data1: ', data);
    let dataToBeAdded = data.find(c => c.name === company);
    console.log('dataToBeAdded1: ', dataToBeAdded);
    console.log('dataToBeAdded1: ', dataToBeAdded.toString());
    // Calls a function that reverses the order of dates within the data array
    // dataToBeAdded = this.reverseTimelineOfValue(dataToBeAdded, category);

    // Adds each year/quarter and corresponding value into an object
    // Creates an array for each company that contains time - value -pairs for each date
    // Adds these objects into an array of a company in question
    for (let i = timeline.length - 1; i >= 0; i--) {
      console.log(
        'loop: ',
        dataToBeAdded.values,
        dataToBeAdded.values[category]
      );
      console.log('loop timeline: ', timeline[i]);
      arr.push({
        x: timeline[i],
        y: Math.floor(
          dataToBeAdded.values[category][i][timeline[i]][kpi] / 1000000
        )
      });
    }

    this.setState(prevState => ({ graphData: [...prevState.graphData, arr] }));
  };

  // generateGraphdata = (data, company, category, kpi, timeline) => {
  //   const arr = [];
  //
  //   // Let's make the selection array display dates in chronological order
  //   // timeline = timeline.reverse()
  //
  //   // Finds the specific company data
  //   let dataToBeAdded = data.find(c => c.name === company);
  //
  //   // Calls a function that reverses the order of dates within the data array
  //   // dataToBeAdded = this.reverseTimelineOfValue(dataToBeAdded, category);
  //
  //   // Adds each year/quarter and corresponding value into an object
  //   // Creates an array for each company that contains time - value -pairs for each date
  //   // Adds these objects into an array of a company in question
  //   for (let i = timeline.length - 1; i >= 0; i--) {
  //     arr.push({
  //       x: timeline[i],
  //       y: dataToBeAdded.values[category][i][timeline[i]][kpi] / 1000000
  //     });
  //   }
  //
  //   this.setState(prevState => ({ graphData: [...prevState.graphData, arr] }));
  // };

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
    console.log('Companies: ', this.props.companies);
    console.log('KPI: ', this.props.kpi);
    console.log('DataProvider: ', this.props.dataProvider);
    return (
      <>
        <XYPlot
          onMouseLeave={this._onMouseLeave}
          width={parseInt(this.props.graphSize.w)}
          height={parseInt(this.props.graphSize.h)}
          xType="ordinal"
        >
          <HorizontalGridLines />
          <XAxis />
          <YAxis title="m$" />
          {this.state.graphData.map((d, i) => (
            <LineSeries
              onNearestX={this._onNearestX}
              data={d}
              color={this.state.colors[i]}
            />
          ))}
          <Crosshair values={this.state.crosshairValues}>
            <div
              style={{
                background: 'rgba(50,50,50,0.93)',
                color: 'rgba(200,200,200,0.87)',
                width: 80,
                padding: 3,
                fontSize: 8,
                borderRadius: 5
              }}
            >
              <div>
                <strong>
                  {this.state.crosshairValues.length > 0
                    ? this.state.crosshairValues[0].x
                    : null}
                  :
                </strong>
              </div>
              {this.state.crosshairValues.map((value, i) => (
                <div>
                  <span style={{ color: this.state.colors[i] }}>
                    {this.state.companies[i]}:
                  </span>{' '}
                  {value.y} m$
                </div>
              ))}
            </div>
          </Crosshair>
        </XYPlot>
      </>
    );
  }
}

export default LineChart;
