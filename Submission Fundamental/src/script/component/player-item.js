class PlayerItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    set player(player) {
        this._player = player;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            background-color: white;
            display: inline-flex;
        }
        
        .fan-art-player {
            width: 50%;
            max-height: auto;
            object-fit: cover;
            object-position: center;
        }
        
        .player-info {
            background-color: rgb(245, 238, 238);
            padding: 24px;
            text-align: left;
        }
        
        .player-info>h1 {
            font-weight: bold;
            margin-top: 20px;
        }
        
        .player-info>h3 {
            margin-top: 10px;
            font-size: 20px;
            color: gray;
        }
        
        .player-info>p {
            margin-top: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
        }
        @media screen and (max-width: 550px) {
            .player-info>h1 {
                font-size: 20px;
                margin-top: 0;
            }
            .player-info>h3 {
                font-size: 15px;
            }
            .player-info>p {
                display: none;
            }
        }
        </style>
       <img class="fan-art-player" src=" ${this._player.strFanart1} " alt="Fan Art">
       <div class="player-info">
           <h1> ${this._player.strPlayer} </h1>
           <h3> ${this._player.strTeam} </h3>
           <p> ${this._player.strDescriptionEN} </p>
       </div>`;
    }
}

customElements.define("player-item", PlayerItem);