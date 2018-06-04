//Create components

//Gaalsien drop-down component
var gaalsienDropdown = Vue.component('gaalsien-dropdown', {
// Define the template, refers to the template id in the HTML.
    template: '#gaalsien-dropdown',
    // A data object containing all data for this component.
    data: function() {
        currentComponent: null;
        return {
            // Whether the options are visible or not.
            isOpen: false,
            // The selected value.
            selected: 'Select your unit',
            // Options.
            options: [
                'AAV',
                'Artillery Cruiser',
                'Assault Cruiser',
                'Baserunner',
                'Battle Cruiser',
                'Carrier',
                'Gunship',
                'LAV',
                'Missile Battery',
                'Railgun',
                'Salvager',
                'Strike Fighter',
                'Support Cruiser',
                'Tactical Bomber'
            ]
        }
    },

    methods: {
        toggle: function() {
            this.isOpen = !this.isOpen;
        },
        show: function() {
            this.isOpen = true;
        },
        hide: function() {
            this.isOpen = false;
        },
        // Set option as selected state and close dropdown.
        set: function(option) {
            this.selected = option;
            this.hide();
        },
        swapComponent: function(component) {
            if (this.currentComponent === component) {
                this.currentComponent = null;
            } else {
                this.currentComponent = component;
            }
        }
    },
  // This function is called when the DOM is ready.
    mounted: function() {
        console.log('My dropdown component is mounted!')
    }
});

var galAAV = Vue.component('aav',{
    template: '#aav',
});

var galArtCruiser = Vue.component('artillery-cruiser',{
    template: '#artillery-cruiser',
});

var galAssCruiser = Vue.component('assault-cruiser',{
    template: '#assault-cruiser',
});

var galBaserunner = Vue.component('baserunner',{
    template: '#baserunner',
});

var galBaCruiser = Vue.component('battle-cruiser',{
    template: '#battle-cruiser',
});

var galCarrier = Vue.component('carrier',{
    template: '#carrier',
});

var galGunship = Vue.component('gunship',{
    template: '#gunship',
});

var galLAV = Vue.component('lav',{
    template: '#lav',
});

var galMisBattery = Vue.component('missile-battery',{
    template: '#missile-battery',
});

var galRailgun = Vue.component('railgun',{
    template: '#railgun',
});

var galSalvager = Vue.component('salvager',{
    template: '#salvager',
});

var galStrFighter = Vue.component('strike-fighter',{
    template: '#strike-fighter',
});

var galSupCruiser = Vue.component('support-cruiser',{
    template: '#support-cruiser',
});

var galTacBomber = Vue.component('tactical-bomber',{
    template: '#tactical-bomber',
});


// Create new Vue instance for gaalsien-dropdown.
// var galDropdown = new Vue({
//   el: '#dropdown1'
// });

var unitView= new Vue({
    el: '#gaalsien',
    data: {
        currentComponent: null,
        componentsArray: [
            'AAV', 'ArtilleryCruiser',
        ]
    },
    components: {
        'AAV': galAAV,
        'ArtilleryCruiser': galArtCruiser
    },
    methods: {
        swapComponent: function(component) {
            console.log(currentComponent)
            if (this.currentComponent === component) {
                console.log(currentComponent)
                this.currentComponent = null;
            } else {
                this.currentComponent = component;
            }
        }
    }
});

// new Vue({
//     el: '#coalitionSelect',
//     data: {
//         currentComponent: 'AAV',
//         componentsArray: [
//             'AAV', 'ArtilleryCruiser', 'AssaultCruiser', 'Baserunner', 'BattleCruiser', 'Carrier', 'Gunship', 'LAV', 'MissileBattery', 'Railgun', 'Salvager', 'StrikeFighter', 'SupportCruiser','TacticalBomber'
//         ],
//
//     },
//     components: {
//         'AAV': {
//             template:
//             ''
//         },
//         'ArtilleryCruiser': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'AssaultCruiser': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/assaultCruiser_coalition.jpg"/> <figcaption> <h2> coalition assault cruiser </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="asCruiser_speed"><h4>Speed:</h4> <p>65</p></div> <div class="stat" id="asCruiser_armor"><h4>Armor:</h4> <p>15</p></div> <div class="stat" id="asCruiser_damage"><h4>Damage:</h4> <p>70</p></div> <div class="stat" id="aCruiser_RoF"><h4>Rate of Fire:</h4> <p>High</p></div> <div class="stat" id="asCruiser_hull"><h4>Hull:</h4> <p>2700</p></div> <div class="stat" id="asCruiser_strong"><h4>Strong vs:</h4> <p>Ground</p></div> <div class="stat" id="asCruiser_weak"><h4>Weak vs:</h4> <p>Aircraft, Railguns</p></div> </div> </div> </div>'
//         },
//         'Baserunner': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/baserunner_coalition.jpg"/> <figcaption> <h2> coalition baserunner </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="baserunner_speed"><h4>Speed:</h4> <p>65</p></div> <div class="stat" id="baserunner_armor"><h4>Armor:</h4> <p>2</p></div> <div class="stat" id="baserunner_damage"><h4>Damage:</h4> <p>5</p></div> <div class="stat" id="baserunner_RoF"><h4>Rate of Fire:</h4> <p>Medium</p></div> <div class="stat" id="baserunner_hull"><h4>Hull:</h4> <p>3350</p></div> <div class="stat" id="baserunner_strong"><h4>Strong vs:</h4> <p>N/A</p></div> <div class="stat" id="baserunner_weak"><h4>Weak vs:</h4> <p>Everything</p></div> </div> </div> </div>'
//         },
//         'BattleCruiser': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/battleCruiser_coalition.jpg"/> <figcaption> <h2> coalition battleCruiser </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="bCruiser_speed"><h4>Speed:</h4> <p>50</p></div> <div class="stat" id="bCruiser_armor"><h4>Armor:</h4> <p>25</p></div> <div class="stat" id="bCruiser_damage"><h4>Damage:</h4> <p>300</p></div> <div class="stat" id="bCruiser_RoF"><h4>Rate of Fire:</h4> <p>Low</p></div> <div class="stat" id="bCruiser_hull"><h4>Hull:</h4> <p>6500</p></div> <div class="stat" id="bCruiser_strong"><h4>Strong vs:</h4> <p>Ground</p></div> <div class="stat" id="bCruiser_weak"><h4>Weak vs:</h4> <p>Railguns, Aircraft, Strikecraft</p></div> </div> </div> </div>'
//         },
//         'Carrier': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/carrier_coalition.jpg"/> <figcaption> <h2> coalition carrier </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="carrier_speed"><h4>Speed:</h4> <p>60</p></div> <div class="stat" id="carrier_armor"><h4>Armor:</h4> <p>25</p></div> <div class="stat" id="carrier_damage"><h4>Damage:</h4> <p>10</p></div> <div class="stat" id="carrier_RoF"><h4>Rate of Fire:</h4> <p>Very low</p></div> <div class="stat" id="carrier_hull"><h4>Hull:</h4> <p>15000</p></div> <div class="stat" id="carrier_strong"><h4>Strong vs:</h4> <p>N/A</p></div> <div class="stat" id="carrier_weak"><h4>Weak vs:</h4> <p>Railguns, Cruisers</p></div> </div> </div> </div>'
//         },
//         'Gunship': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/gunship_coalition.jpg"/> <figcaption> <h2> coalition gunship </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="gunship_speed"><h4>Speed:</h4> <p>375</p></div> <div class="stat" id="gunship_armor"><h4>Armor:</h4> <p>10</p></div> <div class="stat" id="gunship_damage"><h4>Damage:</h4> <p>15</p></div> <div class="stat" id="gunship_RoF"><h4>Rate of Fire:</h4> <p>Very high</p></div> <div class="stat" id="gunship_hull"><h4>Hull:</h4> <p>1050</p></div> <div class="stat" id="gunship_strong"><h4>Strong vs:</h4> <p>Ground</p></div> <div class="stat" id="gunship_weak"><h4>Weak vs:</h4> <p>Anti-air, Interceptors, Strikecraft</p></div> </div> </div> </div>'
//         },
//         'LAV': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/LAV_coalition.jpg"/> <figcaption> <h2> coalition LAV </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="lav_speed"><h4>Speed:</h4> <p>110</p></div> <div class="stat" id="lav_armor"><h4>Armor:</h4> <p>0</p></div> <div class="stat" id="lav_damage"><h4>Damage:</h4> <p>15</p></div> <div class="stat" id="lav_RoF"><h4>Rate of Fire:</h4> <p>Medium</p></div> <div class="stat" id="lav_hull"><h4>Hull:</h4> <p>500</p></div> <div class="stat" id="lav_strong"><h4>Strong vs:</h4> <p>Strikecraft, Railguns</p></div> <div class="stat" id="lav_weak"><h4>Weak vs:</h4> <p>AAVs, Cruisers</p></div> </div> </div> </div>'
//         },
//         'MissileBattery': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/missileBattery_coalition.jpg"/> <figcaption> <h2> coalition missile battery </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="mBattery_speed"><h4>Speed:</h4> <p>50</p></div> <div class="stat" id="mBattery_armor"><h4>Armor:</h4> <p>5</p></div> <div class="stat" id="mBattery_damage"><h4>Damage:</h4> <p>250</p></div> <div class="stat" id="mBattery_RoF"><h4>Rate of Fire:</h4> <p>Low</p></div> <div class="stat" id="mBattery_hull"><h4>Hull:</h4> <p>1800</p></div> <div class="stat" id="mBattery_strong"><h4>Strong vs:</h4> <p>Aircraft</p></div> <div class="stat" id="mBattery_weak"><h4>Weak vs:</h4> <p>Ground units</p></div> </div> </div> </div>'
//         },
//         'Railgun': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/railgun_coalition.jpg"/> <figcaption> <h2> coalition railgun </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="railgun_speed"><h4>Speed:</h4> <p>66</p></div> <div class="stat" id="railgun_armor"><h4>Armor:</h4> <p>3</p></div> <div class="stat" id="railgun_damage"><h4>Damage:</h4> <p>225</p></div> <div class="stat" id="railgun_RoF"><h4>Rate of Fire:</h4> <p>Medium</p></div> <div class="stat" id="railgun_hull"><h4>Hull:</h4> <p>675</p></div> <div class="stat" id="railgun_strong"><h4>Strong vs:</h4> <p>Armored, Railguns</p></div> <div class="stat" id="railgun_weak"><h4>Weak vs:</h4> <p>Railguns, Aircraft, Cruisers</p></div> </div> </div> </div>'
//         },
//         'Salvager': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/salvager_coalition.jpg"/> <figcaption> <h2> coalition salvager </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="salvager_speed"><h4>Speed:</h4> <p>75</p></div> <div class="stat" id="salvager_armor"><h4>Armor:</h4> <p>5</p></div> <div class="stat" id="salvager_damage"><h4>Damage:</h4> <p>0</p></div> <div class="stat" id="salvager_RoF"><h4>Rate of Fire:</h4> <p>N/A</p></div> <div class="stat" id="salvager_hull"><h4>Hull:</h4> <p>900</p></div> <div class="stat" id="salvager_strong"><h4>Strong vs:</h4> <p>N/A</p></div> <div class="stat" id="salvager_weak"><h4>Weak vs:</h4> <p>Everything</p></div> </div> </div> </div>'
//         },
//         'StrikeFighter': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/interceptor_coalition.jpg"/> <figcaption> <h2> coalition interceptor </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="sFighter_speed"><h4>Speed:</h4> <p>435</p></div> <div class="stat" id="sFighter_armor"><h4>Armor:</h4> <p>1</p></div> <div class="stat" id="sFighter_damage"><h4>Damage:</h4> <p>120</p></div> <div class="stat" id="sFighter_RoF"><h4>Rate of Fire:</h4> <p>Low</p></div> <div class="stat" id="sFighter_hull"><h4>Hull:</h4> <p>650</p></div> <div class="stat" id="sFighter_strong"><h4>Strong vs:</h4> <p>Ground</p></div> <div class="stat" id="sFighter_weak"><h4>Weak vs:</h4> <p>Anti-air, Interceptors, Strikecraft</p></div> </div> </div> </div>'
//         },
//         'SupportCruiser': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/supportCruiser_coalition.jpg"/> <figcaption> <h2> coalition support cruiser </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="sCruiser_speed"><h4>Speed:</h4> <p>70</p></div> <div class="stat" id="sCruiser_armor"><h4>Armor:</h4> <p>2</p></div> <div class="stat" id="sCruiser_damage"><h4>Damage:</h4> <p>1</p></div> <div class="stat" id="sCruiser_RoF"><h4>Rate of Fire:</h4> <p>Low</p></div> <div class="stat" id="sCruiser_hull"><h4>Hull:</h4> <p>4100</p></div> <div class="stat" id="sCruiser_strong"><h4>Strong vs:</h4> <p>N/A</p></div> <div class="stat" id="sCruiser_weak"><h4>Weak vs:</h4> <p>Everthing</p></div> </div> </div> </div>'
//         },
//         'TacticalBomber': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare"> <figure> <img src="images/coalitionUnits/bomber_coalition.jpg"/> <figcaption> <h2> coalition bomber </h2> </figcaption> </figure> <div class="unitInfo"> <div class="unitDescription" id="unitDescription"> <p>This is a description</p></div> <div class="unitStats"> <div class="stat" id="bomber_speed"><h4>Speed:</h4> <p>370</p></div> <div class="stat" id="bomber_armor"><h4>Armor:</h4> <p>15</p></div> <div class="stat" id="bomber_damage"><h4>Damage:</h4> <p>2500</p></div> <div class="stat" id="bomber_RoF"><h4>Rate of Fire:</h4> <p>Low</p></div> <div class="stat" id="bomberbomberull"><h4>Hull:</h4> <p>1050</p></div> <div class="stat" id="bomber_strong"><h4>Strong vs:</h4> <p>Ground</p></div> <div class="stat" id="bomber_weak"><h4>Weak vs:</h4> <p>Anti-air, Interceptors, Strikecraft</p></div> </div> </div> </div>'
//         },
//     },
//     methods: {
//         swapComponent: function(component) {
//             if (this.currentComponent === component) {
//                 this.currentComponent = null;
//             } else {
//                 this.currentComponent = component;
//             }
//         }
//     }
// });

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
