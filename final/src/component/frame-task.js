class frameTask extends HTMLElement{
    constructor(){
        this.shadowDOM  = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }


    render(){
        this.shadowDOM.innerHTML =
        `
    <style>
        frame-task{


            position: relative;
            top: 220px;
            left: 12px;
            padding: 160px 219px ;
            width: 100%;
            background-color: cornflowerblue;
            color: black;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    </style>
        `
    }
}


customElements.define('frame-task', frameTask);