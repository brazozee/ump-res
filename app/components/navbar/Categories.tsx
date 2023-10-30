'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPlant2, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiHouse, 
  GiIsland,
  GiMagnifyingGlass,
  GiPalmTree,
  GiRiver,
  GiWindmill
} from 'react-icons/gi';
import { FaHotel, FaHouseUser, FaMosque, FaSearchLocation, FaSkiing } from 'react-icons/fa';
import { BsHouse, BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import { BiBuildingHouse, BiHotel } from 'react-icons/bi';


export const categories = [
  {
    label: 'West Acres ext 1',
    icon: BsHouse,
    description: 'Property in West acres extention 1',
  },
  {
    label: 'Stonehenge',
    icon: BiBuildingHouse,
    description: 'Property in Stonehenge',
  },
  {
    label: 'Sonheuwel',
    icon: FaHotel,
    description: 'Property in Sonheuwel'
  },
  {
    label: 'Kamagugu',
    icon: TbMountain,
    description: 'Property at Kamagugu'
  },
  {
    label: 'Valencia',
    icon: FaMosque,
    description: 'Property in Valencia'
  },
  {
    label: 'Kanyamazane',
    icon: FaSearchLocation,
    description: 'Property in Kanyamazane'
  },
  {
    label: 'Ngodini',
    icon: BiBuildingHouse,
    description: 'Property in Ngodini'
  },
  {
    label: 'Steiltes',
    icon: IoDiamond,
    description: 'Property in Steiltes'
  },
  {
    label: 'Belladona',
    icon: GiPalmTree,
    description: 'Property at belladona'
  },
  {
    label: 'West acres ext 2',
    icon: BiHotel,
    description: 'property at West acres extension 2'
  },
  {
    label: 'Matafini',
    icon: TbPlant2,
    description: 'Property at Matafini'
  },
  {
    label: 'White river',
    icon: GiRiver,
    description: 'Property in White river'
  },
  {
    label: 'Pienaar',
    icon: FaHouseUser,
    description: 'Property in pienaar'
  },
  {
    label: 'Tekwani',
    icon: GiHouse,
    description: 'This property is in a barn!'
  },
  {
    label: 'Other',
    icon: GiMagnifyingGlass,
    description: 'Property at surrounding areas in Mbombela'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;