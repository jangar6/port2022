// const HtmlWebpackPlugin = require('html-webpack-plugin')

// let entryPoints = {
//   b2b: {
//     path: './src/project/b2b/view/b2b.jsx',
//     outputHtml: 'b2b.html',
//     build: true,
//   },
//   liveskin: {
//     path: './src/project/liveskin/view/liveskin.jsx',
//     outputHtml: 'liveskin.html',
//     build: true,
//   }
// };

// let entry = {}
// let output = []
// for(name in entryPoints){
//     if(entryPoints[name].build){
//         entry[name]=entryPoints[name].path
//         output.push(new HtmlWebpackPlugin({
//             inject:true,
//             chunks:name,
//             template: './public/template.html',
//             filename:entryPoints[name].outputHtml
//         }))
//     }    
// }

