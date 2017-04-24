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

    var updates = {}; // updades hash will change on lines 24 and 29
    var name = this.refs.name.value;
    var msg = this.refs.msg.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (msg.length > 0) {
      this.refs.msg.value = '';
      updates.msg = msg;
    }
    this.props.onNewData(updates); // passing the updated hash here to onNewData (Greeter.handleNewData)
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="name" placeholder="Enter Name"></input>
          </div>
          <div>
            <textarea ref="msg" placeholder="Enter Message"></textarea>
          </div>
          <button>Update</button>
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
      name: this.props.name,
      msg: this.props.msg
    };
  },
  handleNewData: function(updates) {
    this.setState(updates); // since setState takes a hash anyway we will pass the updates hash here as it is
  },
  render: function() {
    var name = this.state.name;
    var msg = this.state.msg;
    return (
      <div>
        <GreeterMessage name={name} msg={msg}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});


ReactDOM.render(
        <Greeter/>,
        document.getElementById('app')
      );
