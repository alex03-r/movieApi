const express = require('express');

const app = express();
//the schema
const movies = require('../models/movieSchema');

//creating a router
const moviesRouter = express.Router();

//aplying the midelware 
app.use('/api/movies', moviesRouter);

//aplying other midelware to get the data by json
moviesRouter.use(express.json());

// ----------------------------------------------------------------------

//get all movies
moviesRouter.get('/', async (req, res) => {

    let allMovies = await movies.find({})

    res.json({
        ok: true,
        movies: allMovies
    })

})

// ---------------------------------------------------------------------

//get movies by category
moviesRouter.get('/category/:name', async (req, res) => {

    let categoryName = req.params.name;

    let allMovies = await movies.find();

    let categorizedMovies = allMovies.filter(category => category.category == categoryName );
 
    res.json({
        ok:true,
        movies: categorizedMovies
    })
})

// ---------------------------------------------------------------------

//get movie one movie by id
moviesRouter.get('/:id', async (req, res) => {

    let id = req.params.id;
    let movieRetrived = await movies.findById(id);

    res.json({
        ok:true,
        movie: movieRetrived
    })

})

// --------------------------------------------------------------------

//add a movie
moviesRouter.post('/', (req, res) => {

    let body = req.body;

    new movies(body).save()
        .then(() => console.log('movie added'))
        .catch(() => console.log('sorry movie not added'))

    res.json({
        ok: true,
        msg: "movie added"
    })

})

// --------------------------------------------------------------------

// //update a movie
moviesRouter.put('/update/:id', (req, res) => {

        let id = req.params.id;    
        let body = req.body;   
        
        movies.findByIdAndUpdate(id, body, { new:false} )
        .then(() => console.log('movie update'))
        .catch(() => console.log('sorry the movie was not updated'))
        
        res.json({
            ok:true,
            msg:'movie updated'          
        })
   
})

// --------------------------------------------------------------------

// //delete a movie
moviesRouter.delete('/delete/:id', (req, res) =>{

    let id = req.params.id;

        movies.findByIdAndDelete(id)
        .then(() => console.log('delted successfuly'))
        .catch(() => console.log('sorry it was not deleted'))
    
       res.json({
            ok:true,
            msg:'delted successfuly'    
        })
 

})


module.exports = moviesRouter;