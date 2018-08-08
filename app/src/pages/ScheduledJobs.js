import React from 'react';
import { Button } from "@blueprintjs/core";
import './ScheduledJobs.css';

export default class ScheduledJobs extends React.Component {
  render() {
    return (
      <div>
        <div className="hello"> ScheduledJobs </div>
        <Button>Click me</Button>
      </div>
    )
  }
}