function buscarSetores(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (!email) {
    res.status(400).send("Seu email está undefined!");
  } else if (!senha) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    setorModel.buscarSetoresPorHospital(email, senha)
      .then(resultado => {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).send(); // Nenhum conteúdo
        }
      })
      .catch(erro => {
        console.error("Erro ao buscar setores:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}


module.exports = {
buscarSetores
}