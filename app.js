new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        turns: []
    },
    methods:{
        startGame(){
            this.isGameRunning= true;
            this.playerHealth= 100;
            this.monsterHealth= 100;
            this.turns= [];
        },
        attack(){
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                text: 'Player Hits Monster For' + damage,
                playerTurn: true
            })
            if(this.chackWin()){
                return;
            }

            this.monsterAttack();
            this.chackWin()
        },
        specialAttack(){
            let damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;

            this.turns.unshift({
                text: 'Player Hits Monster Hard For' + damage,
                playerTurn: true
            })

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
            this.turns.unshift({
                text: 'Player Heal 10',
                playerTurn: true
            })

            this.monsterAttack();
        },
        giveUp(){

            this.isGameRunning= false;

        },
        monsterAttack(){
            let damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                text: 'Monster Hits Player For' + damage,
                playerTurn: false
            })
            this.chackWin();

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