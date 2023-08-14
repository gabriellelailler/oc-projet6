const path = require('path');

module.exports = {
  entry: './src/index.jsx', // Point d'entrée de votre application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie de la compilation
  },
  module: {
    rules: [
      // Autres règles...
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // Ajoute les styles au DOM en utilisant une balise <style>
          'css-loader',   // Convertit les styles CSS en modules JavaScript
          'sass-loader',  // Compile les fichiers Sass en CSS
        ],
      },
    ],
  },
};
