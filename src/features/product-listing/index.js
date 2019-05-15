import React from 'react'
import { Pagination} from 'react-bootstrap'
import ProductListItem from './product-list-item'

export default function ProductListing(props){
   let active = 1;
   let items = [];
   for (let number = 1; number <= 5; number++) {
     items.push(
       <Pagination.Item key={number} active={number === active}>
         {number}
       </Pagination.Item>,
     );
   }
  return <div className='product-listing'>         
     {
         props.products.map(product => 
            <ProductListItem product={product} />)
     }
      <Pagination size="sm">{items}</Pagination>      
  </div>

}