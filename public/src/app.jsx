var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var msg = this.props.msg;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{msg + '!'}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" placeholder="Enter Name"></input>
          <br></br>
          <textarea type="text" ref="message" placeholder="Enter Message"></textarea>
          <br></br>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      msg: 'This is the default message'
    };
  },
  getInitialState() {
    return {
      name: this.props.name
    };
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function() {
    var name = this.state.name;
    var msg = this.props.msg;
    return (
      <div>
        <GreeterMessage name={name} msg={msg}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});


ReactDOM.render(
        <Greeter/>,
        document.getElementById('app')
      );
