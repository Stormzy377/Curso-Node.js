const path = require('path');

// Nome do arquivo
console.log(path.basename(__filename));

// Nome do directório
console.log(path.dirname(__dirname));

// Estensão do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

// Juntar caminhos de arquivo
console.log(path.join(__dirname, "test"));

// O módulo Path 