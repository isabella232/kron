import React from 'react';
import { Button, Card, Elevation, Icon } from "@blueprintjs/core";

import api from '../api'
import './Home.css';

export default class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cronjobs: [],
      loading: true
    }

    this.refresh = this.refresh.bind(this)
  }

  componentWillMount() {
    this.refresh()
  }

  refresh() {
    this.setState({loading: true})
    api.get("/cronjobs").then(cronjobs => {
      if(cronjobs.err) {
        console.error(cronjobs.err)
      } else {
        this.setState({cronjobs: cronjobs.items, loading: false})
      }
    })
  }

  render() {
    return (
      <div>
       <Icon onClick={this.refresh} icon="refresh" iconSize={20} />
       {
         this.state.loading && <p>Loading...</p>
       }
        {
          this.state.cronjobs.map(cronjob => 
            <Card key={cronjob.metadata.uid} interactive elevation={Elevation.THREE}>
              <h3>{cronjob.metadata.name}</h3>
            </Card>
          )
        }
      </div>
    )
  }
}