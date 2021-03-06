import React from 'react'
import SpiceItem from './SpiceItem'

// class component
class SpiceList extends React.Component {

  renderSpices() {
    console.log("list of spices", this.props)
    // TODO: update this function to return an array of SpiceItem components
    // If you get an error message about a 'key' prop, make sure to fix it before submitting your code!
   return this.props.spices.map(spice => <SpiceItem key={spice.id} title={spice.title} image={spice.image} description={spice.description} notes={spice.notes} />) 
  }

  render() {
    console.log("SpiceList props:", this.props.spices)
    return (
      <section className="spice-list">
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList