export interface GirivalamStop {
  id: string;
  name: string;
  direction: string;
  deity: string;
  coordinates: [number, number];
  description: string;
  planet: string;
  color: string;
}

export const ARUNACHALA_CENTER: [number, number] = [12.2251, 79.0666];

export const GIRIVALAM_STOPS: GirivalamStop[] = [
  {
    id: 'indra',
    name: 'Indra Lingam',
    direction: 'East',
    deity: 'Indra',
    coordinates: [12.2231, 79.0729],
    description: 'Located near the eastern gopuram of the Arunachaleswarar Temple. Indra, the king of the gods, worshipped Shiva from the eastern direction. This is the starting point of the traditional Girivalam route.',
    planet: 'Jupiter',
    color: '#FFD700',
  },
  {
    id: 'agni',
    name: 'Agni Lingam',
    direction: 'Southeast',
    deity: 'Agni',
    coordinates: [12.2155, 79.0730],
    description: 'Situated on the southeastern portion of the path near Seshadri Swamigal Ashram. Agni, the fire deity, worshipped Shiva from the southeastern direction, symbolizing purification through fire.',
    planet: 'Sun',
    color: '#FF6B00',
  },
  {
    id: 'yama',
    name: 'Yama Lingam',
    direction: 'South',
    deity: 'Yama',
    coordinates: [12.2117, 79.0660],
    description: 'Located beside the cremation grounds on the southern side. Yama, the lord of death and dharma, worshipped Shiva from the south. A site of deep symbolic significance.',
    planet: 'Mars',
    color: '#8B0000',
  },
  {
    id: 'niruthi',
    name: 'Niruthi Lingam',
    direction: 'Southwest',
    deity: 'Niruthi',
    coordinates: [12.2148, 79.0582],
    description: 'Situated on the southwestern path. Niruthi, the deity of the southwest direction, protects devotees from negative influences and bestows courage.',
    planet: 'Rahu',
    color: '#4B0082',
  },
  {
    id: 'varuna',
    name: 'Varuna Lingam',
    direction: 'West',
    deity: 'Varuna',
    coordinates: [12.2220, 79.0555],
    description: 'Located near a holy tank on the western side. Varuna, the cosmic deity of water and celestial order, governs oaths and the passage of time.',
    planet: 'Saturn',
    color: '#1E90FF',
  },
  {
    id: 'vayu',
    name: 'Vayu Lingam',
    direction: 'Northwest',
    deity: 'Vayu',
    coordinates: [12.2298, 79.0561],
    description: 'Located on the northwestern path. Vayu, the wind deity and ruler of the vital breath (prana), is associated with mental clarity and life force.',
    planet: 'Moon',
    color: '#87CEEB',
  },
  {
    id: 'kubera',
    name: 'Kubera Lingam',
    direction: 'North',
    deity: 'Kubera',
    coordinates: [12.2340, 79.0638],
    description: 'Located on the northern side of the path. Kubera, the god of wealth and guardian of the northern direction, bestows prosperity and abundance on devotees.',
    planet: 'Mercury',
    color: '#32CD32',
  },
  {
    id: 'isanya',
    name: 'Isanya Lingam',
    direction: 'Northeast',
    deity: 'Isanya (Ishana)',
    coordinates: [12.2298, 79.0710],
    description: 'Located on the northeastern portion near the new bus stand. Ishana is the northeastern manifestation of Shiva himself — completing the sacred circuit of eight directional lingams.',
    planet: 'Ketu',
    color: '#DEB887',
  },
];

export const GIRIVALAM_ROUTE_WAYPOINTS: [number, number][] = [
  [12.2231, 79.0729], // Indra Lingam / Start
  [12.2200, 79.0740],
  [12.2170, 79.0738],
  [12.2155, 79.0730], // Agni Lingam
  [12.2135, 79.0715],
  [12.2117, 79.0690],
  [12.2117, 79.0660], // Yama Lingam
  [12.2118, 79.0630],
  [12.2130, 79.0602],
  [12.2148, 79.0582], // Niruthi Lingam
  [12.2170, 79.0565],
  [12.2195, 79.0555],
  [12.2220, 79.0555], // Varuna Lingam
  [12.2255, 79.0555],
  [12.2280, 79.0558],
  [12.2298, 79.0561], // Vayu Lingam
  [12.2320, 79.0578],
  [12.2335, 79.0605],
  [12.2340, 79.0638], // Kubera Lingam
  [12.2335, 79.0668],
  [12.2318, 79.0695],
  [12.2298, 79.0710], // Isanya Lingam
  [12.2270, 79.0724],
  [12.2250, 79.0730],
  [12.2231, 79.0729], // Close the loop
];

export const TOTAL_DISTANCE_KM = 14;
export const ESTIMATED_WALK_HOURS = 4.5;
