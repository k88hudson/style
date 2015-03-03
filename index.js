var Buttons = React.createClass({
    render: function () {
        return (<div className="container">
            <h1>Buttons Tests</h1>

            <h2>Regular Buttons</h2>
            <p>
                <button className="pure-button">A Regular Button</button>
                <a className="pure-button" href="#">An anchor Button</a>
            </p>

            <h2>Disabled Buttons</h2>
            <p>
                <button className="pure-button pure-button-disabled" disabled>A Regular Button</button>
                <a className="pure-button pure-button-disabled" href="#">An anchor Button</a>
            </p>

            <h2>Active Buttons</h2>
            <p>
                <button className="pure-button pure-button-active">A Regular Button</button>
                <a className="pure-button pure-button-active" href="#">An anchor Button</a>
            </p>

            <h2>Primary/Selected Buttons</h2>
            <p>
                <button className="pure-button pure-button-primary">A Regular Button</button>
                <a className="pure-button pure-button-primary" href="#">An anchor Button</a>
            </p>

            <h2>Customizing Buttons</h2>
            <p>
                <button className="pure-button pure-button-green">A Custom Button</button>
                <a className="pure-button pure-button-green" href="#">An anchor Button</a>
            </p>
            <p>
                <button className="pure-button pure-button-red">Another custom Button</button>
                <a className="pure-button pure-button-red" href="#">Custom Button</a>
            </p>
            <p>
                <button className="pure-button pure-button-yellow">Another custom Button</button>
                <a className="pure-button pure-button-yellow" href="#">Custom Button</a>
            </p>

            <p>
                <button className="pure-button pure-button-wedding">
                    <i className="fa fa-film"></i>
                    Start Playing Movie
                </button>

                <a className="pure-button pure-button-wedding" href="#">
                    <i className="fa fa-film"></i>
                    Start Playing Movie
                </a>
            </p>

            <h2>Primary Form Buttons</h2>
            <p>
                <a className="pure-button pure-button-primary" href="#">Anchor</a>
                <button className="pure-button pure-button-primary">Button</button>
                <input type="submit" className="pure-button pure-button-primary" value="Submit" />
                <input type="button" className="pure-button pure-button-primary" value="Input Button" />
                <input type="reset" className="pure-button pure-button-primary" value="Reset" />
            </p>

            <h2>Primary Form Buttons (Custom Fonts)</h2>
            <p className="custom-fonts">
                <a className="pure-button pure-button-primary" href="#">Anchor</a>
                <button className="pure-button pure-button-primary">Button</button>
                <input type="submit" className="pure-button pure-button-primary" value="Submit" />
                <input type="button" className="pure-button pure-button-primary" value="Input Button" />
                <input type="reset" className="pure-button pure-button-primary" value="Reset" />
            </p>

        </div>);
    }
});
var Main = React.createClass({
  render: function() {
    return (
      <div className="wrapper splash">
        <div className="container container-flex">
            <div className="left gutter">
                <img className="pure-img" src="https://webmaker.org/img/home/desktop.svg" />
            </div>
            <div className="right gutter">
                <h1>Make your own apps and websites</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <form className="pure-form">
                    <input className="input-hero" type="email" placeholder="Email" />
                    <button className="pure-button button-hero">Get started</button>
                </form>
            </div>
        </div>
        <div className="container">
            <form className="pure-form">
                <input type="email" placeholder="Email" />
                <button className="pure-button">Get started</button>
            </form>
        </div>
      </div>
    );
  }
});

React.render(<Main />, document.getElementById('app'));
