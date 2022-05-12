const { Games, Cells } = require("../models");

module.exports = {
  //display games
  showGames: async (req, res) => {
    const game = await Games.findAll(
      (associations = {
        include: [
          {
            model: Cells,
          },
        ],
      })
    );
    res.json(game);
  },
  //create game
  createGame:  (req, res) => {
    !req.body.state ? (req.body.state = "1") : req.body.state;
    switch (req.body.state) {
      case 1:
        description = "Created";
        break;
      case 2:
        description = "Won";
        break;

      case 3:
        description = "Lost";
        break;
      default:
        req.body.state = "1"
        description = "Created";
    }
    data = {
      state: req.body.state,
      description: description,
      cells_id: req.body.cells_id,
    };

    Games.create(data)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  //see a particular game
  showGame: async (req, res) => {
    const game =  await Games.findOne({
      where: {
        id: req.params.id,
      },
      associations: {
        include: [
          {
            model: Cells,
          },
        ],
      },
    });
    res.json(game);
  },
  //delete
  deleteGame: (req, res) => {
    Games.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  //update
  updateGame: (req, res) => {
    !req.body.state ? (req.body.state = "1") : req.body.state;
    switch (req.body.state) {
      case 1:
        description = "Created";
        break;
      case 2:
        description = "Won";
        break;

      case 3:
        description = "Lost";
        break;
      default:
        description = "Created";
    }
    data = {
      state: req.body.state,
      description: description,
      cells_id: req.body.cells_id,
    };
    Games.update(data, {
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.json("Los datos de tu partida fueron actualizados correctamente");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
