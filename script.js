const startGame = async (gId) =>{
    
    let ls = new loadScreen(gId);    
    ls.start();

        //Where the content will be loaded


    ls.stop();

}

const loadScreen = (li) =>({
    
    li,
    liD: document.querySelector(`${li}`),
    start(){
        if(li==""){
            //start load screen
        }

        // start load screen
    },
    
    stop(){
        // stop load screen
    }
})

let gameCanvas = document.querySelector("#game_profile");



