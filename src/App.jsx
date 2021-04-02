import React from 'react';
import Tab from '@material-ui/core/Tab';
import {
  TabContext,
  TabList,
  TabPanel
 } from '@material-ui/lab/TabPanel'


class JyankenGamePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {scores:[], status:{}}
  }
  ....
  render() {
    return (
      <>
        <Header>janken game</Header>
        <JyankenBox onChange = {(hand) => this.handleChange(hand)} />
        <TabView state = {this.state} />
      </>
    )
  }
}

const TabView = props => {
  const [scores, status] = props.state
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="score" />
          <Tab label="score" />
        </TabList>
      <TabPanel value = {0}>
        <ScoreList scores = {scores} />
      </TabPanel>
      <TabPanel value = {1}>
        <StatusBox status = {status} />
      </TabPanel>
    </TabContext>
  )
}
export default App;
