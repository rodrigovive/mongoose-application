const plugin = function valueIndicatorPlugin (schema) {
  schema.post('find',function(result) {
    result.forEach((element) => {
      if(element.estvalue >= 100){
        element.description += ' ($)';
      }
    }, this)
  })
}

module.exports = plugin