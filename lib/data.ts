import { Data, IProductInput } from '@/types'
import { toSlug } from './utils'

const products: IProductInput[] = [
  // Sharp
  {
    name: 'Sharp Multifunction Color Printer BP 20C25',
    slug: toSlug('Sharp Multifunction Color Printer BP 20C25'),
    category: 'Color Printer',
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
    category: 'Color Printer',
    images: ['/images/p2-1.jpg', '/images/p2-2.jpg', '/images/p2-3.jpg'],
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
      'Sharp Multifunction Color Printer BP 30C25 is a high-quality color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4','A5',"A3+A4+A5"],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Sharp Multifunction Monochrome Printer BP 20M22',
    slug: toSlug('Sharp Multifunction Monochrome Printer BP 20M22'),
    category: 'Monochrome Printer',
    images: ['/images/p3-1.jpg', '/images/p3-2.jpg', '/images/p3-3.jpg'],
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
      'Sharp Multifunction Monochrome Printer BP 20M22 is a high-quality Black&White printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Sharp Multifunction Color Printer BP 10C20',
    slug: toSlug('Sharp Multifunction Color Printer BP 10C20'),
    category: 'Color Printer',
    images: ['/images/p4-1.jpg', '/images/p4-2.jpg', '/images/p4-3.jpg','/images/p4-4.jpg'],
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
      'Sharp Multifunction Color Printer BP 10C20 is a high-quality Color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Sharp Multifunction Monochrome Printer BP 20M31',
    slug: toSlug('Sharp Multifunction Monochrome Printer BP 20M31'),
    category: 'Monochrome Printer',
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
    category: 'Monochrome Printer',
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
    category: 'Monochrome Printer',
    images: ['/images/p7-1.jpg', '/images/p7-2.jpg', '/images/p7-3.jpg', '/images/p7-4.jpg'],
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
      'Ricoh Monochrome Printer SP 3510sf is a high-quality Black&White printer that can print. It is perfect for home and office use.',
    paperSize: ['A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Ricoh Multifunction Color Printer MP C2011',
    slug: toSlug('Ricoh Multifunction Color Printer MP C2011'),
    category: 'Monochrome Printer',
    images: ['/images/p8-1.jpg', '/images/p8-2.jpg', '/images/p8-3.jpg', '/images/p8-4.jpg'],
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
      'Ricoh Color Printer MP C2011 is a high-quality Color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Ricoh Multifunction Color Printer MP C2003',
    slug: toSlug('Ricoh Multifunction Color Printer MP C2003'),
    category: 'Monochrome Printer',
    images: ['/images/p9-1.jpg', '/images/p9-2.jpg', '/images/p9-3.jpg', '/images/p9-4.jpg','/images/p9-5.jpg'],
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
      'Ricoh Color Printer MP C2003 is a high-quality Color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  // Brother
  {
    name: 'Brother Multifunction Monochrome Printer DCP-L2640D',
    slug: toSlug('Brother Multifunction Monochrome Printer DCP-L2640D'),
    category: 'Monochrome Printer',
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
    category: 'Color Printer',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
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
      'Brother Color Printer MFC-L9610CDN is a high-quality Color printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4', 'A3','A3+A4'],
    colors: ['White'],

    reviews: [],
  },
  // HP
  {
    name: 'HP Multifunction Laserjet Pro Monochrome Printer MFP M329Dw',
    slug: toSlug('HP Multifunction Laserjet Pro Monochrome Printer MFP M329Dw'),
    category: 'Monochrome Printer',
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
    category: 'Monochrome Printer',
    images: ['/images/p13-1.jpg'],
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
      'HP Monochrome Printer MFP 3104fDw is a high-quality Monochrome printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'HP Multifunction Laserjet Pro Monochrome Printer MFP 4104Dw',
    slug: toSlug('HP Multifunction Laserjet Pro Monochrome Printer MFP 4104Dw'),
    category: 'Monochrome Printer',
    images: ['/images/p14-1.jpg', '/images/p14-2.jpg', '/images/p14-3.jpg'],
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
      'HP Monochrome Printer MFP 4104Dw is a high-quality Monochrome printer that can print, scan, and copy. It is perfect for home and office use.',
    paperSize: ['A4'],
    colors: ['White'],

    reviews: [],
  },
]

const data: Data = {
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
    products,
  }
  
  export default data