import React, { Component } from 'react';
import { Input, Container, Label } from 'semantic-ui-react';

export default class GraphSizeSelectsize extends Component {
  widthChanged = (event, newValue) => {
    const newSize = {
      w: newValue.value,
      h: this.props.size.h
    };
    this.props.onGraphSizeChange(newSize);
  };

  heightChanged = (event, newValue) => {
    const newSize = {
      w: this.props.size.w,
      h: newValue.value
    };
    this.props.onGraphSizeChange(newSize);
  };

  render() {
    console.log(this.props.graphSize);
    return (
      <Container className={'hemios-size-parameter'}>
        <h4>Graph dimensions</h4>
        <Label>
          <h4>Width</h4>
          <Input
            min={100}
            max={1000}
            onChange={this.widthChanged}
            type="range"
            value={this.props.size.w}
          />
        </Label>
        <Label>
          <h4>Height</h4>
          <Input
            min={100}
            max={1000}
            onChange={this.heightChanged}
            type="range"
            value={this.props.size.h}
          />
        </Label>
      </Container>
    );
  }
}
