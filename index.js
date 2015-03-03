var React = require('react');
var Highlight = require('react-highlight');

var CodeExample = React.createClass({
    render: function () {
        return (<div className="example">
            <div className="example-top">
                <h4>Example</h4>
                <div dangerouslySetInnerHTML={{__html: this.props.html}} />
            </div>
            <div className="example-bottom">
                <Highlight className="html">{this.props.html}</Highlight>
            </div>
        </div>);
    }
});

var Buttons = React.createClass({
    render: function () {

        var tagsEg = `<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input" />
<input class="btn btn-default text-serif" type="submit" value="Submit" />`;

        var optionsEg = `<button class="btn btn-default" type="submit">Default</button>
<button class="btn btn-yellow" type="submit">Button</button>`;

        var disabledEg = `<button disabled class="btn btn-default">Disabled</button>`

        var inlineEg = `<p>
This is some text <button class="btn btn-inline btn-yellow" type="submit">Button</button>
</p>`

        return (<div className="container">
          <h2>Buttons</h2>
          <h3>Button tags</h3>
          <CodeExample html={tagsEg} />
          <h3>Options</h3>
          <CodeExample html={optionsEg} />
          <h3>Disabled</h3>
          <CodeExample html={disabledEg} />
          <h3>Inline</h3>
          <CodeExample html={inlineEg} />
        </div>);
    }
});

var Main = React.createClass({
  render: function() {
    return (<div>
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
      </div>
      <Buttons />
    </div>);
  }
});

React.render(<Main />, document.getElementById('app'));
