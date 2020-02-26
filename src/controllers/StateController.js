module.exports = {
  async index(req, res) {
    
    // É apenas um teste, será substituido por uma tabela no banco de dados
    const states = {
      "states": [
        {"_id": 1, "name": "Acre", "initials": "AC"},
        {"_id": 2, "name": "Alagoas", "initials": "AL"},
        {"_id": 3, "name": "Amapá", "initials": "AP"},
        {"_id": 4, "name": "Amazonas", "initials": "AM"},
        {"_id": 5, "name": "Bahia", "initials": "BA"},
        {"_id": 6, "name": "Ceará", "initials": "CE"},
        {"_id": 7, "name": "Distrito Federal", "initials": "DF"},
        {"_id": 8, "name": "Espírito Santo", "initials": "ES"},
        {"_id": 9, "name": "Goiás", "initials": "GO"},
        {"_id": 10, "name": "Maranhão", "initials": "MA"},
        {"_id": 11, "name": "Mato Grosso", "initials": "MT"},
        {"_id": 12, "name": "Mato Grosso do Sul", "initials": "MS"},
        {"_id": 13, "name": "Minas Gerais", "initials": "MG"},
        {"_id": 14, "name": "Pará", "initials": "PA"},
        {"_id": 15, "name": "Paraíba", "initials": "PB"},
        {"_id": 16, "name": "Paraná", "initials": "PR"},
        {"_id": 17, "name": "Pernambuco", "initials": "PE"},
        {"_id": 18, "name": "Piauí", "initials": "PI"},
        {"_id": 19, "name": "Rio de Janeiro", "initials": "RJ"},
        {"_id": 20, "name": "Rio Grande do Norte", "initials": "RN"},
        {"_id": 21, "name": "Rio Grande do Sul", "initials": "RS"},
        {"_id": 22, "name": "Rondônia", "initials": "RO"},
        {"_id": 23, "name": "Roraima", "initials": "RR"},
        {"_id": 24, "name": "Santa Catarina", "initials": "SC"},
        {"_id": 25, "name": "São Paulo", "initials": "SP"},
        {"_id": 26, "name": "Sergipe", "initials": "SE"},
        {"_id": 27, "name": "Tocantins", "initials": "TO"} 
      ]
    };

    return res.status(200).json(states);
  }
}