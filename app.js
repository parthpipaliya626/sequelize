const express = require('express');

const Sequelize = require('sequelize');

const app = express();

const sequelize = new Sequelize('sqlite:xchinook.db');

 const Playlist = sequelize.define('playlist', {
    id: {
        field: 'PlaylistId',
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        field: 'Name',
        type: 'Sequelize.STRING'
    },
}, {
        timestamps: false
    
}); 

app.get('/api/playlists', function(req, res) {
    Playlist.findAll()
});

app.listen(8000, () => {
    console.log("Server is on PORT: 8000");
});