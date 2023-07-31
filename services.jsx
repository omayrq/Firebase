/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import React from 'react'
 
// const Services = () => {
// return (
//      <div>Services</div>
//    )
//  }

// export default Services

//  import React from 'react';
//  import { getAllCartItems } from './cartAPI';
//  import styled from "styled-components";
// import { Button } from './Styles/button';
// import {NavLink} from "react-router-dom";

//  const Services = () => {
//    // Example usage of the API functions
//    const allItems = getAllCartItems();
// //   // const itemById = getCartItemById(1);

//    return <Wrapepr classname = "section">
//       <h2 className='common-heading'>Our Services</h2>
//       <div className='container grid grid-three-column'>
//         {Services.map((curElem)=> {
//           const {id, name, image, description} = curElem;
//           return (
//           <div key={id} className='card'>
//             <figure>
//               <img src={image} alt={description} />
//             </figure>
//             <div className = 'card-data'>
//               <h3>{name}</h3>
//               <p>description</p>
//               <NavLink to="/Services"></NavLink>
//               <Button>Read more</Button>
//             </div>
//           </div>
//           );
//         })

//         }
//       </div>
//    </Wrapepr>
//  }

//  const Wrapepr = styled.section``;

//  export default Services;

// import React from 'react';
// import { getAllCartItems } from './cartAPI';
// import styled from "styled-components";
// import { Button } from './Styles/button';
// import { NavLink } from "react-router-dom";

// const Services = () => {
//   // Example usage of the API function
//   const cartItems = getAllCartItems();

//   return (
//     <Wrapper className="section">
//       <h2 className='common-heading'><strong>Our Services</strong></h2>
//       <div className='container grid grid-three-column'>
//         {cartItems.map((curElem) => {
//           const { id, title, image, description } = curElem;
//           return (
//             <div key={id} className='card'>
//               <figure>
//                 <img src={image} alt={title} />
//               </figure>
//               <div className='card-data'>
//               <h3><strong>{title}</strong></h3>
//                 <p>{description}</p>
//                 <NavLink to="/Services"></NavLink>
//                 <Button>Read more</Button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
// padding: 9rem 0;
// background-color: ${({ theme }) => theme.colors.bg};

// .container {
//   max-width: 50rem;
// }

// .card {
//   border: 0.1rem solid rgb(170 170 170 / 40%);
//   .card-data {
//     padding: 0 2rem;
//   }

//   h3 {
//     margin: 2rem 0;
//     font-weight: 300;
//     font-size: 2.4rem;
//   }
//   .btn {
//     margin: 2rem auto;
//     background-color: rgb(0 0 0 / 0%);
//     border: 0.1rem solid rgb(98 84 243);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: rgb(98 84 243);
//     font-size: 1.4rem;

//     &:hover {
//       background-color: rgb(98 84 243);
//       color: #fff;
//     }
//   }
// }

// figure {
//   width: auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   overflow: hidden;
//   transition: all 0.5s linear;
//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;


import React, { useState } from 'react';
import { getAllCartItems } from './cartAPI';
import styled from "styled-components";
import { Button } from './Styles/button';
import { NavLink } from "react-router-dom";

const Services = () => {
  const [expandedCartId, setExpandedCartId] = useState(null);

  // Example usage of the API function
  const cartItems = getAllCartItems();

  const toggleCartExpansion = (cartId) => {
    setExpandedCartId((prevId) => (prevId === cartId ? null : cartId));
  };

  return (
    <Wrapper className="section">
      <h2 className='common-heading'><strong>Our Services</strong></h2>
      <div className='container'>
        <div className='grid'>
          {cartItems.map((curElem) => {
            const { id, title, image, description } = curElem;
            const isExpanded = expandedCartId === id;

            const truncatedDescription = isExpanded
              ? description
              : description.slice(0, 100) + "...";

            return (
              <div key={id} className='card'>
                <figure>
                  <img src={image} alt={title} />
                </figure>
                <div className='card-data'>
                  <h3><strong>{title}</strong></h3>
                  <p className={isExpanded ? '' : 'truncated'}>{truncatedDescription}</p>
                  {!isExpanded && (
                    <Button onClick={() => toggleCartExpansion(id)}>Read more</Button>
                  )}
                  {isExpanded && (
                    <>
                      <p>{description}</p>
                      <Button onClick={() => toggleCartExpansion(id)}>Read less</Button>
                    </>
                  )}
                  <NavLink to="/Services"></NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin: 50px auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 1.5rem 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }

    .truncated {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Adjust this value to control the number of lines displayed */
      -webkit-box-orient: vertical;
    }
    
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.1);
    }

    img {
      max-width: 90%;
      margin-top: 1.0rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;

