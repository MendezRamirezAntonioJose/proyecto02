//Buscamos solo los que tienen el valor "paper" en el campo item
db.col01.find( {item: "paper"} )

//hacer la misma consulta usando el operador $eq
db.col01.find( {item: { $eq: "paper" } } )

//Cuenta el nº de valores iguales a "planner" en el campo item
db.col01.find({item: { $eq: "planner" } }).count()

// Saber los que tienen 25 en el campo qty (quantity)
db.col01.find( { qty: { $eq: 25 } } )

// Saber los que tienen el valor "in" en el subcampo uom, que pertenece al campo size.
db.col01.find( {"size.uom": "in" })

// Saber el subacampo uom que cumplen que son iguales a "in", que pertenece al campo size.
db.col01.find( {"size.uom": { $eq: "in"} })

//Saber que arrays tienen el valor B
db.col01.find( { tags: { $eq: "B" } } )

//o 
db.col01.find( { tags: "B" } )
