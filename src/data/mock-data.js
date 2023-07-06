import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';

export const locationsTab = [
  { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
  { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
];

export const locations = [
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/11701153/pexels-photo-11701153.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/11701108/pexels-photo-11701108.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/11701155/pexels-photo-11701155.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/11701151/pexels-photo-11701151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 5,
        url: 'https://images.pexels.com/photos/11701123/pexels-photo-11701123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by fola',
    days: 'Oct 2-9',
    price: '$10,999 night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/1131828/pexels-photo-1131828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by yemi',
    days: 'Sep 2-11',
    price: '$3000 night',
    isNew: false,
    rating: 4.99,
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/14465275/pexels-photo-14465275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/13569906/pexels-photo-13569906.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Abuja, Nigeria',
    agent: 'Hosted by yinka',
    days: 'Nov 19-22',
    price: '$16 night',
    isNew: true,
    rating: 4.6,
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/210552/pexels-photo-210552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/3747082/pexels-photo-3747082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/2507014/pexels-photo-2507014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/2082095/pexels-photo-2082095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by yinka',
    days: 'Sep 13-18',
    price: '$34 night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 5,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/3712597/pexels-photo-3712597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by beatrice',
    days: 'Aug 1-6',
    price: '$143 night',
    isNew: true,
    rating: 4.1,
  },
  {
    id: 6,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/3773582/pexels-photo-3773582.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/3773584/pexels-photo-3773584.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/1652423/pexels-photo-1652423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/4112237/pexels-photo-4112237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by yetunde',
    days: 'Oct 9-15',
    price: '$64 night',
    isNew: false,
    rating: 4.6,
  },
  {
    id: 7,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8082301/pexels-photo-8082301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8082304/pexels-photo-8082304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8082308/pexels-photo-8082308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/8082309/pexels-photo-8082309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Abuja, Nigeria',
    agent: 'Hosted by muhammed',
    days: 'June 7-12',
    price: '$46 night',
    isNew: true,
    rating: 4.7,
  },
  {
    id: 8,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8082203/pexels-photo-8082203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8082197/pexels-photo-8082197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8082202/pexels-photo-8082202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/8082205/pexels-photo-8082205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/8082204/pexels-photo-8082204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Abuja, Nigeria',
    agent: 'Hosted by yinka',
    days: 'Jun 11-16',
    price: '$17 night',
    isNew: false,
    rating: 4.8,
  },
  {
    id: 9,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8135114/pexels-photo-8135114.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8135112/pexels-photo-8135112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8135107/pexels-photo-8135107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/8135120/pexels-photo-8135120.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/8135113/pexels-photo-8135113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by fola',
    days: 'Jul 1-6',
    price: '$91 night',
    isNew: true,
    rating: 4.3,
  },
  {
    id: 10,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8089158/pexels-photo-8089158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8089166/pexels-photo-8089166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8089156/pexels-photo-8089156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/8089089/pexels-photo-8089089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/8089092/pexels-photo-8089092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1S',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by peter',
    days: 'Jun 12-18',
    price: '$62 night',
    isNew: false,
    rating: 4.6,
  },
  
  {
    id: 11,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8092163/pexels-photo-8092163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8092169/pexels-photo-8092169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8092188/pexels-photo-8092188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/8092172/pexels-photo-8092172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/8092173/pexels-photo-8092173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Abuja, Nigeria',
    agent: 'Hosted by samuel',
    days: 'Jun 3-4',
    price: '$44 night',
    isNew: false,
    rating: 4.2,
  },

  {
    id: 12,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8089258/pexels-photo-8089258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8089257/pexels-photo-8089257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8089272/pexels-photo-8089272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/8089260/pexels-photo-8089260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/8089265/pexels-photo-8089265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by mercy',
    days: 'Nov 2-7',
    price: '$25 night',
    isNew: false,
    rating: 4.1,
  },

  {
    id: 13,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8143697/pexels-photo-8143697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8143699/pexels-photo-8143699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8143710/pexels-photo-8143710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/8143700/pexels-photo-8143700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 5,
        url: 'https://images.pexels.com/photos/8143706/pexels-photo-8143706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by tunde',
    days: 'Sep 22-25',
    price: '$35 night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 14,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8143704/pexels-photo-8143704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8143711/pexels-photo-8143711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8143719/pexels-photo-8143719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/7018253/pexels-photo-7018253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/8143696/pexels-photo-8143696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by amarachi',
    days: 'Nov 4-10',
    price: '$77 night',
    isNew: true,
    rating: 4.8,
  },
  {
    id: 15,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8142046/pexels-photo-8142046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8142051/pexels-photo-8142051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8142050/pexels-photo-8142050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/7511695/pexels-photo-7511695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 5,
        url: 'https://images.pexels.com/photos/8142048/pexels-photo-8142048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Abuja, Nigeria',
    agent: 'Hosted by chinonso',
    days: 'Sep 25-Oct 2',
    price: '$29 night',
    isNew: true,
    rating: 4.88,
  },
  {
    id: 16,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8134818/pexels-photo-8134818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8134823/pexels-photo-8134823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8134822/pexels-photo-8134822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/8134772/pexels-photo-8134772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 5,
        url: 'https://images.pexels.com/photos/8134817/pexels-photo-8134817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by comfort',
    days: 'Oct 4-9',
    price: '$50 night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 17,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8092435/pexels-photo-8092435.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },

      {
        id: 2,
        url: 'https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 3,
        url: 'https://images.pexels.com/photos/8092434/pexels-photo-8092434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 4,
        url: 'https://images.pexels.com/photos/8092426/pexels-photo-8092426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

      {
        id: 5,
        url: 'https://images.pexels.com/photos/8092424/pexels-photo-8092424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by idara',
    days: 'Jun 2-9',
    price: '$33 night',
    isNew: false,
    rating: 4.1,
  },
  {
    id: 18,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/8089086/pexels-photo-8089086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/8089085/pexels-photo-8089085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/8089088/pexels-photo-8089088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/8089074/pexels-photo-8089074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 5,
        url: 'https://images.pexels.com/photos/8082563/pexels-photo-8082563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by michelle',
    days: 'Oct 28-Nov 4',
    price: '$25 night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 19,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/7746941/pexels-photo-7746941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/7746937/pexels-photo-7746937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/7746951/pexels-photo-7746951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/7746942/pexels-photo-7746942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 5,
        url: 'https://images.pexels.com/photos/7746946/pexels-photo-7746946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by christian',
    days: 'Jun 11-16',
    price: '$32 night',
    isNew: true,
    rating: 4.7,
  },
  {
    id: 20,
    locationImages: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/7746642/pexels-photo-7746642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/7746645/pexels-photo-7746645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/7746571/pexels-photo-7746571.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/7746655/pexels-photo-7746655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 5,
        url: 'https://images.pexels.com/photos/7746653/pexels-photo-7746653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    location: 'Lagos, Nigeria',
    agent: 'Hosted by john',
    days: 'Oct 2-9',
    price: '$14 night',
    isNew: false,
    rating: 4.5,
  },
];
