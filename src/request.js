export default function request(url, options = {}) {
  if (url === '/products') return allInfo.data;
  if (url.includes('/products/')) {
    url = url.slice(url.indexOf('/') + 1);
    url = url.slice(url.indexOf('/') + 1);
    return getProductById(url);
  }
  if (url.includes('/products?category=')) {
    url = url.slice(url.indexOf('=') + 1);
    return getProductsByCategory(url);
  }
}

const allInfo = {
  data: [
    {
      id: 1,
      name: 'Yummy Chicken Soup',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 54,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Soup',
      pictures: [
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F09%2F13%2F7104329.jpg',
      ],
    },
    {
      id: 2,
      name: 'Country Burger',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 45,
      currency: '$',
      rating: 3,
      reviewsCount: 8,
      category: 'Burger',
      pictures: ['https://spectrarestaurant.com/wp-content/uploads/2022/03/Country-Burger.jpg'],
    },
    {
      id: 3,
      name: 'Margarita Pizza',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 43,
      currency: '$',
      rating: 4,
      reviewsCount: 14,
      category: 'Pizza',
      pictures: ['https://img.taste.com.au/DhThzPm9/taste/2016/11/eat-pray-love-39581-3.jpeg'],
    },
    {
      id: 4,
      name: 'Cheeze Pizza',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 32,
      currency: '$',
      rating: 3,
      reviewsCount: 8,
      category: 'Pizza',
      pictures: [
        'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-1617996277.jpg?crop=1.00xw:0.752xh;0,0.174xh&resize=640:*',
      ],
    },
    {
      id: 5,
      name: 'Cheese Burger',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 10,
      currency: '$',
      rating: 5,
      reviewsCount: 3,
      category: 'Burger',
      pictures: [
        'https://www.modernhoney.com/wp-content/uploads/2022/05/Double-Double-Cheeseburger-with-Fries-Recipe-scaled.jpg',
      ],
    },
    {
      id: 6,
      name: 'Chicken Sandwich',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 37,
      currency: '$',
      rating: 4,
      reviewsCount: 15,
      category: 'Sandwich',
      pictures: [
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/chicken-sandwich-with-mayo-500x500.jpg',
      ],
    },
    {
      id: 7,
      name: 'Borsht',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 12,
      currency: '$',
      rating: 4,
      reviewsCount: 12,
      category: 'Soup',
      pictures: [
        'https://tatyanaseverydayfood.com/wp-content/uploads/2020/03/Classic-Beef-Borscht-768x1024.jpg',
      ],
    },
    {
      id: 8,
      name: 'Fish Sandwich',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 42,
      currency: '$',
      rating: 4,
      reviewsCount: 11,
      category: 'Sandwich',
      pictures: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_1m-1nNaa8W0oAfcvtoHXOazCmcwFfDdYw&usqp=CAU',
      ],
    },
    {
      id: 9,
      name: 'Pepperoni Pizza',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 54,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Pizza',
      pictures: [
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60',
      ],
    },
    {
      id: 10,
      name: 'Siciliano Pizza',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 21,
      currency: '$',
      rating: 4,
      reviewsCount: 23,
      category: 'Pizza',
      pictures: [
        'https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg',
      ],
    },
    {
      id: 11,
      name: 'Mushroom soup',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 32,
      currency: '$',
      rating: 3,
      reviewsCount: 11,
      category: 'Soup',
      pictures: [
        'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Hungarian-Mushroom-Soup-6.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1601404554&s=cd036badd639ca5f2e919d9c1fec337c',
      ],
    },
    {
      id: 12,
      name: 'Veggie Sandwich',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 54,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Sandwich',
      pictures: [
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3D1ip9ZNIm',
      ],
    },
    {
      id: 13,
      name: 'Onion Burger',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 67,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Burger',
      pictures: [
        'https://www.seriouseats.com/thmb/WdIUiyRJ67t3eTprlWLHazwO7K8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210607-OKONIONBURGERS-JANJIGIAN-seriouseats-11-f8f06919bd654526a3766a40536bcc3c.jpg',
      ],
    },
    {
      id: 14,
      name: 'Pickle Pizza',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 69,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Pizza',
      pictures: [
        'https://www.washingtonpost.com/resizer/WZA859eqdl1br735VlartjQpvYo=/arc-anglerfish-washpost-prod-washpost/public/KO6XMOQNAEI63CHIYWG4HW5O4I.jpg',
      ],
    },
    {
      id: 15,
      name: 'Maharaja Burger',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 57,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Burger',
      pictures: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrD43KBktCBvB8RCm2i4XCp17Ya_7j-A8AQ&usqp=CAU',
      ],
    },
    {
      id: 16,
      name: 'Minestrone soup',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 54,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Soup',
      pictures: [
        'https://kristineskitchenblog.com/wp-content/uploads/2022/02/minestrone-soup-recipe-22.jpg',
      ],
    },
    {
      id: 17,
      name: 'Spicy Soup',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 54,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Soup',
      pictures: [
        'https://thealmondeater.com/wp-content/uploads/2020/09/Spicy-Sausage-Potato-Soup-1-7.jpg',
      ],
    },
    {
      id: 18,
      name: 'Prosciutto Sandwich',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 54,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Sandwich',
      pictures: [
        'https://assets.bonappetit.com/photos/62b1f659a38f8b1339b88af8/5:4/w_2715,h_2172,c_limit/20220615-0622-sandwiches-1746-final%20(1).jpg',
      ],
    },
    {
      id: 19,
      name: 'Grilled Sandwich',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 54,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Sandwich',
      pictures: [
        `https://www.seriouseats.com/thmb/FOFHUZtFUfpPnIPQAseHyzbpMfo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/09122022-GrilledCheeseEggplosionRecipe-AmandaSuarez-Hero-eb123d43626f43f4bdd3bc16d497918b.jpg`,
      ],
    },
    {
      id: 20,
      name: 'Detroit-style Pizza',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      price: 28,
      currency: '$',
      rating: 4,
      reviewsCount: 10,
      category: 'Pizza',
      pictures: [
        'https://www.seriouseats.com/thmb/c9291mRIx6n1mtaxIRuypUe4mhs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__02__20170216-detroit-style-pizza-47-1500x1125-1-233d75e6021048b3bf3cf28bd59d310b.jpg',
      ],
    },
  ],
  sorting: ['rating', 'price', 'name'],
  show: ['low to high', 'high to low'],
  similarProducts: 'by category',
  categoriesCount: 4, // Pizza, Burger, Soup, Sandwich
  routes: ['/products', '/products/:id', '/cart', '/checkout'],
  requests: ['/products', '/products/:id', '/products?catagory=Pizza'],
};

function getProductById(id) {
  let el;
  allInfo.data.forEach((i) => {
    if (i.id === +id) {
      el = i;
    }
  });
  return el;
}

function getProductsByCategory(category) {
  const arr = allInfo.data.filter((i) => {
    return i.category === category;
  });
  return arr;
}