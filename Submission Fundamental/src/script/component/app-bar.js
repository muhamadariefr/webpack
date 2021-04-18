class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
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
            padding: 16px;
            width: 100%;
            background-color: white;
            color: black;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            display: inline-flex;
            justify-content: center;
        }
        
        img {
            width: 50px;
        }
        
        h2 {
            font-size: 30px;
            padding: 10px 0px 10px 0px;
        }
        </style>        
        <img src="img/soccer-icon.png" alt="icon">
        <h2>Football Player</h2>`;
    }
}

customElements.define("app-bar", AppBar);