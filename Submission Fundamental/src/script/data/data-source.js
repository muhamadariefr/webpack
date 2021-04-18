import players from "./players.js";

class DataSource {
    static searchPlayer(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${keyword}`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.player) {
                    return Promise.resolve(responseJson.player);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
        // return new Promise((resolve, reject) => {
        //     const filteredPlayers = players.filter((player) => player.name.toUpperCase().includes(keyword.toUpperCase()));
        //     if (filteredPlayers.length) {
        //         resolve(filteredPlayers);
        //     } else {
        //         reject(`${keyword} + is not found`);
        //     }
        // });
    }
}

export default DataSource;