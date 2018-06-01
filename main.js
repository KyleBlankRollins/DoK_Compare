new Vue({
    el: '#kushanSelect',
    data: {
        currentComponent: null,
        componentsArray: [
            'AAV', 'ArtilleryCruiser', 'AssaultCruiser', 'Baserunner', 'Battlecruiser', 'Bomber', 'Carrier', 'Gunship', 'Interceptor', 'LAV', 'MissileBattery', 'Railgun', 'Salvager', 'SupportCruiser'
        ],

    },
    components: {
        'AAV': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/LAV_kushan.jpg"/> <figcaption> <h2> Kushan LAV </h2> </figcaption> </figure> </div> '
        },
        'ArtilleryCruiser': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/artilleryCruiser_kushan.jpg"/> <figcaption> <h2> Kushan artillery cruiser </h2> </figcaption> </figure> </div>'
        },
        'AssaultCruiser': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/assaultCruiser_kushan.jpg"/> <figcaption> <h2> Kushan assault cruiser </h2> </figcaption> </figure> </div>'
        },
        'Baserunner': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/baserunner_kushan.jpg"/> <figcaption> <h2> Kushan baserunner </h2> </figcaption> </figure> </div>'
        },
        'Battlecruiser': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/battlecruiser_kushan.jpg"/> <figcaption> <h2> Kushan battlecruiser </h2> </figcaption> </figure> </div>'
        },
        'Bomber': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/bomber_kushan.jpg"/> <figcaption> <h2> Kushan bomber </h2> </figcaption> </figure> </div>'
        },
        'Carrier': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/carrier_kushan.jpg"/> <figcaption> <h2> Kushan carrier </h2> </figcaption> </figure> </div>'
        },
        'Gunship': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/gunship_kushan.jpg"/> <figcaption> <h2> Kushan gunship </h2> </figcaption> </figure> </div>'
        },
        'Interceptor': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/interceptor_kushan.jpg"/> <figcaption> <h2> Kushan interceptor </h2> </figcaption> </figure> </div>'
        },
        'LAV': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/LAV_kushan.jpg"/> <figcaption> <h2> Kushan LAV </h2> </figcaption> </figure> </div>'
        },
        'MissileBattery': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/missileBattery_kushan.jpg"/> <figcaption> <h2> Kushan missile battery </h2> </figcaption> </figure> </div>'
        },
        'Railgun': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/railgun_kushan.jpg"/> <figcaption> <h2> Kushan railgun </h2> </figcaption> </figure> </div>'
        },
        'Salvager': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/salvager_kushan.jpg"/> <figcaption> <h2> Kushan salvager </h2> </figcaption> </figure> </div>'
        },
        'SupportCruiser': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/supportCruiser_kushan.jpg"/> <figcaption> <h2> Kushan support cruiser </h2> </figcaption> </figure> </div>'
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
        currentComponent: null,
        componentsArray: [
            'AAV', 'ArtilleryCruiser', 'AssaultCruiser', 'Baserunner', 'Battlecruiser', 'Bomber', 'Carrier', 'Gunship', 'Interceptor', 'LAV', 'MissileBattery', 'Railgun', 'Salvager', 'SupportCruiser'
        ],

    },
    components: {
        'AAV': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/LAV_kushan.jpg"/> <figcaption> <h2> Kushan LAV </h2> </figcaption> </figure> </div> '
        },
        'ArtilleryCruiser': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/artilleryCruiser_kushan.jpg"/> <figcaption> <h2> Kushan artillery cruiser </h2> </figcaption> </figure> </div>'
        },
        'AssaultCruiser': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/assaultCruiser_kushan.jpg"/> <figcaption> <h2> Kushan assault cruiser </h2> </figcaption> </figure> </div>'
        },
        'Baserunner': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/baserunner_kushan.jpg"/> <figcaption> <h2> Kushan baserunner </h2> </figcaption> </figure> </div>'
        },
        'Battlecruiser': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/battlecruiser_kushan.jpg"/> <figcaption> <h2> Kushan battlecruiser </h2> </figcaption> </figure> </div>'
        },
        'Bomber': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/bomber_kushan.jpg"/> <figcaption> <h2> Kushan bomber </h2> </figcaption> </figure> </div>'
        },
        'Carrier': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/carrier_kushan.jpg"/> <figcaption> <h2> Kushan carrier </h2> </figcaption> </figure> </div>'
        },
        'Gunship': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/gunship_kushan.jpg"/> <figcaption> <h2> Kushan gunship </h2> </figcaption> </figure> </div>'
        },
        'Interceptor': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/interceptor_kushan.jpg"/> <figcaption> <h2> Kushan interceptor </h2> </figcaption> </figure> </div>'
        },
        'LAV': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/LAV_kushan.jpg"/> <figcaption> <h2> Kushan LAV </h2> </figcaption> </figure> </div>'
        },
        'MissileBattery': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/missileBattery_kushan.jpg"/> <figcaption> <h2> Kushan missile battery </h2> </figcaption> </figure> </div>'
        },
        'Railgun': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/railgun_kushan.jpg"/> <figcaption> <h2> Kushan railgun </h2> </figcaption> </figure> </div>'
        },
        'Salvager': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/salvager_kushan.jpg"/> <figcaption> <h2> Kushan salvager </h2> </figcaption> </figure> </div>'
        },
        'SupportCruiser': {
            template:
            '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/kushanUnits/supportCruiser_kushan.jpg"/> <figcaption> <h2> Kushan support cruiser </h2> </figcaption> </figure> </div>'
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
//     { url: 'images/kushanUnits/AAV_kushan.jpg', alt: 'Kushan AAV' },
//     { url: 'images/kushanUnits/artilleryCruiser_kushan.jpg', alt: 'Kushan artillery cruiser' },
//     { url: 'images/kushanUnits/assaultCruiser_kushan.jpg', alt: 'Kushan assault cruiser' },
//     { url: 'images/kushanUnits/baserunner_kushan.jpg', alt: 'Kushan baserunner' },
//     { url: 'images/kushanUnits/battlecruiser_kushan.jpg', alt: 'Kushan battlecruiser' },
//     { url: 'images/kushanUnits/bomber_kushan.jpg', alt: 'Kushan tactical bomber'  },
//     { url: 'images/kushanUnits/carrier_kushan.jpg', alt: 'Kushan carrier'  },
//     { url: 'images/kushanUnits/gunship_kushan.jpg', alt: 'Kushan gunship'  },
//     { url: 'images/kushanUnits/interceptor_kushan.jpg', alt: 'Kushan interceptor'  },
//     { url: 'images/kushanUnits/LAV_kushan.jpg', alt: 'Kushan LAV'  },
//     { url: 'images/kushanUnits/missileBattery_kushan.jpg', alt: 'Kushan missile battery'  },
//     { url: 'images/kushanUnits/railgun_kushan.jpg', alt: 'Kushan railgun'  },
//     { url: 'images/kushanUnits/salvager_kushan.jpg', alt: 'Kushan salvager'  },
//     { url: 'images/kushanUnits/supportCruiser_kushan.jpg', alt: 'Kushan support cruiser'  }
// ],
// show: false,
