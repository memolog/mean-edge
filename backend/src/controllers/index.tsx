import * as express from 'express';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';

export function index(req:express.Request, res: express.Response){
  // var Component = React.createClass({
  //  render: function(){
  //    return (<div>Hello React</div>)
  //  }
  // });
  // var ComponentFactory = React.createFactory(Component);
  // var comp = ComponentFactory();
  // var html = head + ReactDOMServer.renderToString(comp) + tail; 
  // res.send(html);
  res.render('index') 
}
 