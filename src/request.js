export default async function request(url, options = {}) {
  if (url === '/products') return allInfo.data;
  if (url.includes('/products/')) {
    url = url.slice(url.indexOf('/') + 1);
    url = url.slice(url.indexOf('/') + 1);
    return getProductById(+url);
  }
  if (url.includes('/products?category=')) {
    url = url.slice(url.indexOf('=') + 1);
    if (url === 'All') {
      return allInfo.data;
    }
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
        'https://grillonadime.com/wp-content/uploads/2022/04/ok-fried-onion-burgers-15-2.jpg',
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
        'https://images.kitchenstories.io/recipeImages/03_11_ItalienischesSandwichMitParmaschinken_titlePicture.jpg',
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
        `https://www.honeywhatscooking.com/wp-content/uploads/2022/06/Bombay-Grilled-Sandwich29.jpg`,
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
        'https://assets.epicurious.com/photos/59c2baf0c7319519e1cf1c1c/5:4/w_1665,h_1332,c_limit/zingermans_detroit_pizza_recipe-092017.jpg',
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
  const elementIndex = allInfo.data.findIndex((element) => element.id === id);
  return allInfo.data[elementIndex];
}

function getProductsByCategory(category) {
  const arr = allInfo.data.filter((i) => {
    return i.category === category;
  });
  return arr;
}
