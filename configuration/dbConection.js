
// let movies = [
//     {
//         id: 1,
//         name: 'madagascar',
//         category: 'comedia'
//     },
//     {
//         id: 2,
//         name: 'just go with it',
//         category: 'comedia'
//     },
//     {
//         id: 3,
//         name: 'thor',
//         category: 'action'
//     },
//     {
//         id: 4,
//         name: 'iron man',
//         category: 'action'
//     },
//     {
//         id: 5,
//         name: 'Love',
//         category: 'romance'
//     },
//     {
//         id: 6,
//         name: 'StoryBook',
//         category: 'romance'
//     },
// ]


// module.exports = movies;


const mongoose = require('mongoose');

async function connectCluster(){

    try {

      await  mongoose.connect('mongodb+srv://Rest:4arKR8w6DdpkJMx1@cluster0.aimx4.mongodb.net/movies?retryWrites=true&w=majority')
       console.log('the db is  ');

    } catch (error) {

        console.log('hekkkk')        
    }
}

module.exports = connectCluster;






























