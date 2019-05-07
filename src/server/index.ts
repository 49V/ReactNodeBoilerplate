const path = require('path'),
  express = require('express'),
  webpack = require('webpack'),
  webpackConfig = require('../../webpack.config.js'),
  app = express(),
  os = require('os'),
  port = process.env.PORT || 3001;

let compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath, stats:    { colors: true }
}));
app.use(express.static(path.resolve('../../', 'dist')));
app.listen(port, () => { console.log(`App is listening on port ${port}`) });

// <RESOURCE_NAME> : Repeat this for every resource.
app.get('/', (req: any, res: any) => {
   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.get('/api/getUsername', (req: any, res: any) => res.send({ username: os.userInfo().username}));
