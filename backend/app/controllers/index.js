function index(req, res) {
    // var Component = React.createClass({
    //  render: function(){
    //    return (<div>Hello React</div>)
    //  }
    // });
    // var ComponentFactory = React.createFactory(Component);
    // var comp = ComponentFactory();
    // var html = head + ReactDOMServer.renderToString(comp) + tail; 
    // res.send(html);
    res.render('index');
}
exports.index = index;
