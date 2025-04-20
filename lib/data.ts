import { Data, IProductInput, IUserInput } from '@/types'
import { toSlug } from './utils'
import bcrypt from 'bcryptjs'

const users: IUserInput[] = [
  {
    name: 'John',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'Admin',
    address: {
      fullName: 'John Doe',
      street: '111 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jane Harris',
      street: '222 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1002',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Jack',
    email: 'jack@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jack Ryan',
      street: '333 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1003',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Sarah',
    email: 'sarah@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Sarah Smith',
      street: '444 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1005',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'John Alexander',
      street: '555 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1006',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Emily Johnson',
      street: '666 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Alice',
    email: 'alice@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Alice Cooper',
      street: '777 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10007',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Tom',
    email: 'tom@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Tom Hanks',
      street: '888 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10008',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Linda',
    email: 'linda@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Linda Holmes',
      street: '999 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10009',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'George',
    email: 'george@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'George Smith',
      street: '101 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10010',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jessica',
    email: 'jessica@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jessica Brown',
      street: '102 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10011',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Chris',
    email: 'chris@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Chris Evans',
      street: '103 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10012',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Samantha',
    email: 'samantha@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Samantha Wilson',
      street: '104 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10013',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'David',
    email: 'david@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'David Lee',
      street: '105 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10014',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Anna',
    email: 'anna@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Anna Smith',
      street: '106 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10015',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
]

const products: IProductInput[] = [
  
  // Sharp
  {
    name: 'Sharp Multifunction Color Printer BP 20C25',
    slug: toSlug('Sharp Multifunction Color Printer BP 20C25'),
    category: 'Sharp',
    images: ['/images/p1-1.jpg', '/images/p1-2.jpg', '/images/p1-3.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Sharp',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Sharp Multifunction Color Printer BP 20C25 is a high-quality color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Sharp Multifunction Color Printer BP 30C25',
    slug: toSlug('Sharp Multifunction Color Printer BP 30C25'),
    category: 'Sharp',
    images: ['/images/p2-1.jpg', '/images/p2-2.jpg', '/images/p2-3.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Sharp',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Sharp Multifunction Color Printer BP 30C25 is a high-quality color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4','A5',"A3+A4+A5"],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Sharp Multifunction Monochrome Printer BP 20M22',
    slug: toSlug('Sharp Multifunction Monochrome Printer BP 20M22'),
    category: 'Sharp',
    images: ['/images/p3-1.jpg', '/images/p3-2.jpg', '/images/p3-3.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Sharp',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Sharp Multifunction Monochrome Printer BP 20M22 is a high-quality Black&White printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Sharp Multifunction Color Printer BP 10C20',
    slug: toSlug('Sharp Multifunction Color Printer BP 10C20'),
    category: 'Sharp',
    images: ['/images/p4-1.jpg', '/images/p4-2.jpg', '/images/p4-3.jpg','/images/p4-4.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Sharp',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Sharp Multifunction Color Printer BP 10C20 is a high-quality Color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Sharp Multifunction Monochrome Printer BP 20M31',
    slug: toSlug('Sharp Multifunction Monochrome Printer BP 20M31'),
    category: 'Sharp',
    images: ['/images/p5-1.jpg', '/images/p5-2.jpg', '/images/p5-3.jpg','/images/p5-4.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Sharp',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Sharp Multifunction Monochrome Printer BP 20M31 is a high-quality Black&White printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  // Ricoh
  {
    name: 'Ricoh Monochrome Printer SP 210',
    slug: toSlug('Ricoh Monochrome Printer SP 210'),
    category: 'Ricoh',
    images: ['/images/p6-1.jpg', '/images/p6-2.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Ricoh',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Ricoh Monochrome Printer SP 210 is a high-quality Black&White printer that can print. It is perfect for home and office use.',
    paperSize: ['A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Ricoh Multifunction Monochrome Printer SP 3510sf',
    slug: toSlug('Ricoh Multifunction Monochrome Printer SP 3510sf'),
    category: 'Ricoh',
    images: ['/images/p7-1.jpg', '/images/p7-2.jpg', '/images/p7-3.jpg', '/images/p7-4.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Ricoh',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Ricoh Monochrome Printer SP 3510sf is a high-quality Black&White printer that can print. It is perfect for home and office use.',
    paperSize: ['A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Ricoh Multifunction Color Printer MP C2011',
    slug: toSlug('Ricoh Multifunction Color Printer MP C2011'),
    category: 'Ricoh',
    images: ['/images/p8-1.jpg', '/images/p8-2.jpg', '/images/p8-3.jpg', '/images/p8-4.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Ricoh',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Ricoh Color Printer MP C2011 is a high-quality Color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Ricoh Multifunction Color Printer MP C2003',
    slug: toSlug('Ricoh Multifunction Color Printer MP C2003'),
    category: 'Ricoh',
    images: ['/images/p9-1.jpg', '/images/p9-2.jpg', '/images/p9-3.jpg', '/images/p9-4.jpg','/images/p9-5.jpg'],
    tags: ['best-seller','todays-deal'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Ricoh',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Ricoh Color Printer MP C2003 is a high-quality Color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  // Brother
  {
    name: 'Brother Multifunction Monochrome Printer DCP-L2640D',
    slug: toSlug('Brother Multifunction Monochrome Printer DCP-L2640D'),
    category: 'Brother',
    images: ['/images/p10-1.jpg', '/images/p10-2.jpg', '/images/p10-3.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Brother',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Brother Monochrome Printer DCP-L2640D is a high-quality Black&White printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Brother Multifunction Color Printer MFC-L9610CDN',
    slug: toSlug('Brother Multifunction Color Printer MFC-L9610CDN'),
    category: 'Brother',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
    tags: ['featured','todays-deal'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Brother',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Brother Color Printer MFC-L9610CDN is a high-quality Color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  // HP
  {
    name: 'HP Multifunction Laserjet Pro Monochrome Printer MFP M329Dw',
    slug: toSlug('HP Multifunction Laserjet Pro Monochrome Printer MFP M329Dw'),
    category: 'Hp',
    images: ['/images/p12-1.jpg', '/images/p12-2.jpg', '/images/p12-3.jpg','/images/p12-4.jpg','/images/p12-5.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'HP',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'HP Monochrome Printer MFP M329Dw is a high-quality Monochrome printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'HP Multifunction Laserjet Pro Monochrome Printer MFP 3104fDw',
    slug: toSlug('HP Multifunction Laserjet Pro Monochrome Printer MFP 3104fDw'),
    category: 'Hp',
    images: ['/images/p13-1.jpg'],
    tags: ['featured','todays-deal'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'HP',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'HP Monochrome Printer MFP 3104fDw is a high-quality Monochrome printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'HP Multifunction Laserjet Pro Monochrome Printer MFP 4104Dw',
    slug: toSlug('HP Multifunction Laserjet Pro Monochrome Printer MFP 4104Dw'),
    category: 'Hp',
    images: ['/images/p14-1.jpg', '/images/p14-2.jpg', '/images/p14-3.jpg'],
    tags: ['new-arrival','todays-deal'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'HP',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'HP Monochrome Printer MFP 4104Dw is a high-quality Monochrome printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4'],
    colors: ['White'],

    reviews: [],
  },
]

const reviews = [
  {
    rating: 1,
    title: 'Poor quality',
    comment:
      'Very disappointed. The item broke after just a few uses. Not worth the money.',
  },
  {
    rating: 2,
    title: 'Disappointed',
    comment:
      "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
  },
  {
    rating: 2,
    title: 'Needs improvement',
    comment:
      "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
  },
  {
    rating: 3,
    title: 'not bad',
    comment:
      'This product is decent, the quality is good but it could use some improvements in the details.',
  },
  {
    rating: 3,
    title: 'Okay, not great',
    comment:
      'It works, but not as well as I hoped. Quality is average and lacks some finishing.',
  },
  {
    rating: 3,
    title: 'Good product',
    comment:
      'This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.',
  },
  {
    rating: 4,
    title: 'Pretty good',
    comment:
      "Solid product! Great value for the price, but there's room for minor improvements.",
  },
  {
    rating: 4,
    title: 'Very satisfied',
    comment:
      'Good product! High quality and worth the price. Would consider buying again.',
  },
  {
    rating: 4,
    title: 'Absolutely love it!',
    comment:
      'Perfect in every way! The quality, design, and comfort exceeded all my expectations.',
  },
  {
    rating: 4,
    title: 'Exceeded expectations!',
    comment:
      'Fantastic product! High quality, feels durable, and performs well. Highly recommend!',
  },
  {
    rating: 5,
    title: 'Perfect purchase!',
    comment:
      "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
  },
  {
    rating: 5,
    title: 'Highly recommend',
    comment:
      "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
  },
  {
    rating: 5,
    title: 'Just what I needed',
    comment:
      'Exactly as described! Quality exceeded my expectations, and it arrived quickly.',
  },
  {
    rating: 5,
    title: 'Excellent choice!',
    comment:
      'This product is outstanding! Everything about it feels top-notch, from material to functionality.',
  },
  {
    rating: 5,
    title: "Couldn't ask for more!",
    comment:
      "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
  },
]

const data: Data = {
  users,
  products,
  reviews,
  webPages: [
    {
      title: 'About Us',
      slug: 'about-us',
      content: `Welcome to [Your Store Name], your trusted destination for quality products and exceptional service. Our journey began with a mission to bring you the best shopping experience by offering a wide range of products at competitive prices, all in one convenient platform.

At [Your Store Name], we prioritize customer satisfaction and innovation. Our team works tirelessly to curate a diverse selection of items, from everyday essentials to exclusive deals, ensuring there's something for everyone. We also strive to make your shopping experience seamless with fast shipping, secure payments, and excellent customer support.

As we continue to grow, our commitment to quality and service remains unwavering. Thank you for choosing [Your Store Name]—we look forward to being a part of your journey and delivering value every step of the way.`,
      isPublished: true,
    },
    {
      title: 'Contact Us',
      slug: 'contact-us',
      content: `We’re here to help! If you have any questions, concerns, or feedback, please don’t hesitate to reach out to us. Our team is ready to assist you and ensure you have the best shopping experience.

**Customer Support**
For inquiries about orders, products, or account-related issues, contact our customer support team:
- **Email:** support@example.com
- **Phone:** +1 (123) 456-7890
- **Live Chat:** Available on our website from 9 AM to 6 PM (Monday to Friday).

**Head Office**
For corporate or business-related inquiries, reach out to our headquarters:
- **Address:** 1234 E-Commerce St, Suite 567, Business City, BC 12345
- **Phone:** +1 (987) 654-3210

We look forward to assisting you! Your satisfaction is our priority.
`,
      isPublished: true,
    },
    {
      title: 'Help',
      slug: 'help',
      content: `Welcome to our Help Center! We're here to assist you with any questions or concerns you may have while shopping with us. Whether you need help with orders, account management, or product inquiries, this page provides all the information you need to navigate our platform with ease.

**Placing and Managing Orders**
Placing an order is simple and secure. Browse our product categories, add items to your cart, and proceed to checkout. Once your order is placed, you can track its status through your account under the "My Orders" section. If you need to modify or cancel your order, please contact us as soon as possible for assistance.

**Shipping and Returns**
We offer a variety of shipping options to suit your needs, including standard and express delivery. For detailed shipping costs and delivery timelines, visit our Shipping Policy page. If you're not satisfied with your purchase, our hassle-free return process allows you to initiate a return within the specified timeframe. Check our Returns Policy for more details.

**Account and Support**
Managing your account is easy. Log in to update your personal information, payment methods, and saved addresses. If you encounter any issues or need further assistance, our customer support team is available via email, live chat, or phone. Visit our Contact Us page for support hours and contact details.`,
      isPublished: true,
    },
    {
      title: 'Privacy Policy',
      slug: 'privacy-policy',
      content: `We value your privacy and are committed to protecting your personal information. This Privacy Notice explains how we collect, use, and share your data when you interact with our services. By using our platform, you consent to the practices described herein.

We collect data such as your name, email address, and payment details to provide you with tailored services and improve your experience. This information may also be used for marketing purposes, but only with your consent. Additionally, we may share your data with trusted third-party providers to facilitate transactions or deliver products.

Your data is safeguarded through robust security measures to prevent unauthorized access. However, you have the right to access, correct, or delete your personal information at any time. For inquiries or concerns regarding your privacy, please contact our support team.`,
      isPublished: true,
    },
    {
      title: 'Conditions of Use',
      slug: 'conditions-of-use',
      content: `Welcome to [Ecommerce Website Name]. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our platform, including browsing, purchasing products, and interacting with any content or services provided. You must be at least 18 years old or have the consent of a parent or guardian to use this website. Any breach of these terms may result in the termination of your access to our platform.

We strive to ensure all product descriptions, pricing, and availability information on our website are accurate. However, errors may occur, and we reserve the right to correct them without prior notice. All purchases are subject to our return and refund policy. By using our site, you acknowledge that your personal information will be processed according to our privacy policy, ensuring your data is handled securely and responsibly. Please review these terms carefully before proceeding with any transactions.
`,
      isPublished: true,
    },
    {
      title: 'Customer Service',
      slug: 'customer-service',
      content: `At [Your Store Name], our customer service team is here to ensure you have the best shopping experience. Whether you need assistance with orders, product details, or returns, we are committed to providing prompt and helpful support.

If you have questions or concerns, please reach out to us through our multiple contact options:
- **Email:** support@example.com
- **Phone:** +1 (123) 456-7890
- **Live Chat:** Available on our website for instant assistance

We also provide helpful resources such as order tracking, product guides, and FAQs to assist you with common inquiries. Your satisfaction is our priority, and we’re here to resolve any issues quickly and efficiently. Thank you for choosing us!`,
      isPublished: true,
    },
    {
      title: 'Returns Policy',
      slug: 'returns-policy',
      content: 'Returns Policy Content',
      isPublished: true,
    },
    {
      title: 'Careers',
      slug: 'careers',
      content: 'careers Content',
      isPublished: true,
    },
    {
      title: 'Blog',
      slug: 'blog',
      content: 'Blog Content',
      isPublished: true,
    },
    {
      title: 'Sell Products',
      slug: 'sell',
      content: `Sell Products Content`,
      isPublished: true,
    },
    {
      title: 'Become Affiliate',
      slug: 'become-affiliate',
      content: 'Become Affiliate Content',
      isPublished: true,
    },
    {
      title: 'Advertise Your Products',
      slug: 'advertise',
      content: 'Advertise Your Products',
      isPublished: true,
    },
    {
      title: 'Shipping Rates & Policies',
      slug: 'shipping',
      content: 'Shipping Rates & Policies',
      isPublished: true,
    },
  ],
    headerMenus: [
      {
        name: "Today's Deal",
        href: '/search?tag=todays-deal',
      },
      {
        name: 'New Arrivals',
        href: '/search?tag=new-arrival',
      },
      {
        name: 'Featured Products',
        href: '/search?tag=featured',
      },
      {
        name: 'Best Sellers',
        href: '/search?tag=best-seller',
      },
      {
        name: 'Browsing History',
        href: '/#browsing-history',
      },
      {
        name: 'Customer Service',
        href: '/page/customer-service',
      },
      {
        name: 'About Us',
        href: '/page/about-us',
      },
      {
        name: 'Help',
        href: '/page/help',
      },
    ],

    carousels: [
      {
        title: 'Ricoh Bestselling Printers',
        buttonCaption: 'Shop Now',
        image: '/images/Banner1.jpg',
        url: '/search?category=Ricoh',
        isPublished: true,
      },
      {
        title: 'Sharp Bestselling Printers',
        buttonCaption: 'Shop Now',
        image: '/images/Banner3.jpg',
        url: '/search?category=Sharp',
        isPublished: true,
      },
      {
        title: 'Brother Bestselling Printers',
        buttonCaption: 'See More',
        image: '/images/Banner4.jpg',
        url: '/search?category=Brother',
        isPublished: true,
      },
      {
        title: 'HP Bestselling Printers',
        buttonCaption: 'See More',
        image: '/images/Banner5.jpg',
        url: '/search?category=HP',
        isPublished: true,
      },
      {
        title: 'Original Spares',
        buttonCaption: 'See More',
        image: '/images/Banner2.jpg',
        url: '/search?category=OEM_Spares',
        isPublished: true,
      },
    ],
  }
  
  export default data