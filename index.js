const express = require('express');

const app = express();

const connectCluster = require('./configuration/dbConection')

connectCluster();

const moviesRouter = require('./routers/movies');

app.use('/api/movies', moviesRouter )

moviesRouter.use(express.json());

app.listen(4000, () => console.log('server is running'))

app.get('/', (req, res) =>{

    res.send({
        ok:true,
        msg:"The main path"
    })

})

