
export interface DamData {
  id: string;
  name: string;
  state: string;
  river: string;
  coordinates: [number, number]; // [longitude, latitude]
  height: number; // in meters
  length: number; // in meters
  volume: number; // in million cubic meters
  yearCompleted: number;
  type: string;
  purpose: string[];
  capacity: number; // in million cubic meters
  currentLevel: number; // percentage of capacity (0-100)
  alertLevel: 'normal' | 'warning' | 'critical';
  description: string;
  imageUrl?: string;
}

const damsData: DamData[] = [
  {
    id: "tehri",
    name: "Tehri Dam",
    state: "Uttarakhand",
    river: "Bhagirathi",
    coordinates: [78.4803, 30.3793],
    height: 260.5,
    length: 575,
    volume: 52.8,
    yearCompleted: 2006,
    type: "Rock and Earth-fill",
    purpose: ["Hydroelectric", "Irrigation", "Municipal water supply"],
    capacity: 3540,
    currentLevel: 85,
    alertLevel: "normal",
    description: "Tehri Dam is the tallest dam in India and one of the tallest in the world. It is a multi-purpose rock and earth-fill embankment dam on the Bhagirathi River, a major tributary of the Ganges.",
    imageUrl: "https://img.jagranjosh.com/images/2022/June/1562022/tehri-compressed.jpg"
  },
  {
    id: "bhakra",
    name: "Bhakra Dam",
    state: "Himachal Pradesh",
    river: "Sutlej",
    coordinates: [76.4343, 31.4104],
    height: 226,
    length: 518,
    volume: 9.34,
    yearCompleted: 1963,
    type: "Concrete Gravity",
    purpose: ["Hydroelectric", "Irrigation"],
    capacity: 9340,
    currentLevel: 92,
    alertLevel: "critical",
    description: "Bhakra Dam is a concrete gravity dam on the Sutlej River in Bilaspur, Himachal Pradesh in northern India. The dam, located at a gorge near the upstream Bhakra village in Bilaspur district of Himachal Pradesh, is Asia's second highest at 225.5 m (740 ft) high next to the 261m Tehri Dam.",
    imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/dam647_081117121907_1-x404.jpg?9FIZpe39SqXGiX7EIroLsVdcLWjDaUeV"
  },
  {
    id: "hirakud",
    name: "Hirakud Dam",
    state: "Odisha",
    river: "Mahanadi",
    coordinates: [83.8544, 21.5231],
    height: 61,
    length: 4800,
    volume: 15.8,
    yearCompleted: 1957,
    type: "Composite",
    purpose: ["Hydroelectric", "Irrigation", "Flood control"],
    capacity: 5818,
    currentLevel: 75,
    alertLevel: "warning",
    description: "Hirakud Dam is built across the Mahanadi River, about 15 km from Sambalpur in Odisha. It is the longest dam in India and one of the longest in the world.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Z0_VRNYd2vTUrofus7CJ_08OkQfOK3lmBA&s"
  },
  {
    id: "nagarjunasagar",
    name: "Nagarjuna Sagar Dam",
    state: "Andhra Pradesh / Telangana",
    river: "Krishna",
    coordinates: [79.3131, 16.5708],
    height: 124,
    length: 1450,
    volume: 12.9,
    yearCompleted: 1967,
    type: "Masonry",
    purpose: ["Hydroelectric", "Irrigation"],
    capacity: 11472,
    currentLevel: 68,
    alertLevel: "normal",
    description: "Nagarjuna Sagar Dam is a masonry dam across the Krishna River at Nagarjuna Sagar in Nalgonda district, Telangana, India. It is the third largest dam in terms of volume after the Bhakra Nangal Dam in Punjab and the Rihand Dam in Uttar Pradesh.",
    imageUrl: "https://s7ap1.scene7.com/is/image/incredibleindia/nagarjuna-sagar-dam-hyderabad-telangana-3-musthead-hero?qlt=82&ts=1726653079796"
  },
  {
    id: "sardar_sarovar",
    name: "Sardar Sarovar Dam",
    state: "Gujarat",
    river: "Narmada",
    coordinates: [73.7493, 21.8301],
    height: 163,
    length: 1210,
    volume: 6.82,
    yearCompleted: 2017,
    type: "Concrete Gravity",
    purpose: ["Hydroelectric", "Irrigation", "Flood control"],
    capacity: 9500,
    currentLevel: 78,
    alertLevel: "normal",
    description: "The Sardar Sarovar Dam is a gravity dam on the Narmada River near Navagam, Gujarat, India. It is the largest dam and part of the Narmada Valley Project, a large hydraulic engineering project involving the construction of a series of large irrigation and hydroelectric multi-purpose dams on the Narmada River.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Sardar_Sarovar_Dam_1.jpg"
  },
  {
    id: "bansagar",
    name: "Bansagar Dam",
    state: "Madhya Pradesh",
    river: "Son",
    coordinates: [81.0389, 24.1872],
    height: 67,
    length: 1065,
    volume: 13.4,
    yearCompleted: 2006,
    type: "Earth-fill",
    purpose: ["Irrigation", "Hydroelectric"],
    capacity: 5410,
    currentLevel: 63,
    alertLevel: "normal",
    description: "Bansagar Dam is an embankment dam on the Son River situated in the Shahdol district of Madhya Pradesh, India. The dam was completed in 2006 and its hydroelectric power complex was completed in 2015.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Bansagar3.JPG/1200px-Bansagar3.JPG"
  },
  {
    id: "rihand",
    name: "Rihand Dam",
    state: "Uttar Pradesh",
    river: "Rihand",
    coordinates: [83.0131, 24.1712],
    height: 91.44,
    length: 934,
    volume: 14.22,
    yearCompleted: 1962,
    type: "Concrete Gravity",
    purpose: ["Hydroelectric", "Irrigation"],
    capacity: 10600,
    currentLevel: 72,
    alertLevel: "normal",
    description: "Rihand Dam, also known as Govind Ballabh Pant Sagar, is a concrete gravity dam located on the Rihand River near Pipri in Sonbhadra district, Uttar Pradesh, India. The reservoir, known as Gobind Ballabh Pant Sagar, is the largest man-made lake in India by volume.",
    imageUrl: "https://www.sonbhadratourism.com/static/media/dam1.29ec3e4cc914cc7a1d05.jpeg"
  },
  {
    id: "tungabhadra",
    name: "Tungabhadra Dam",
    state: "Karnataka / Andhra Pradesh",
    river: "Tungabhadra",
    coordinates: [76.3432, 15.2654],
    height: 49.5,
    length: 2441,
    volume: 3.23,
    yearCompleted: 1953,
    type: "Masonry and Earth-fill",
    purpose: ["Irrigation", "Hydroelectric"],
    capacity: 3764,
    currentLevel: 82,
    alertLevel: "normal",
    description: "Tungabhadra Dam is constructed across the Tungabhadra River, a tributary of the Krishna River. The dam is shared by Karnataka and Andhra Pradesh states, the joint project was undertaken by erstwhile Hyderabad State and erstwhile Madras Presidency when the construction was started in 1944.",
    imageUrl: "https://c.ndtvimg.com/2024-08/81rahm4_tungabhadra-dam_625x300_11_August_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738"
  },
];

export default damsData;
