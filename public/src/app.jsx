var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      msg: 'This is from a component!'
    };
  },
  render: function() {
    var name = this.props.name;
    var msg = this.props.msg;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{msg}</p>
      </div>
    );
  }
});

var firstName = 'Sal';
var myMsg;
ReactDOM.render(
        <Greeter name={firstName} msg={myMsg}/>,
        document.getElementById('app')
      );
