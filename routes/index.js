const {createStates, showGames, createGame ,deleteGame,updateGame, showGame} = require('../controllers/indexController');
const router = require('express').Router();

//display an specific game
router.get('/:id', showGame)
//display  games
router.get('/', showGames)
//create a new game
router.post('/', createGame)
//update a game
router.put('/:id', updateGame)
//delete a game
router.delete('/:id', deleteGame)

module.exports = router

