var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      msg: 'This is from a component!'
    };
  },
  getInitialState() {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0 ) {
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    var name = this.state.name;
    var msg = this.props.msg;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{msg}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"></input>
          <button>Set Name</button>
        </form>
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
