// root controls
const path = require('path');

const getIndex = (req, res)=>{
  res.sendFile( path.join(__dirname, '..', 'views', 'index.html'));
}


module.exports = { getIndex }