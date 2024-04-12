const locations = 
    [
        
            {
                "id": 1,
                "name": "Acadia National Park",
                "state": "Maine",
                "region": "Northeast",
                "image": "https://www.tripsavvy.com/thmb/YwnJbSbTcv0LTzddyzmEfjKlcyM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AcadiaNationalParkMaine-0d82794c812449c1ba514f4642f8aea2.jpg",
                "city": "Bar Harbor"
            },
            {
                "id": 2,
                "name": "American Samoa National Park",
                "state": "American Samoa",
                "region": "Pacific",
                "image": "https://i.natgeofe.com/n/c7008ade-4fd7-4974-86cf-da3a6ba2972c/92925_16x9.jpg?w=1200",
                "city": "Pago Pago"
            },
            {
                "id": 3,
                "name": "Arches National Park",
                "state": "Utah",
                "region": "Intermountain",
                "image": "https://images.ctfassets.net/0wjmk6wgfops/6X7stlHaF9n3Nkfkzc99Tc/af09bb17eaf3425d737373b6f418bfbf/Delicate_Artch_resize_AdobeStock_333825728.jpeg?q=70",
                "city": "Moab"
            },
            {
                "id": 4,
                "name": "Badlands National Park",
                "state": "South Dakota",
                "region": "Midwest",
                "city": "Interior"
            },
            {
                "id": 5,
                "name": "Big Bend National Park",
                "state": "Texas",
                "region": "Intermountain",
                "city": "Alpine"
            },
            {
                "id": 6,
                "name": "Biscayne National Park",
                "state": "Florida",
                "region": "Southeast",
                "city": "Miami"
            },
            {
                "id": 7,
                "name": "Black Canyon of the Gunnison National Park",
                "state": "Colorado",
                "region": "Intermountain",
                "city": "Montrose"
            },
            {
                "id": 8,
                "name": "Bryce Canyon National Park",
                "state": "Utah",
                "region": "Intermountain",
                "city": "Bryce Canyon City"
            },
            {
                "id": 9,
                "name": "Canyonlands National Park",
                "state": "Utah",
                "region": "Intermountain",
                "city": "Moab"
            },
            {
                "id": 10,
                "name": "Capitol Reef National Park",
                "state": "Utah",
                "region": "Intermountain",
                "city": "Torrey"
            },
            {
                "id": 11,
                "name": "Carlsbad Caverns National Park",
                "state": "New Mexico",
                "region": "Intermountain",
                "city": "Carlsbad"
            },
            {
                "id": 12,
                "name": "Channel Islands National Park",
                "state": "California",
                "region": "Pacific West",
                "city": "Ventura"
            },
            {
                "id": 13,
                "name": "Congaree National Park",
                "state": "South Carolina",
                "region": "Southeast",
                "city": "Hopkins"
            },
            {
                "id": 14,
                "name": "Crater Lake National Park",
                "state": "Oregon",
                "region": "Pacific West",
                "city": "Crater Lake"
            },
            {
                "id": 15,
                "name": "Cuyahoga Valley National Park",
                "state": "Ohio",
                "region": "Midwest",
                "city": "Peninsula"
            },
            {
                "id": 16,
                "name": "Death Valley National Park",
                "state": "California",
                "region": "Pacific West",
                "city": "Furnace Creek"
            },
            {
                "id": 17,
                "name": "Denali National Park and Preserve",
                "state": "Alaska",
                "region": "Alaska",
                "city": "Denali"
            },
            {
                "id": 18,
                "name": "Dry Tortugas National Park",
                "state": "Florida",
                "region": "Southeast",
                "city": "Key West"
            },
            {
                "id": 19,
                "name": "Everglades National Park",
                "state": "Florida",
                "region": "Southeast",
                "city": "Homestead"
            },
            {
                "id": 20,
                "name": "Gates of the Arctic National Park and Preserve",
                "state": "Alaska",
                "region": "Alaska",
                "city": "Coldfoot"
            },
            {
                "id": 21,
                "name": "Gateway Arch National Park",
                "state": "Missouri",
                "region": "Midwest",
                "city": "St. Louis"
            },
            {
                "id": 22,
                "name": "Glacier National Park",
                "state": "Montana",
                "region": "Intermountain",
                "city": "West Glacier"
            },
            {
                "id": 23,
                "name": "Glacier Bay National Park and Preserve",
                "state": "Alaska",
                "region": "Alaska",
                "city": "Gustavus"
            },
            {
                "id": 24,
                "name": "Grand Canyon National Park",
                "state": "Arizona",
                "region": "Intermountain",
                "city": "Grand Canyon Village"
            },
            {
                "id": 25,
                "name": "Grand Teton National Park",
                "state": "Wyoming",
                "region": "Intermountain",
                "city": "Jackson"
            },
            {
                "id": 26,
                "name": "Great Basin National Park",
                "state": "Nevada",
                "region": "Intermountain",
                "city": "Baker"
            },
            {
                "id": 27,
                "name": "Great Sand Dunes National Park and Preserve",
                "state": "Colorado",
                "region": "Intermountain",
                "city": "Mosca"
            },
            {
                "id": 28,
                "name": "Great Smoky Mountains National Park",
                "state": "North Carolina, Tennessee",
                "region": "Southeast",
                "city": "Gatlinburg"
            },
            {
                "id": 29,
                "name": "Guadalupe Mountains National Park",
                "state": "Texas",
                "region": "Intermountain",
                "city": "Salt Flat"
            },
            {
                "id": 30,
                "name": "Haleakalā National Park",
                "state": "Hawaii",
                "region": "Pacific West",
                "city": "Kula"
            },
            {
                "id": 31,
                "name": "Hawai'i Volcanoes National Park",
                "state": "Hawaii",
                "region": "Pacific West",
                "city": "Volcano"
            },
            {
                "id": 32,
                "name": "Hot Springs National Park",
                "state": "Arkansas",
                "region": "Midwest",
                "city": "Hot Springs"
            },
            {
                "id": 33,
                "name": "Indiana Dunes National Park",
                "state": "Indiana",
                "region": "Midwest",
                "city": "Chesterton"
            },
            {
                "id": 34,
                "name": "Isle Royale National Park",
                "state": "Michigan",
                "region": "Midwest",
                "city": "Houghton"
            },
            {
                "id": 35,
                "name": "Joshua Tree National Park",
                "state": "California",
                "region": "Pacific West",
                "city": "Twentynine Palms"
            },
            {
                "id": 36,
                "name": "Katmai National Park and Preserve",
                "state": "Alaska",
                "region": "Alaska",
                "city": "King Salmon"
            },
            {
                "id": 37,
                "name": "Kenai Fjords National Park",
                "state": "Alaska",
                "region": "Alaska",
                "city": "Seward"
            },
            {
                "id": 38,
                "name": "Kings Canyon National Park",
                "state": "California",
                "region": "Pacific West",
                "city": "Three Rivers"
            },
            {
                "id": 39,
                "name": "Kobuk Valley National Park",
                "state": "Alaska",
                "region": "Alaska",
                "city": "Kotzebue"
            },
            {
                "id": 40,
                "name": "Lake Clark National Park and Preserve",
                "state": "Alaska",
                "region": "Alaska",
                "city": "Port Alsworth"
            },
            {
                "id": 41,
                "name": "Lassen Volcanic National Park",
                "state": "California",
                "region": "Pacific West",
                "city": "Mineral"
            },
            {
                "id": 42,
                "name": "Mammoth Cave National Park",
                "state": "Kentucky",
                "region": "Midwest",
                "city": "Mammoth Cave"
            },
            {
                "id": 43,
                "name": "Mesa Verde National Park",
                "state": "Colorado",
                "region": "Intermountain",
                "city": "Mancos"
            },
            {
                "id": 44,
                "name": "Mount Rainier National Park",
                "state": "Washington",
                "region": "Pacific West",
                "city": "Ashford"
            },
            {
                "id": 45,
                "name": "North Cascades National Park",
                "state": "Washington",
                "region": "Pacific West",
                "city": "Sedro-Woolley"
            },
            {
                "id": 46,
                "name": "Olympic National Park",
                "state": "Washington",
                "region": "Pacific West",
                "city": "Port Angeles"
            },
            {
                "id": 47,
                "name": "Petrified Forest National Park",
                "state": "Arizona",
                "region": "Intermountain",
                "city": "Holbrook"
            },
            {
                "id": 48,
                "name": "Pinnacles National Park",
                "state": "California",
                "region": "Pacific West",
                "city": "Paicines"
            },
            {
                "id": 49,
                "name": "Redwood National and State Parks",
                "state": "California",
                "region": "Pacific West",
                "city": "Crescent City"
            },
            {
                "id": 50,
                "name": "Rocky Mountain National Park",
                "state": "Colorado",
                "region": "Intermountain",
                "city": "Estes Park"
            },
            {
                "id": 51,
                "name": "Saguaro National Park",
                "state": "Arizona",
                "region": "Intermountain",
                "city": "Tucson"
            },
            {
                "id": 52,
                "name": "Sequoia National Park",
                "state": "California",
                "region": "Pacific West",
                "city": "Three Rivers"
            },
            {
                "id": 53,
                "name": "Shenandoah National Park",
                "state": "Virginia",
                "region": "National Capital",
                "city": "Luray"
            },
            {
                "id": 54,
                "name": "Theodore Roosevelt National Park",
                "state": "North Dakota",
                "region": "Midwest",
                "city": "Medora"
            },
            {
                "id": 55,
                "name": "Virgin Islands National Park",
                "state": "U.S. Virgin Islands",
                "region": "Southeast",
                "city": "Cruz Bay"
            },
            {
                "id": 56,
                "name": "Voyageurs National Park",
                "state": "Minnesota",
                "region": "Midwest",
                "city": "International Falls"
            },
            {
                "id": 57,
                "name": "White Sands National Park",
                "state": "New Mexico",
                "region": "Intermountain",
                "city": "Alamogordo"
            },
            {
                "id": 58,
                "name": "Wind Cave National Park",
                "state": "South Dakota",
                "region": "Midwest",
                "city": "Hot Springs"
            },
            {
                "id": 59,
                "name": "Wrangell-St. Elias National Park and Preserve",
                "state": "Alaska",
                "region": "Alaska",
                "city": "Copper Center"
            },
            {
                "id": 60,
                "name": "Yellowstone National Park",
                "state": "Wyoming, Montana, Idaho",
                "region": "Intermountain",
                "city": "West Yellowstone"
            },
            {
                "id": 61,
                "name": "Yosemite National Park",
                "state": "California",
                "region": "Pacific West",
                "city": "Yosemite Valley"
            },
            {
                "id": 62,
                "name": "Zion National Park",
                "state": "Utah",
                "region": "Intermountain",
                "city": "Springdale"
            },
            {
                "id": 63,
                "name": "Great Sand Dunes National Park and Preserve",
                "state": "Colorado",
                "region": "Intermountain",
                "city": "Mosca"
            }
        
      ]

      export default locations; 