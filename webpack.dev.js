const { merge } = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const path = require( 'path' );

module.exports = merge( common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve( __dirname, 'dist' ),
        hot: true,
        liveReload: true,
        watchFiles: [ 'droplets/*.html' ]
    },
    target: 'web',
} );