var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)  //factory
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Use props everywhere', color: 'mediumaquamarine', }),  //same as above,
    ce(MyTitle, {title: 'Props are the best', color: 'peru'})
    // React.createElement(MyTitle, null),
    // React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
