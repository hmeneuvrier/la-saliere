var vm = new Vue({
    el: '#container', 

    data: {
        message: "Hello La Saliere "+ new Date().toLocaleString(),
        minutes: 0,
        secondes: 0,
        n:42,
        type:'label-primary',
        btnPlay: 'Démarrer',
        etat: {
          stop: false,
          backward: false,
          play: true
        },
        annonces: [
            {title: "Vidange", description: "Ancien mécanicien, je propose de vous montrer comment faire la vidange de votre voiture"},
            {title: "Graines de tomates", description: "Je donne des semences de variétés anciennes de tomates, noire de crimée..."},
            {title: "Espagnol", description: "Je vous propose des thé-espagnol pour vous permettre de continuer à pratiquer ..."},
          ]
    },


    ready: function() {
    },

    methods: {
        action: function () {
           alert('On a cliqué !');
        },

        changeType: function () {            
            labelChangeType();
        },
        stop: function () {            
            chronoStop();
        },
        play: function () {            
            chronoStart();
        },
        backward: function () {            
            chronoReset();
        }

    },

    components: {
        'test': {
            props: ['annonce'],
            template: '<div class="col-sm-4 border border-secondary"><b>{{annonce.title}}</b> : <br> {{annonce.description}}</div>'
        }
      }

});





setTimeout(function(){ vm.message = 'La Salière c\'est tellement chouette'; }, 3000);

var totalSecondes = 0;
var timer;

chronoStart = function() {
    timer = setInterval(function() {
    vm.minutes = Math.floor(++totalSecondes / 60);
    vm.secondes = totalSecondes - vm.minutes * 60;
    }, 1000);
    setEtat(false, true, false);
    vm.btnPlay = 'Continuer';
};

chronoStop = function() {
    clearInterval(timer);
    setEtat(true, false, true);
};

chronoReset = function() {
    totalSecondes = 0;
    vm.minutes = 0;
    vm.secondes = 0;
    setEtat(true, false, false);
    vm.btnPlay = 'Démarrer';        
}

setEtat = function(play, stop, backward) {
    vm.etat.play = play;
    vm.etat.stop = stop;
    vm.etat.backward = backward;        
};
   
labelChangeType = function () {            
    vm.type = (vm.type == 'label-primary') ? 'label-success' : 'label-primary';
};




