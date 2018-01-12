import React from 'react'
import ReactDOM from 'react-dom'
import Com from '../src/index'

class ExampleApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Com />
      </div>
    );
  }
}

export default ExampleApp