
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
  // Adding 4 new dams
  {
    id: "koyna",
    name: "Koyna Dam",
    state: "Maharashtra",
    river: "Koyna",
    coordinates: [73.7689, 17.4009],
    height: 103,
    length: 807,
    volume: 15.0,
    yearCompleted: 1963,
    type: "Rubble Concrete",
    purpose: ["Hydroelectric", "Irrigation"],
    capacity: 2797,
    currentLevel: 65,
    alertLevel: "normal",
    description: "Koyna Dam is one of the largest dams in Maharashtra, India. It is a rubble-concrete dam constructed on Koyna River which rises in Mahabaleshwar, a hill station in Sahyadri ranges.",
    imageUrl: "https://static.toiimg.com/thumb/msid-65302448,width-1070,height-580,imgsize-1409387,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
  },
  {
    id: "krishna_raja_sagara",
    name: "Krishna Raja Sagara Dam",
    state: "Karnataka",
    river: "Kaveri",
    coordinates: [76.5730, 12.4258],
    height: 39,
    length: 3600,
    volume: 1.42,
    yearCompleted: 1932,
    type: "Gravity",
    purpose: ["Irrigation", "Drinking water", "Hydroelectric"],
    capacity: 1369,
    currentLevel: 88,
    alertLevel: "warning",
    description: "Krishna Raja Sagara, also popularly known as KRS, is a lake and dam created by constructing a dam across the river Kaveri in Karnataka, India. The dam is named after the King of Mysore at the time, Krishnaraja Wodeyar IV.",
    imageUrl: "https://i0.wp.com/www.opindia.com/wp-content/uploads/2019/07/KRS-dam.jpg?fit=700%2C400&ssl=1"
  },
  {
    id: "indira_sagar",
    name: "Indira Sagar Dam",
    state: "Madhya Pradesh",
    river: "Narmada",
    coordinates: [76.2834, 22.1723],
    height: 92,
    length: 653,
    volume: 12.22,
    yearCompleted: 2005,
    type: "Earth-fill and Concrete",
    purpose: ["Hydroelectric", "Irrigation"],
    capacity: 12200,
    currentLevel: 71,
    alertLevel: "normal",
    description: "Indira Sagar Dam is a multipurpose project of Madhya Pradesh on the Narmada River at Narmadanagar in the Khandwa district of Madhya Pradesh in India. It is the largest reservoir in India with a total capacity of 12.22 billion cubic meters.",
    imageUrl: "https://static.theprint.in/wp-content/uploads/2019/09/Indira-Sagar-Dam.jpg"
  },
  {
    id: "mettur",
    name: "Mettur Dam",
    state: "Tamil Nadu",
    river: "Kaveri",
    coordinates: [77.8021, 11.7864],
    height: 54,
    length: 1700,
    volume: 2.65,
    yearCompleted: 1934,
    type: "Masonry and Concrete",
    purpose: ["Hydroelectric", "Irrigation"],
    capacity: 2646,
    currentLevel: 94,
    alertLevel: "critical",
    description: "Mettur Dam is one of the largest dams in India and also the largest in Tamil Nadu, located across the river Kaveri where it enters the plains. The dam creates Stanley Reservoir and provides irrigation facilities to parts of Salem, Erode, Namakkal, Karur, Tiruchirappalli and Thanjavur district.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mettur_Dam_during_full_capacity.jpg/1200px-Mettur_Dam_during_full_capacity.jpg"
  }
];

export default damsData;
