new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        playerWidth: 100,
        monsterHealth: 100,
        monsterWidth: 100,
        isGameRunning: false,
        turns: [],
        logColor: '',
    },

    methods: {
        play: function () {
            this.isGameRunning = true;
            this.playerHealth = 100;
            this.playerWidth = 100;
            this.monsterHealth = 100;
            this.monsterWidth = 100;
        },

        attack: function () {
            var min = 3;
            var max = 10;
            var damageFromPlayer = Math.floor(Math.random() * (max - min + 1)) + min;
            var damageFromMonstor = Math.floor(Math.random() * (max - min + 1)) + min;
            this.monsterHealth = this.monsterHealth - damageFromPlayer;
            this.monsterWidth = this.monsterWidth - damageFromPlayer;

            this.playerHealth = this.playerHealth - damageFromMonstor;
            this.playerWidth = this.playerWidth - damageFromMonstor;

            this.turns.unshift({
                playe: true,
                text: "Player Damage to Monstor " + damageFromPlayer
            });
            this.turns.unshift({
                playe: false,
                text: "Monstor Damage to Player " + damageFromMonstor
            });


            if (this.playerHealth <= 0) {
                alert("You Loss! New Game?")
                this.isGameRunning = true;
                this.playerHealth = 100;
                this.playerWidth = 100;
                this.monsterHealth = 100;
                this.monsterWidth = 100;
            }
            else if (this.monsterHealth <= 0) {
                alert('Monstor Loss! New Game?')
                this.isGameRunning = true;
                this.playerHealth = 100;
                this.playerWidth = 100;
                this.monsterHealth = 100;
                this.monsterWidth = 100;
            }



        },

        heal: function () {
            var min = 3;
            var max = 7;
            var healUpTo = Math.floor(Math.random() * (max - min + 1)) + min;
            if (this.playerHealth < 100) {
                this.playerHealth = this.playerHealth + healUpTo;
            }
            if (this.playerWidth < 100) {
                this.playerWidth = this.playerWidth + healUpTo;
            }


        },

        giveUp: function () {
            if (this.playerHealth < 100) {
                alert("Monstor Win")
                this.isGameRunning = true;
                this.playerHealth = 100;
                this.playerWidth = 100;
                this.monsterHealth = 100;
                this.monsterWidth = 100;
                this.isGameRunning = false;
                this.turns = [];
            }
            this.isGameRunning = false;

        },


    },
});
