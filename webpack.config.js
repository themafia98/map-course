const path = require('path'), 
    webpack = require('webpack'),
    TerserPlugin = require('terser-webpack-plugin'), // minim
    extractWebpackPlugin = require('extract-text-webpack-plugin'), // for css files
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    CopyWebpackPlugin= require('copy-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = process.env.NODE_ENV === 'development';

const config = {
    mode: 'development', //"webpack-dev-server/client","webpack/hot/dev-server",
    entry: ['./src/index.js'],
    output : {
        path: path.resolve(__dirname, 'build'),
        filename: './js/bundle.js'
    },
    devtool: "source-map",
    watch: true,
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: false,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
            }),
        ],
    },
    module: {

        rules: [
            {  /* собирает цсс */
                test: /\.css$/,
                use: [
                    {
                    loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                            // publicPath is the relative path of the resource to the context
                            // e.g. for ./css/admin/main.css the publicPath will be ../../
                            // while for ./css/main.css the publicPath will be ../
                            return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        },
                    },
                    'css-loader'
                ]
                },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                use: [
                    {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env',{
                            targets: {
                                browsers: ["last 2 versions", "ie >= 11"]
                            },
                    }]]
                    }
                }
            ]
            },
            {
                test: /\.html$/,

                    use: {
                        loader: 'html-loader',
                        options: {
                          attrs: [':data-src']
                        }
                        }
            }
        ]
    },


    plugins: []
};


if (!prod) { 

      // dev plugins

    config.plugins = config.plugins.concat([


        new CopyWebpackPlugin([{
            from: './src/cities.json',
            to: './'
        }]),

        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.SourceMapDevToolPlugin({
        //     filename: 'bundle.js.map',
        //     append: '\n//# sourceMappingURL=http://localhost:9001/[url]',
        // }),
        new HtmlWebpackPlugin({hash: true,filename:'./index.html',template: 'src/index.html'}),
        new MiniCssExtractPlugin({filename: './style/style.css', disable: false, allChunks: true}), // main css
        new webpack.DefinePlugin({
            'processs.env.NODE_ENV': '"production"' // compiller if production
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default'],
            },
            canPrint: true
          }),
    ]);
    new webpack.HotModuleReplacementPlugin()

} else {


    // production plugins
}


module.exports = config;