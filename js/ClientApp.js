var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div


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
