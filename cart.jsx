/* eslint-disable no-unused-vars */
import React from 'react';
import { getAllCartItems, } from './cartAPI';

function Cart() {
  // Retrieve all cart items

  const cartItems = getAllCartItems();
  return (
    <div>
      <h1>Cart Items:</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Cart;


_______________________________________________________

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyANOkupeI8MQQFVv66-8nCTt4wxwpv-MQg",
  authDomain: "cart-api-7eccb.firebaseapp.com",
  projectId: "cart-api-7eccb",
  storageBucket: "cart-api-7eccb.appspot.com",
  messagingSenderId: "718883464604",
  appId: "1:718883464604:web:077979695ff2860e291459",
  measurementId: "G-WXWSR2LX8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const cartCollectionRef = collection(db, 'Cart API');

function Cart() {
  // Initialize state to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Use useEffect to fetch Firestore documents when the component mounts
  useEffect(() => {
    fetchDocuments();
  }, []);

  // Function to fetch Firestore documents
  async function fetchDocuments() {
    try {
      const querySnapshot = await getDocs(cartCollectionRef);
      const cartItemsData = querySnapshot.docs.map((doc) => doc.data());
      setCartItems(cartItemsData);
      console.log('Documents fetched successfully.');
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  }

  return (
    <div>
      <h1>Cart Items:</h1>
      <ul>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cart;


--------------------------------

// const cartItems = [
//     {
//       id: 1,
//       title: "Complete Automation Services",
//       // image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.globaltrademag.com%2Fwhat-is-automation-and-why-does-your-company-need-it%2F&psig=AOvVaw0WuGWfNXt9UP-QA3hgjVlT&ust=1686319261053000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjV8fXqs_8CFQAAAAAdAAAAABAE",
//       image: "../public/images/10.jpg",
//       description: "We deals in complete automation. provided every kind facilities related to automation. We design as per customer requirement and also deals in customize automated project, offer multiple range just we need to know the application what wanted to fulfill.",
//     },
//     {
//       id: 2,
//       title: "Heavy Earth Moving Equipment for Construction",
//       // image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.liveabout.com%2Fmust-have-earth-moving-construction-heavy-equipment-844586&psig=AOvVaw3N7Sv5-w9n1G5XqRfuPR8W&ust=1686319474443000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOj2zdvrs_8CFQAAAAAdAAAAABAE",
//       image: "../public/images/15.jpg",
//       description: "DEALS IN COMPLETE RANGE OF CONSTRUCTION MACHINERY. At Paragon Technical Solutions, we take immense pride in offering a comprehensive range of construction equipment for sale. Our commitment to excellence and customer satisfaction drives us to provide top-quality machinery that meets the diverse needs of the construction industry. With our extensive inventory and in-depth industry knowledge, we ensure that our clients have access to the latest and most advanced construction equipment available. Whether it's excavators, bulldozers, cranes, or any other essential machinery, we deliver reliable solutions that enable our customers to accomplish their projects with utmost efficiency and precision. We strive to be the trusted partner for construction companies, contractors, and builders, providing them with the tools they need to succeed in their endeavors. With our dedication to exceptional service, competitive pricing, and a wide range of equipment options, we aim to foster long-term relationships and support the growth and success of our valued clients in the construction industry.",
//     },
//     {
//       id: 3,
//       title: "Offering Wide Range of Material Handling Equipments",
//       // image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.egypt-business.com%2Fticker%2Fdetails%2F1726-global-material-handling-equipment-market-report-analysis-and-opportunities%2F124027&psig=AOvVaw1AGUW4xsOh1cZMYCoyrza9&ust=1686319663064000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDWvLXss_8CFQAAAAAdAAAAABAE",
//       image: "../public/images/14.jpg",
//       description: "At Paragon Technical Solutions, we take great pride in offering a comprehensive range of material handling equipment for sale. Our commitment to excellence and customer satisfaction drives us to provide top-quality machinery that meets the diverse needs of the industry. With our extensive inventory and in-depth knowledge of material handling processes, we ensure that our clients have access to the latest and most advanced equipment available. Whether it's forklifts, pallet jacks, conveyors, or any other essential machinery, we deliver reliable solutions that optimize efficiency, productivity, and safety in material handling operations. We strive to be the trusted partner for warehouses, logistics companies, manufacturers, and businesses across various sectors.",
//     },
//     {
//       id: 4,
//       title: "RANGE OF ARIEL WORKING PLATFORM",
//       // image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flinkquip.com%2Findex.php%2Faerial-working-platforms&psig=AOvVaw35xwh2xUuC6Qdar1hgDcUq&ust=1686319787153000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDHivHss_8CFQAAAAAdAAAAABAE",
//       image: "../public/images/6.jpg",
//       description: "At Paragon Technical Solutions, we are proud to offer a comprehensive range of aerial working platforms for sale. Our commitment to excellence and customer satisfaction drives us to provide top-quality machinery that meets the diverse needs of industries requiring elevated work solutions. With our extensive inventory and in-depth knowledge of aerial platforms, we ensure that our clients have access to the latest and most advanced equipment available. Whether it's scissor lifts, boom lifts, or mast lifts, we deliver reliable and versatile solutions that enhance productivity, safety, and efficiency in elevated work environments. We strive to be the trusted partner for construction companies, maintenance crews, event organizers, and businesses in various sectors, providing them with the tools they need to work at height with confidence and precision. With our dedication to exceptional service, competitive pricing, and a wide range of equipment options, we aim to establish long-term relationships and support the growth and success of our valued clients in the aerial working platform industry.",
//     },
//     {
//       id: 5,
//       title: "Complete Warehouse Solution ",
//       // image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Farticles.cyzerg.com%2Fwarehouse-layout-design-principles&psig=AOvVaw0T224UlkddPNAVTKXrYo_B&ust=1686319949584000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDjmb7ts_8CFQAAAAAdAAAAABAE",
//       image: "../public/images/11.jpg",
//       description: "sELECTIVE, DRIVE IN AND FIFO LIFO, AS - RS COMPLETE RANGE OF RACKING SYSTEM. DEALS IN COMPLETE RANGE OF DOORS AN D DOCKS AND ALSO CUSTOMIZE THINGS AS PER REQUIREMENT. PROVIDE ALL THINGS WHICH IS REQUIRED TO MAKE PRODUCTIVE WAREHOUSE JUST AT YOUR DOOR STEP",
//     },
//     {
//       id: 6,
//       title: "Racking System & Shelving",
//       // image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.srsi.com%2Funderstanding-pallet-rack-frame-capacity%2F&psig=AOvVaw2s-eSHQAODhHbp0aLhj2Vu&ust=1686320082290000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiPtv3ts_8CFQAAAAAdAAAAABAE",
//       image: "../public/images/7.jpg",
//       description: "A warehouse racking system is a storage solution designed to stack materials in horizontal rows with multiple levels. These systems can help you manage and better utilize your warehouse space while organizing cargo to streamline operations. Selective racking, Drive-in racking, Push-back racking, Cantilever racking, Mobile racking",
//     },
//   ];
  
//   // API endpoint to retrieve all cart items
//   function getAllCartItems() {
//     return cartItems;
//   }
  
//   // // API endpoint to retrieve a specific cart item by ID
//   // function getCartItemById(id) {
//   //   return cartItems.find((item) => item.id === id);
//   // }
  
//   export { getAllCartItems };


const cartItems = [
    {
      id: 1,
      title: "Complete Automation Services",
      image: "../public/images/10.jpg",
      description: "We deal in complete automation. We provide every kind of facility related to automation. We design as per customer requirements and also handle customized automated projects. We offer a wide range, catering to specific applications.",
    },
    {
      id: 2,
      title: "Heavy Earth Moving Equipment for Construction",
      image: "../public/images/15.jpg",
      description: "We deal in a complete range of construction machinery. At Paragon Technical Solutions, we take immense pride in offering a comprehensive range of construction equipment for sale. Our commitment to excellence and customer satisfaction drives us to provide top-quality machinery that meets the diverse needs of the construction industry. With our extensive inventory and in-depth industry knowledge, we ensure that our clients have access to the latest and most advanced construction equipment available. Whether it's excavators, bulldozers, cranes, or any other essential machinery, we deliver reliable solutions that enable our customers to accomplish their projects with utmost efficiency and precision. We strive to be the trusted partner for construction companies, contractors, and builders, providing them with the tools they need to succeed in their endeavors. With our dedication to exceptional service, competitive pricing, and a wide range of equipment options, we aim to foster long-term relationships and support the growth and success of our valued clients in the construction industry.",
    },
    {
      id: 3,
      title: "Offering Range of Material Handling Equipment",
      image: "../public/images/14.jpg",
      description: "At Paragon Technical Solutions, we take great pride in offering a comprehensive range of material handling equipment for sale. Our commitment to excellence and customer satisfaction drives us to provide top-quality machinery that meets the diverse needs of the industry. With our extensive inventory and in-depth knowledge of material handling processes, we ensure that our clients have access to the latest and most advanced equipment available. Whether it's forklifts, pallet jacks, conveyors, or any other essential machinery, we deliver reliable solutions that optimize efficiency, productivity, and safety in material handling operations. We strive to be the trusted partner for warehouses, logistics companies, manufacturers, and businesses across various sectors.",
    },
    {
      id: 4,
      title: "Range of Aerial Working Platforms",
      image: "../public/images/23.png",
      description: "At Paragon Technical Solutions, we are proud to offer a comprehensive range of aerial working platforms for sale. Our commitment to excellence and customer satisfaction drives us to provide top-quality machinery that meets the diverse needs of industries requiring elevated work solutions. With our extensive inventory and in-depth knowledge of aerial platforms, we ensure that our clients have access to the latest and most advanced equipment available. Whether it's scissor lifts, boom lifts, or mast lifts, we deliver reliable and versatile solutions that enhance productivity, safety, and efficiency in elevated work environments. We strive to be the trusted partner for construction companies, maintenance crews, event organizers, and businesses in various sectors, providing them with the tools they need to work at height with confidence and precision. With our dedication to exceptional service, competitive pricing, and a wide range of equipment options, we aim to establish long-term relationships and support the growth and success of our valued clients in the aerial working platform industry.",
    },
    {
      id: 5,
      title: "Complete Warehouse Solution",
      image: "../public/images/11.jpg",
      description: "Selective, drive-in, FIFO, LIFO, AS-RS: we offer a complete range of racking systems. We also deal in complete range of doors and docks and provide custom solutions based on specific requirements. We provide all the necessary components to create a productive warehouse, delivered right to your doorstep.",
    },
    {
      id: 6,
      title: "Warehouse Racking System & Shelving",
      image: "../public/images/3.jpg",
      description: "A warehouse racking system is a storage solution designed to stack materials in horizontal rows with multiple levels. These systems can help you manage and better utilize your warehouse space while organizing cargo to streamline operations. Our range includes selective racking, drive-in racking, push-back racking, cantilever racking, and mobile racking.",
    },
    {
        id: 7,
        title: "Orbitor For Racking Sytem",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrE6SZFVeIRGBpbAQiii2FkLv9cgQvZmDZp7tnlSteYqlhU_5EyEdXpQ8Axf1U-tEFhqY&usqp=CAU",
        description: "Using Radio Frequency (RF), Orbiters provide a more efficient and cost effective solution than traditional racking systems. The Orbiter System is designed for an environment with medium to low SKU counts and a high throughput volume in either FILO (First In- Last Out) or FIFO (First In- First Out) mode.",
      },
    {
        id: 8,
        title: "Steel and Plastic Pallets",
        image: "https://i.pinimg.com/736x/ee/2f/7c/ee2f7cf268851c9985d33c285b40c28f.jpg",
        description: "Steel and plastic pallets are both commonly used in pallet racking systems. Steel pallets are typically stronger and more durable than plastic pallets, and they can withstand heavier loads. However, they are also more expensive and can be more difficult to move around. Plastic pallets are lighter and less expensive than steel pallets, and they are also more resistant to chemicals and moisture. However, they are not as strong as steel pallets, and they may not be able to withstand as heavy of a load.",
    },
    {
        id: 9,
        title: "Docking Levelers & Complete Docking Stations",
        image: "https://dockzilla.com/wp-content/uploads/2023/04/Dock-Leveler-Thermal-Loadhouse.jpg",
        description: "In a loading dock, one problem to overcome is the problem of bridging the gap between a truck and the dock or warehouse floor. Not all trucks are the same height, and the height of the trailer floor within a truck can vary according to how heavily the truck is laden.",
    },
    {
          id: 9,
          title: "Elevators Complete Range",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/1/VO/WH/ES/121504112/apartments-passenger-lift-500x500.jpg",
          description: "elevator, also called lift, car that moves in a vertical shaft to carry passengers or freight between the levels of a multistory building. Most modern elevators are propelled by electric motors, with the aid of a counterweight, through a system of cables and sheaves (pulleys).",
    },    
    {
        id: 10,
        title: "Chiller Cooling Towers & HVAC Sytem",
        image: "https://blog.attuneiot.com/hs-fs/hubfs/Imported_Blog_Media/Large-Cooling-Tower-1024x642-6.jpg?width=800&name=Large-Cooling-Tower-1024x642-6.jpg",
        description: "A chiller provides consistent temperature and pressure to your industrial process. Eliminating temperature and pressure variables simplifies the process development and optimization, ensuring the highest quality product. Instead of a wasteful, single-pass-through system, a chiller recirculates the cooling water.",
    },
    
    {
        id: 11,
        title: "Industrial Boilers",
        image: "https://www.greenbiz.com/sites/default/files/styles/16_9_cropped/public/2021-12/industrialboiler_sstock.jpeg?itok=Mx9RLIer",
        description: "The most common types of industrial boilers are fire tube boilers, water tube boilers, and steam generators. Fire tube boilers have a firebox that heats tubes through which water flows. The hot water then circulates through a heat exchanger, where it is converted to steam.",
    },
    
    {
        id: 12,
        title: "Industrial RO Plant System",
        image: "https://storage.tameson.com/asset/Articles/general/reverse-osmosis-main.jpg",
        description: "Reverse osmosis (RO) is one of the most cost-effective systems of managing boiler feed water, cooling tower makeup water, and industrial process water. Reverse osmosis may also be used to produce demineralized water, negating the need to handle and dispose of hazardous chemicals.",
    },
    {
        id: 13,
        title: "Complete Range of Batteries",
        image: "https://forkliftsalesandhiresydney.com.au/wp-content/uploads/2019/07/Forklift-Batteries-Sydney.png",
        description: "Batteries come in a wide range of types, including primary and secondary batteries. Primary batteries are designed to be used once and then discarded, while secondary batteries can be recharged and reused. Some of the most common types of primary batteries include alkaline batteries, zinc-carbon batteries, and lithium batteries. Some of the most common types of secondary batteries include lead-acid batteries, nickel-cadmium batteries, and lithium-ion batteries. The complete range of batteries is a wide and ever-evolving field, as new technologies are developed to offer improved performance, longer lifespans, and lower environmental impact.",
    },
    {
        id: 14,
        title: "Industrial Utilities Including Electric and Mechanical Appliances",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/2/AA/GN/OL/185363228/img-20230222-wa0000-500x500.jpg",
        description: "Industrial utilities are the systems and equipment that provide the essential services that allow industrial facilities to operate. These services include power, water, steam, compressed air, and ventilation. The appliances used in industrial utilities can be either electric or mechanical. Electric appliances use electricity to operate, while mechanical appliances use moving parts to perform their function.",
    },
    
    {
        id: 15,
        title: "Complete Fabrication Work",
        image: "https://stopthelies.my/wp-content/uploads/2021/10/fabrication-with-machining-in-Johor.jpg",
        description: "Industrial fabricators typically serve industries such as aerospace, alternative energy, material handling, pollution engineering, water treatment, automotive, and more. The products they create are usually very large in scale and often include the likes of tanks, silos, and heavy machine parts.",
    },
    
    {
        id: 16,
        title: "Aftersales Services",
        image: "https://www.marketing91.com/wp-content/uploads/2018/12/After-Sales-Service-3.jpg",
        description: "After-sales service is the support that a business provides to its customers after they have made a purchase. It can include a wide range of activities, such as warranty service, training, technical support, return and exchange policies, and upgrades and maintenance.",
    },
    
  ];
  
  // API endpoint to retrieve all cart items
  function getAllCartItems() {
    return cartItems;
  }
  
  export { getAllCartItems };
  