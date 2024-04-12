const locations = 
    [
        {
          "id": 1,
          "name": "Acadia National Park",
          "state": "Maine",
          "region": "Northeast"
        },
        {
          "id": 2,
          "name": "American Samoa National Park",
          "state": "American Samoa",
          "region": "Pacific"
        },
        {
          "id": 3,
          "name": "Arches National Park",
          "state": "Utah",
          "region": "Intermountain"
        },
        {
          "id": 4,
          "name": "Badlands National Park",
          "state": "South Dakota",
          "region": "Midwest"
        },
        {
          "id": 5,
          "name": "Big Bend National Park",
          "state": "Texas",
          "region": "Intermountain"
        },
        {
          "id": 6,
          "name": "Biscayne National Park",
          "state": "Florida",
          "region": "Southeast"
        },
        {
          "id": 7,
          "name": "Black Canyon of the Gunnison National Park",
          "state": "Colorado",
          "region": "Intermountain"
        },
        {
          "id": 8,
          "name": "Bryce Canyon National Park",
          "state": "Utah",
          "region": "Intermountain"
        },
        {
          "id": 9,
          "name": "Canyonlands National Park",
          "state": "Utah",
          "region": "Intermountain"
        },
        {
          "id": 10,
          "name": "Capitol Reef National Park",
          "state": "Utah",
          "region": "Intermountain"
        },
        {
          "id": 11,
          "name": "Carlsbad Caverns National Park",
          "state": "New Mexico",
          "region": "Intermountain"
        },
        {
          "id": 12,
          "name": "Channel Islands National Park",
          "state": "California",
          "region": "Pacific West"
        },
        {
          "id": 13,
          "name": "Congaree National Park",
          "state": "South Carolina",
          "region": "Southeast"
        },
        {
          "id": 14,
          "name": "Crater Lake National Park",
          "state": "Oregon",
          "region": "Pacific West"
        },
        {
          "id": 15,
          "name": "Cuyahoga Valley National Park",
          "state": "Ohio",
          "region": "Midwest"
        },
        {
          "id": 16,
          "name": "Death Valley National Park",
          "state": "California",
          "region": "Pacific West"
        },
        {
          "id": 17,
          "name": "Denali National Park and Preserve",
          "state": "Alaska",
          "region": "Alaska"
        },
        {
          "id": 18,
          "name": "Dry Tortugas National Park",
          "state": "Florida",
          "region": "Southeast"
        },
        {
          "id": 19,
          "name": "Everglades National Park",
          "state": "Florida",
          "region": "Southeast"
        },
        {
          "id": 20,
          "name": "Gates of the Arctic National Park and Preserve",
          "state": "Alaska",
          "region": "Alaska"
        },
        {
          "id": 21,
          "name": "Gateway Arch National Park",
          "state": "Missouri",
          "region": "Midwest"
        },
        {
          "id": 22,
          "name": "Glacier National Park",
          "state": "Montana",
          "region": "Intermountain"
        },
        {
          "id": 23,
          "name": "Glacier Bay National Park and Preserve",
          "state": "Alaska",
          "region": "Alaska"
        },
        {
          "id": 24,
          "name": "Grand Canyon National Park",
          "state": "Arizona",
          "region": "Intermountain"
        },
        {
          "id": 25,
          "name": "Grand Teton National Park",
          "state": "Wyoming",
          "region": "Intermountain"
        },
        {
          "id": 26,
          "name": "Great Basin National Park",
          "state": "Nevada",
          "region": "Intermountain"
        },
        {
          "id": 27,
          "name": "Great Sand Dunes National Park and Preserve",
          "state": "Colorado",
          "region": "Intermountain"
        },
        {
          "id": 28,
          "name": "Great Smoky Mountains National Park",
          "state": "North Carolina, Tennessee",
          "region": "Southeast"
        },
        {
          "id": 29,
          "name": "Guadalupe Mountains National Park",
          "state": "Texas",
          "region": "Intermountain"
        },
        {
          "id": 30,
          "name": "Haleakalā National Park",
          "state": "Hawaii",
          "region": "Pacific West"
        },
        {
          "id": 31,
          "name": "Hawai'i Volcanoes National Park",
          "state": "Hawaii",
          "region": "Pacific West"
        },
        {
          "id": 32,
          "name": "Hot Springs National Park",
          "state": "Arkansas",
          "region": "Midwest"
        },
        {
          "id": 33,
          "name": "Indiana Dunes National Park",
          "state": "Indiana",
          "region": "Midwest"
        },
        {
          "id": 34,
          "name": "Isle Royale National Park",
          "state": "Michigan",
          "region": "Midwest"
        },
        {
          "id": 35,
          "name": "Joshua Tree National Park",
          "state": "California",
          "region": "Pacific West"
        },
        {
          "id": 36,
          "name": "Katmai National Park and Preserve",
          "state": "Alaska",
          "region": "Alaska"
        },
        {
          "id": 37,
          "name": "Kenai Fjords National Park",
          "state": "Alaska",
          "region": "Alaska"
        },
        {
          "id": 38,
          "name": "Kings Canyon National Park",
          "state": "California",
          "region": "Pacific West"
        },
        {
          "id": 39,
          "name": "Kobuk Valley National Park",
          "state": "Alaska",
          "region": "Alaska"
        },
        {
          "id": 40,
          "name": "Lake Clark National Park and Preserve",
          "state": "Alaska",
          "region": "Alaska"
        },
        {
          "id": 41,
          "name": "Lassen Volcanic National Park",
          "state": "California",
          "region": "Pacific West"
        },
        {
          "id": 42,
          "name": "Mammoth Cave National Park",
          "state": "Kentucky",
          "region": "Midwest"
        },
        {
          "id": 43,
          "name": "Mesa Verde National Park",
          "state": "Colorado",
          "region": "Intermountain"
        },
        {
          "id": 44,
          "name": "Mount Rainier National Park",
          "state": "Washington",
          "region": "Pacific West"
        },
        {
          "id": 45,
          "name": "North Cascades National Park",
          "state": "Washington",
          "region": "Pacific West"
        },
        {
          "id": 46,
          "name": "Olympic National Park",
          "state": "Washington",
          "region": "Pacific West"
        },
        {
          "id": 47,
          "name": "Petrified Forest National Park",
          "state": "Arizona",
          "region": "Intermountain"
        },
        {
          "id": 48,
          "name": "Pinnacles National Park",
          "state": "California",
          "region": "Pacific West"
        },
        {
          "id": 49,
          "name": "Redwood National and State Parks",
          "state": "California",
          "region": "Pacific West"
        },
        {
          "id": 50,
          "name": "Rocky Mountain National Park",
          "state": "Colorado",
          "region": "Intermountain"
        },
        {
          "id": 51,
          "name": "Saguaro National Park",
          "state": "Arizona",
          "region": "Intermountain"
        },
        {
          "id": 52,
          "name": "Sequoia National Park",
          "state": "California",
          "region": "Pacific West"
        },
        {
          "id": 53,
          "name": "Shenandoah National Park",
          "state": "Virginia",
          "region": "National Capital"
        },
        {
          "id": 54,
          "name": "Theodore Roosevelt National Park",
          "state": "North Dakota",
          "region": "Midwest"
        },
        {
          "id": 55,
          "name": "Virgin Islands National Park",
          "state": "U.S. Virgin Islands",
          "region": "Southeast"
        },
        {
          "id": 56,
          "name": "Voyageurs National Park",
          "state": "Minnesota",
          "region": "Midwest"
        },
        {
          "id": 57,
          "name": "White Sands National Park",
          "state": "New Mexico",
          "region": "Intermountain"
        },
        {
          "id": 58,
          "name": "Wind Cave National Park",
          "state": "South Dakota",
          "region": "Midwest"
        },
        {
          "id": 59,
          "name": "Wrangell-St. Elias National Park and Preserve",
          "state": "Alaska",
          "region": "Alaska"
        },
        {
          "id": 60,
          "name": "Yellowstone National Park",
          "state": "Wyoming, Montana, Idaho",
          "region": "Intermountain"
        },
        {
          "id": 61,
          "name": "Yosemite National Park",
          "state": "California",
          "region": "Pacific West"
        },
        {
          "id": 62,
          "name": "Zion National Park",
          "state": "Utah",
          "region": "Intermountain"
        },
        {
          "id": 63,
          "name": "Great Sand Dunes National Park and Preserve",
          "state": "Colorado",
          "region": "Intermountain"
        }
      ]

      export default locations; 