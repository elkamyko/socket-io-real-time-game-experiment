import test from '../shared/test.js'

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { app, start } from './server.js'
import webpackConfig from '../../webpack.config.js';

webpackConfig.entry = webpackConfig.entry instanceof Array ? webpackConfig.entry : [webpackConfig.entry];
webpackConfig.entry.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');
webpackConfig.plugins = webpackConfig.plugins || [];
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

start(webpackConfig.devServer.port);
