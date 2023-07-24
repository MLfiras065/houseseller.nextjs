// import { useEffect } from "react";

// import { useCart } from "react-use-cart";
// const ShopCart = ({el}) => {
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     totalItems,
//     cartTotal,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();
//   if (isEmpty) return <h1 className="text-center">your cart is empty </h1>;

//   return (
//     <section className="py-4 container">
//     <div className="row justify-content-center">
//       <h5>
//         cart ({totalUniqueItems}) total Items ({totalItems})
//       </h5>
//       <table className="table table-light table-hover m-0">
//         {items.map((el, index) => {
//           return (
//             <tr key={index}>
//               <td>{el.product}</td>
//               <td>{el.price}</td>
//               <td>
//                 <div className="prdct-qty-container">
//                   <button
//                     className="prdct-qty-btn"
//                     onClick={() => updateItemQuantity(el.id, el.quantity + 1)}
//                   >
//                     +
//                   </button>
//                   <input
//                     type="text"
//                     className="qty-input-box"
//                     value={el.quantity}
//                     readOnly
//                   />
//                   <button
//                     className="prdct-qty-btn"
//                     onClick={() => updateItemQuantity(el.id, el.quantity - 1)}
//                   >
//                     -
//                   </button>
//                 </div>
//               </td>
//               <td>
//                 <button
//                   className="prdct-delete"
//                   onClick={() => removeItem(el.id)}
//                 >
//                   removeitem
//                 </button>
//               </td>
//             </tr>
//           );
//         })}
//       </table>
//       <div className="col-auto ms-auto">
//         <h2>Total Price: $ {cartTotal}</h2>
//       </div>
//       <div className="col-auto">
//         <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
//           Clear Cart
//         </button>
//       </div>
//     </div>
//   </section>
  
//   );
// };

// export default ShopCart;
