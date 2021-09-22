export default function RestaurantsApi(req, res) {
  res.status(200).json([
    {
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80',
      name: 'Citrus Mediterranean Cuisine',
      category: 'Mediterranean, European',
      reviews: '1047'
    },
    {
      url: 'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
      name: 'Mori Restaurant',
      category: 'Mediterranean, Turkish',
      reviews: '2058'
    },
    {
      url: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1085&q=80',
      name: 'Unique Restaurant',
      category: 'Mediterranean, Turkish',
      reviews: '255'
    },
    {
      url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Hilmi Restaurant Sahil',
      category: 'Seafood, Mediterranean',
      reviews: '852'
    },
    {
      url: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      name: 'Nice N Easy',
      category: 'Mediterranean',
      reviews: '656'
    },
    {
      url: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Girida Restaurant',
      category: 'Seafood, Mediterranean',
      reviews: '439'
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Rokka Restaurant',
      category: 'Steakhouse, Seafood',
      reviews: '814'
    },
    {
      url: 'https://images.unsplash.com/photo-1521886366014-bebca51ec05c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
      name: 'Cinbal Restaurant',
      category: 'Barbecue, Turkish',
      reviews: '1083'
    }
  ])
}


