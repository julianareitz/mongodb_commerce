db.produtos.find(
  { $or: [{vendidos: 85}, {curtidas: 36}]},
  { nome: 1, vendidos: 1, _id:0, curtidas: 1},
)