const express = require('express')

const stablesRouter = express.Router()
const stablesController = require('../controller/stables')
const { tryCatch } = require("../utils/tryCatch")

// GET/allstables/
stablesRouter.get('/',
    tryCatch(
        // swagger docs code goes here
        stablesController.getAll
    )
)

// GET/stables/{stablesId}
stablesRouter.get('/:id',
    tryCatch(
        //swagger docs code goes here
        stablesController.getOne
    )
)

// GET/stables/inventory
stablesRouter.get('/inventory',
    tryCatch(
        // swagger docs code goes here
        stablesController.getInventory
    )
)

// POST/stables/order
stablesRouter.post('/order',
    tryCatch(
        //swagger docs code goes here
        stablesController.addOrder
    )
)

// DELETE/stables/{stablesId}
stablesRouter.delete('/:id',
    tryCatch(
        //swagger docs code goes here
        stablesController.deleteOne
    )
)

module.exports = stablesRouter