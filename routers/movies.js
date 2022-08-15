const express = require('express');

const app = express();

const movies = require('../configuration/confidatabase')

//  const  connectCluster = require('../configuration/moviesW');

//  connectCluster()

// const movies = require('../configuration/moviesW');
//creating a router
const moviesRouter = express.Router();

//aplying the midelware 
app.use('/api/movies', moviesRouter);

//aplying other midelware to get the data by json
moviesRouter.use(express.json());

//get all movies
moviesRouter.get('/', async (req, res) => {

    let allMovies = await movies.find({})

    res.json({
        ok: true,
        movies: allMovies
    })

})


//get movie by category
moviesRouter.get('/category/:name', (req, res) => {

    let categoryName = req.params.name
    let allMovies = movies.findOne({ categoty: categoryName })
    // let movieCategory = movies.filter(movie => movie.category == categoryName);

    console.log(allMovies)
    // res.json({
    //     ok:true,
    //     categoryMovie:movieCategory
    // })


})

//add a movies
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

// //delete a movie
moviesRouter.delete('/delete/:id', (req, res) =>{

    let id = req.params.id;

    movies.findByIdAndDelete(id)
    .then(() => console.log('delted successfuly'))

    res.json({

        ok:true,
        msg:'delted successfuly',
    
    })

})

// //update a movie
moviesRouter.put('/update/:id', (req, res) => {

    if(req.params.id.length > 0 && req.body !== null ){

        let id = req.params.id;    
        let body = req.body;   
        
        movies.findByIdAndUpdate(id, body, { new:false} )
        .then(() => console.log('movie update'))
        .catch(() => console.log('sorry the movie was not updated'))
        
        res.json({
            ok:true,
            msg:'movie updated',
          
        })
    }
    console.log('no data');    
})


module.exports = moviesRouter;