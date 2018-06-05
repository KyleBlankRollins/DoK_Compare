//Create components

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

var galBatCruiser = Vue.component('battle-cruiser',{
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
            'AAV', 'ArtilleryCruiser', 'AssaultCruiser', 'Baserunner', 'BattleCruiser',  'Carrier', 'Gunship', 'LAV', 'MissileBattery', 'Railgun', 'Salvager', 'StrikeFighter', 'SupportCruiser', 'TacticalBomber',
        ],
        show: false,
    },
    components: {
        'AAV': galAAV,
        'ArtilleryCruiser': galArtCruiser,
        'AssaultCruiser': galAssCruiser,
        'Baserunner': galBaserunner,
        'BattleCruiser': galBatCruiser,
        'Carrier': galCarrier,
        'Gunship': galGunship,
        'LAV': galLAV,
        'MissileBattery': galMisBattery,
        'Railgun': galRailgun,
        'Salvager': galSalvager,
        'StrikeFighter': galStrFighter,
        'SupportCruiser': galSupCruiser,
        'TacticalBomber': galTacBomber,
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
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'Baserunner': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'BattleCruiser': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'Carrier': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'Gunship': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'LAV': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'MissileBattery': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'Railgun': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'Salvager': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'StrikeFighter': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'SupportCruiser': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
//         },
//         'TacticalBomber': {
//             template:
//             '<div class="gaalsienCompare" id="gaalsienCompare">  </div>'
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
