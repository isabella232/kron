import React from 'react';
import { Card, Elevation, Icon } from "@blueprintjs/core";

import api from '../api'
import './Home.css';

export default class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cronjobs: [],
      loading: true,
      autoRefreshTimer: null
    }

    this.refresh = this.refresh.bind(this)
    this.toggleAutoRefresh = this.toggleAutoRefresh.bind(this)
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

  toggleAutoRefresh() {
    if(this.state.autoRefreshTimer === null) {
      const autoRefreshTimer = setInterval(() => {
        this.refresh()
      }, 10000)
      this.setState({autoRefreshTimer: autoRefreshTimer})
    } else {
      clearInterval(this.state.autoRefreshTimer)
      this.setState({autoRefreshTimer: null})
    }
  }

  render() {
    return (
      <div>
        <div className="Home-top-bar">
          <span>Filters</span>
          <div style={{float: "right"}}>
            {
              this.state.loading && <span>Loading...</span>
            }
            <Icon onClick={this.refresh} icon="refresh" iconSize={20} />
            <Icon onClick={this.toggleAutoRefresh} icon="automatic-updates" iconSize={20} />
          </div>
        </div>
        <div className="Home-cards">
          {
            this.state.cronjobs.map(cronjob => 
              <Card className="Home-card" key={cronjob.metadata.uid} interactive elevation={Elevation.THREE}>
                <h4>{cronjob.metadata.name}</h4>
              </Card>
            )
          }
        </div>
      </div>
    )
  }
}