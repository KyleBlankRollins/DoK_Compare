new Vue({
    el: '#gaalsienSelect',
    data: {
        items: [
          'gaalsien #1',
          'gaalsien #2',
          'gaalsien #3',
          'gaalsien #4'
        ],
        show: false,
    },
});

new Vue({
    el: '#kushanSelect',
    data: {
        images: [
            { url: 'images/kushanUnits/AAV_kushan.jpg', alt: 'Kushan AAV' },
            { url: 'images/kushanUnits/artilleryCruiser_kushan.jpg', alt: 'Kushan artillery cruiser' },
            { url: 'images/kushanUnits/assaultCruiser_kushan.jpg', alt: 'Kushan assault cruiser' },
            { url: 'images/kushanUnits/baserunner_kushan.jpg', alt: 'Kushan baserunner' },
            { url: 'images/kushanUnits/battlecruiser_kushan.jpg', alt: 'Kushan battlecruiser' },
            { url: 'images/kushanUnits/bomber_kushan.jpg', alt: 'Kushan tactical bomber'  },
            { url: 'images/kushanUnits/carrier_kushan.jpg', alt: 'Kushan carrier'  },
            { url: 'images/kushanUnits/gunship_kushan.jpg', alt: 'Kushan gunship'  },
            { url: 'images/kushanUnits/interceptor_kushan.jpg', alt: 'Kushan interceptor'  },
            { url: 'images/kushanUnits/LAV_kushan.jpg', alt: 'Kushan LAV'  },
            { url: 'images/kushanUnits/missileBattery_kushan.jpg', alt: 'Kushan missile battery'  },
            { url: 'images/kushanUnits/railgun_kushan.jpg', alt: 'Kushan railgun'  },
            { url: 'images/kushanUnits/salvager_kushan.jpg', alt: 'Kushan salvager'  },
            { url: 'images/kushanUnits/supportCruiser_kushan.jpg', alt: 'Kushan support cruiser'  }
        ],
        show: false,
    },
    methods: {
        greet: function (event){
            alert('Hello ' + this.name + '!')
            if (event) {
              alert(event.target.tagName)
            }
        }
    }
});

new Vue({
    el: '#swapper',
    data: {
        currentComponent: null,
        componentsArray: [
            'AAV_kushan', 'artilleryCruiser_kushan', 'assaultCruiser_kushan', 'baserunner_kushan', 'battlecruiser_kushan', 'bomber_kushan', 'carrier_kushan', 'gunship_kushan', 'interceptor_kushan', 'LAV_kushan', 'missileBattery_kushan', 'railgun_kushan', 'salvager_kushan', 'supportCruiser_kushan'
        ],
        show: false,
    },
    components: {
        'AAV_kushan': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/LAV_kushan.jpg"/> <figcaption> <h2> Kushan LAV </h2> </figcaption> </figure> </div>'
        },
        'artilleryCruiser_kushan': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/artilleryCruiser_kushan.jpg"/> <figcaption> <h2> Kushan artillery cruiser </h2> </figcaption> </figure> </div>'
        },
        'assaultCruiser_kushan': {
            template:
            '<div class="kushanCompare" id="kushanCompare"> <figure> <img src="images/kushanUnits/assaultCruiser_kushan.jpg"/> <figcaption> <h2> Kushan assault cruiser </h2> </figcaption> </figure> </div>'
        },
    },
    methods: {
        swapComponent: function(component)
        {
          this.currentComponent = component;
        }
    }
});
