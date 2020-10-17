new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false
    },
    methods:{
        startGame(){
            this.isGameRunning= true;
            this.playerHealth= 100;
            this.monsterHealth= 100;
        },
        attack(){
            
            this.monsterHealth -= this.calculateDamage(3, 10);
            if(this.chackWin()){
                return;
            }

            this.playerHealth -= this.calculateDamage(5, 12);;
            this.chackWin()
        },
        specialAttack(){

            this.monsterHealth -= this.calculateDamage(10, 20);
            if(this.chackWin()){
                return;
            }

            this.monsterAttack();
            
        },
        heal(){

            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100; 
            }

            this.monsterAttack();
        },
        giveUp(){

            this.isGameRunning= false;
            
        },
        monsterAttack(){

            this.playerHealth -= this.calculateDamage(5, 12);;
            this.chackWin()

        },
        calculateDamage(min, max){

            return Math.max(Math.floor(Math.random() * max) + 1, min);

        },
        chackWin(){
            if(this.monsterHealth <= 0){

                if(confirm("You Win! | New Game")){
                    this.startGame();
                }else{
                this.isGameRunning= false;
                }
                return true;

            }else if(this.playerHealth <= 0){

                if(confirm("You Lost! | New Game")){

                    this.startGame();

                }else{

                this.isGameRunning= false;

                }
                return true;

            }
              return false;  
        }
    }
});