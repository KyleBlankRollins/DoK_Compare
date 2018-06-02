new Vue({
    el: '#coalitionSelect',
    data: {
        currentComponent: 'AAV',
        componentsArray: [
            'AAV', 'ArtilleryCruiser', 'AssaultCruiser', 'Baserunner', 'BattleCruiser', 'Bomber', 'Carrier', 'Gunship', 'Interceptor', 'LAV', 'MissileBattery', 'Railgun', 'Salvager', 'SupportCruiser'
        ],

    },
    components: {
        'AAV': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/AAV_coalition.jpg"/> <figcaption> <h2> Coalition AAV </h2> </figcaption> </figure> <div class="unitStats"> <div class="stat"><h4>Speed:</h4> <p>70</p></div> <div class="stat"><h4>Armor:</h4> <p>5</p></div> <div class="stat"><h4>Damage:</h4> <p>50</p></div> <div class="stat"><h4>Rate of Fire:</h4> <p>Very high</p></div> <div class="stat"><h4>Hull:</h4> <p>1050</p></div> <div class="stat"><h4>Strong vs:</h4> <p>Strikecraft</p></div> <div class="stat"><h4>Weak vs:</h4> <p>Railguns</p></div> </div> </div>'
        },
        'ArtilleryCruiser': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/artilleryCruiser_coalition.jpg"/> <figcaption> <h2> Coalition artillery cruiser </h2> </figcaption> </figure> </div>'
        },
        'AssaultCruiser': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/assaultCruiser_coalition.jpg"/> <figcaption> <h2> Coalition assault cruiser </h2> </figcaption> </figure> </div>'
        },
        'Baserunner': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/baserunner_coalition.jpg"/> <figcaption> <h2> Coalition baserunner </h2> </figcaption> </figure> </div>'
        },
        'BattleCruiser': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/battleCruiser_coalition.jpg"/> <figcaption> <h2> Coalition battleCruiser </h2> </figcaption> </figure> </div>'
        },
        'Bomber': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/bomber_coalition.jpg"/> <figcaption> <h2> Coalition bomber </h2> </figcaption> </figure> </div>'
        },
        'Carrier': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/carrier_coalition.jpg"/> <figcaption> <h2> Coalition carrier </h2> </figcaption> </figure> </div>'
        },
        'Gunship': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/gunship_coalition.jpg"/> <figcaption> <h2> Coalition gunship </h2> </figcaption> </figure> </div>'
        },
        'Interceptor': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/interceptor_coalition.jpg"/> <figcaption> <h2> Coalition interceptor </h2> </figcaption> </figure> </div>'
        },
        'LAV': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/LAV_coalition.jpg"/> <figcaption> <h2> Coalition LAV </h2> </figcaption> </figure> </div>'
        },
        'MissileBattery': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/missileBattery_coalition.jpg"/> <figcaption> <h2> Coalition missile battery </h2> </figcaption> </figure> </div>'
        },
        'Railgun': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/railgun_coalition.jpg"/> <figcaption> <h2> Coalition railgun </h2> </figcaption> </figure> </div>'
        },
        'Salvager': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/salvager_coalition.jpg"/> <figcaption> <h2> Coalition salvager </h2> </figcaption> </figure> </div>'
        },
        'SupportCruiser': {
            template:
            '<div class="coalitionCompare" id="coalitionCompare"> <figure> <img src="images/coalitionUnits/supportCruiser_coalition.jpg"/> <figcaption> <h2> Coalition support cruiser </h2> </figcaption> </figure> </div>'
        },
    },
    methods: {
        swapComponent: function(component) {
            if (this.currentComponent === component) {
                this.currentComponent = null;
            } else {
                this.currentComponent = component;
            }
        }
    }
});

new Vue({
    el: '#gaalsienSelect',
    data: {
        currentComponent: 'AAV',
        componentsArray: [
            'AAV', 'ArtilleryCruiser', 'AssaultCruiser', 'Baserunner', 'BattleCruiser', 'Bomber', 'Carrier', 'Gunship', 'Interceptor', 'LAV', 'MissileBattery', 'Railgun', 'Salvager', 'SupportCruiser'
        ],

    },
    components: {
        'AAV': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/AAV_coalition.jpg"/> <figcaption> <h2> coalition AAV </h2> </figcaption> </figure> </div> '
        },
        'ArtilleryCruiser': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/artilleryCruiser_coalition.jpg"/> <figcaption> <h2> coalition artillery cruiser </h2> </figcaption> </figure> </div>'
        },
        'AssaultCruiser': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/assaultCruiser_coalition.jpg"/> <figcaption> <h2> coalition assault cruiser </h2> </figcaption> </figure> </div>'
        },
        'Baserunner': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/baserunner_coalition.jpg"/> <figcaption> <h2> coalition baserunner </h2> </figcaption> </figure> </div>'
        },
        'BattleCruiser': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/battleCruiser_coalition.jpg"/> <figcaption> <h2> coalition battleCruiser </h2> </figcaption> </figure> </div>'
        },
        'Bomber': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/bomber_coalition.jpg"/> <figcaption> <h2> coalition bomber </h2> </figcaption> </figure> </div>'
        },
        'Carrier': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/carrier_coalition.jpg"/> <figcaption> <h2> coalition carrier </h2> </figcaption> </figure> </div>'
        },
        'Gunship': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/gunship_coalition.jpg"/> <figcaption> <h2> coalition gunship </h2> </figcaption> </figure> </div>'
        },
        'Interceptor': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/interceptor_coalition.jpg"/> <figcaption> <h2> coalition interceptor </h2> </figcaption> </figure> </div>'
        },
        'LAV': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/LAV_coalition.jpg"/> <figcaption> <h2> coalition LAV </h2> </figcaption> </figure> </div>'
        },
        'MissileBattery': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/missileBattery_coalition.jpg"/> <figcaption> <h2> coalition missile battery </h2> </figcaption> </figure> </div>'
        },
        'Railgun': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/railgun_coalition.jpg"/> <figcaption> <h2> coalition railgun </h2> </figcaption> </figure> </div>'
        },
        'Salvager': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/salvager_coalition.jpg"/> <figcaption> <h2> coalition salvager </h2> </figcaption> </figure> </div>'
        },
        'SupportCruiser': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/supportCruiser_coalition.jpg"/> <figcaption> <h2> coalition support cruiser </h2> </figcaption> </figure> </div>'
        },
    },
    methods: {
        swapComponent: function(component) {
            if (this.currentComponent === component) {
                this.currentComponent = null;
            } else {
                this.currentComponent = component;
            }
        }
    }
});


// images: [
//     { url: 'images/coalitionUnits/AAV_coalition.jpg', alt: 'coalition AAV' },
//     { url: 'images/coalitionUnits/artilleryCruiser_coalition.jpg', alt: 'coalition artillery cruiser' },
//     { url: 'images/coalitionUnits/assaultCruiser_coalition.jpg', alt: 'coalition assault cruiser' },
//     { url: 'images/coalitionUnits/baserunner_coalition.jpg', alt: 'coalition baserunner' },
//     { url: 'images/coalitionUnits/battleCruiser_coalition.jpg', alt: 'coalition battleCruiser' },
//     { url: 'images/coalitionUnits/bomber_coalition.jpg', alt: 'coalition tactical bomber'  },
//     { url: 'images/coalitionUnits/carrier_coalition.jpg', alt: 'coalition carrier'  },
//     { url: 'images/coalitionUnits/gunship_coalition.jpg', alt: 'coalition gunship'  },
//     { url: 'images/coalitionUnits/interceptor_coalition.jpg', alt: 'coalition interceptor'  },
//     { url: 'images/coalitionUnits/LAV_coalition.jpg', alt: 'coalition LAV'  },
//     { url: 'images/coalitionUnits/missileBattery_coalition.jpg', alt: 'coalition missile battery'  },
//     { url: 'images/coalitionUnits/railgun_coalition.jpg', alt: 'coalition railgun'  },
//     { url: 'images/coalitionUnits/salvager_coalition.jpg', alt: 'coalition salvager'  },
//     { url: 'images/coalitionUnits/supportCruiser_coalition.jpg', alt: 'coalition support cruiser'  }
// ],
// show: false,
