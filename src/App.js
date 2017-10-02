import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'Arial',
      allowEdit: 'true'
    }
    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
  }

  // updateColor
  updateColor(value) {
    this.setState({
      fontColor: value
    })
  }

  // updateSize
  updateSize(value) {
    this.setState({
      fontSize: value
    })
  }


  // updateFamily
  updateFamily(value) {
    this.setState({
      fontFamily: value
    })
  }

  // updateEditStatus
  updateEditStatus(value) {
    this.setState({
      allowEdit: value
    })
  }


  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */}
          <EditToggle update={this.updateEditStatus} />
          { /* Render ColorChanger */}
          <ColorChanger update={this.updateColor}
            canUpdate={this.state.allowEdit} />
          { /* Render SizeChanger */}
          <SizeChanger update={this.updateSize}
            canUpdate={this.state.allowEdit} />
          { /* Render FamilyChanger */}
          <FamilyChanger update={this.updateFamily}
            canUpdate={this.state.allowEdit} />
        </div>
        <div className="textArea">
          { /* Render TextContainer */}
          <TextContainer fontColor={this.state.fontColor}
            fontSize={this.state.fontColor}
            fontFamily={this.state.fontFamily} />
        </div>
      </div>
    )
  }
}

export default App;
