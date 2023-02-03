import { IProduct } from '@utils/constants/product';

const PRODUCTS: IProduct[] = [
  {
    id: 'product-01',
    name: "Le' Feminine",
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1669896798/artsy/product/4764a7daa106cda4888b058654d2bf6f_b5w6au.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Australia',
    artist: 'Ali Dawa',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 28.9,
    views: 1700,
    category: 'Editorial',
  },
  {
    id: 'product-02',
    name: 'The First Men',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1669896809/artsy/product/fb3d9960288826716a27d9959abf72a8_twt7aq.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Egypt',
    artist: 'Ali Dawa',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 50.8,
    views: 1600,
    category: 'Art & Museum',
  },
  {
    id: 'product-03',
    name: 'The Boolean Egyptian',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1669896818/artsy/product/f3fde95f8e3bc2f6fee4e448074c8c47_za95et.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Italy',
    artist: 'Noble Kun',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 35.7,
    views: 1500,
    category: 'Art & Museum',
  },
  {
    id: 'product-04',
    name: "Philomena' 22",
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670027163/artsy/product/df459e1d97066ed90e131a19da154688_zjuhlx.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Australia',
    artist: 'Noble Kun',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 11.6,
    views: 1400,
    category: 'Editorial',
  },
  {
    id: 'product-06',
    name: 'Ellipsia',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670027200/artsy/product/3371eec54d926c484dd69d7363432a27_qpsxxt.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'United States',
    artist: 'Noble Kun',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 23.5,
    views: 1300,
    category: 'Editorial',
  },
  {
    id: 'product-07',
    name: 'The Law Makers',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670027215/artsy/product/c44f3d64696250f0b46f1f8b180d5abb_l6yzea.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Australia',
    artist: 'Ali Dawa',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 37.4,
    views: 1200,
    category: 'Editorial',
  },
  {
    id: 'product-08',
    name: 'Veil',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670027229/artsy/product/7306d8bca17164c353d00533e95d8c9c_xny1dz.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Zambia',
    artist: 'Kali Xunil',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 1.2,
    views: 1100,
    category: 'Editorial',
  },
  {
    id: 'product-09',
    name: 'Alternating',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670027242/artsy/product/54603e6bdd14f32d13d7935b4126b936_emjwlo.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Japan',
    artist: 'Kali Xunil',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 18.1,
    views: 1000,
    category: 'Editorial',
  },
  {
    id: 'product-10',
    name: "Rosemary' 22",
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670027256/artsy/product/e65ef334f9ea3c4e6dbaa1c25f71183f_xnm8cy.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'England',
    artist: 'Park Cho',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 36.0,
    views: 1100,
    category: 'Editorial',
  },
  {
    id: 'product-11',
    name: 'Beverly',
    artist: 'Park Cho',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670027269/artsy/product/05c8d21cb1d6eeb48e702cd68cfa6fdf_mrfshu.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'South Korea',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 42.1,
    views: 1200,
    category: 'Nature',
  },
  {
    id: 'product-12',
    name: 'Sassy',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1669896997/artsy/product/f6d7e37a86a9d1d440e978343a94d1f0_naflow.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'United States',
    artist: 'Park Cho',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 16.9,
    views: 1700,
    category: 'Editorial',
  },
  {
    id: 'product-13',
    name: 'Bougie',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1669896986/artsy/product/d4f5c7429123e89313f29da75ce73fdf_rgl2ea.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'United States',
    artist: 'Makun Jay',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 30.8,
    views: 1700,
    category: 'Editorial',
  },
  {
    id: 'product-14',
    name: 'Lost',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1669896980/artsy/product/1bb7ac6aadfd528e28c2a2733811555a_v1z9xr.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'United States',
    artist: 'Makun Jay',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 23.7,
    views: 1700,
    category: 'Fashion',
  },
  {
    id: 'product-15',
    name: "Circa '95",
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1669896969/artsy/product/1175709a6ca949a9461629d9b3908f80_x2lwgp.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'United States',
    artist: 'Makun Jay',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 49.6,
    views: 1300,
    category: 'Editorial',
  },
  {
    id: 'product-16',
    name: 'Fatherhood',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986781/artsy/product/person-gfd031b2ad_640_wfbqam.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Mexico',
    artist: 'Makun Jay',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 15.5,
    views: 1700,
    category: 'Editorial',
  },

  {
    id: 'product-17',
    name: 'Mystery Island',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986780/artsy/product/nature-g1e9396a3d_640_hkdnxw.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'South Korea',
    artist: 'Makun Jay',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 49.4,
    views: 1700,
    category: 'Nature',
  },

  {
    id: 'product-18',
    name: 'Refraction',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986780/artsy/product/prism-g76835bfbb_640_kqrpnz.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Brazil',
    artist: 'Ali Dawa',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 48.3,
    views: 1400,
    category: 'Optics',
  },

  {
    id: 'product-19',
    name: 'Road to Tshushima',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986780/artsy/product/mountain-landscape-g0f0fc9918_640_zlvw00.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Nigeria',
    artist: 'Maku Jay',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 38.2,
    views: 1700,
    category: 'Nature',
  },

  {
    id: 'product-20',
    name: 'Origin',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986779/artsy/product/light-gb5272e107_640_zpocoo.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Denmark',
    artist: 'Noble Kun',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 32.1,
    views: 1700,
    category: 'Optics',
  },
  {
    id: 'product-21',
    name: 'Lazer',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986779/artsy/product/laser-g58db6fa8d_640_kz41gm.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Japan',
    artist: 'Park Cho',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 17.1,
    views: 1700,
    category: 'Optics',
  },

  {
    id: 'product-22',
    name: 'Weight',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986779/artsy/product/man-g10156ffa5_640_r5yenf.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Mexico',
    artist: 'Kali Xunil',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 27.1,
    views: 1700,
    category: 'Editorial',
  },
  {
    id: 'product-23',
    name: 'Light with Life',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986779/artsy/product/laser-show-gaeef4a888_640_zt1etj.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Argentina',
    artist: 'Ali Dawa',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 20.0,
    views: 2200,
    category: 'Optics',
  },
  {
    id: 'product-24',
    name: 'Magestic Island',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986779/artsy/product/hd-wallpaper-gabdb23872_640_ojscii.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Dubai',
    artist: 'Kali Xunil',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 28.1,
    views: 1700,
    category: 'Nature',
  },
  {
    id: 'product-25',
    name: 'The Cover',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986779/artsy/product/hijab-g63abf89fb_640_hdxteh.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'North Korea',
    artist: 'Park Cho',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 35.9,
    views: 2500,
    category: 'Fashion',
  },
  {
    id: 'product-26',
    name: 'The Street',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986778/artsy/product/city-g60a630247_640_mt78et.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'India',
    artist: 'Noble Kun',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 34.8,
    views: 1700,
    category: 'Art and Museum',
  },
  {
    id: 'product-27',
    name: 'Newtonian Light',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986778/artsy/product/hd-wallpaper-g24c5e0392_640_kojhwn.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Morocco',
    artist: 'Noble Kun',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 32.7,
    views: 1700,
    category: 'Optics',
  },

  {
    id: 'product-28',
    name: 'Sea Shell',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986778/artsy/product/hd-wallpaper-g7e0c958ea_640_yfnpci.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Qatar',
    artist: 'Ali Dawa',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 17.6,
    views: 1700,
    category: 'Nature',
  },

  {
    id: 'product-29',
    name: 'The Twin',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986778/artsy/product/children-g4e565ed98_640_ossbqz.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Saudi Arabia',
    artist: 'Park Cho',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 9.5,
    views: 1700,
    category: 'Fashion',
  },

  {
    id: 'product-30',
    name: 'Hat Woman',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986778/artsy/product/fashion-gb7bd48dfd_640_jwyhgp.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Australia',
    artist: 'Kali Xunil',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 42.4,
    views: 1700,
    category: 'Fashion',
  },

  {
    id: 'product-31',
    name: 'Accent Is Gold',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986778/artsy/product/body-painting-gc0ff36eb7_640_s2oktk.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'United States',
    artist: 'Makun Jay',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 28.3,
    views: 1700,
    category: 'Editorial',
  },

  {
    id: 'product-32',
    name: 'The Power',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986777/artsy/product/bodybuilder-gae8166766_640_nilt54.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Germany',
    artist: 'Noble Kun',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 9.2,
    views: 1700,
    category: 'Editorial',
  },

  {
    id: 'product-33',
    name: 'Wedding Dress',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986777/artsy/product/wedding-dresses-g4e00a99cb_640_rlt5ds.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Germany',
    artist: 'Park Cho',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 26.1,
    views: 1700,
    category: 'Fashion',
  },

  {
    id: 'product-34',
    name: 'Dark Cloud',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986777/artsy/product/tree-ge0a87fabe_640_zzmaod.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Poland',
    artist: 'Ali Dawa',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 35.0,
    views: 1700,
    category: 'Nature',
  },

  {
    id: 'product-35',
    name: 'Headless',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986777/artsy/product/statue-gc0794e039_640_k74bxs.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Nigeria',
    artist: 'Makun Jay',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 48.9,
    views: 1700,
    category: 'Art & Museum',
  },
  {
    id: 'product-36',
    name: 'Lone Scrap',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986777/artsy/product/antique-gc5c1443e8_640_wkgoaa.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'North Korea',
    artist: 'Noble Kun',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 14.8,
    views: 1700,
    category: 'Art & Museum',
  },
  {
    id: 'product-37',
    name: 'The Blacksmith',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986776/artsy/product/blacksmith-g20eae79a7_640_elbx5f.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'England',
    artist: 'Kali Xunil',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 41.8,
    views: 1800,
    category: 'Editorial',
  },

  {
    id: 'product-38',
    name: 'The Play',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986776/artsy/product/bicycle-g4c9449f79_640_w8fyrw.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Portugal',
    artist: 'Ali Dawa',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 44.7,
    views: 1700,
    category: 'Art & Museum',
  },

  {
    id: 'product-39',
    name: 'The Cube',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986776/artsy/product/rubik-g1ac822ece_640_h0bctb.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'England',
    artist: 'Park Cho',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 34.6,
    views: 1700,
    category: 'Art & Museum',
  },

  {
    id: 'product-40',
    name: 'The Path',
    cover:
      'https://res.cloudinary.com/yheenca/image/upload/v1670986776/artsy/product/avenue-g286540f29_640_wp2tfx.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur',
    country: 'Nigeria',
    artist: 'Makun Jay',
    creatorIds: [
      'creator-01',
      'creator-02',
      'creator-03',
      'creator-04',
      'creator-05',
    ],
    status: ['Auction', 'Sale'],
    price: 15.8,
    views: 1700,
    category: 'Nature',
  },
];

export default PRODUCTS;
