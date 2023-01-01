import { isArray, isEmpty } from 'lodash';
import Product from './product';

const Products = ({ products }) => {
	
	if ( isEmpty( products ) || !isArray( products ) ) {
		return null;
	}

	let d = products.map(p => {
		return{
			id: p.id,
			name: p.name,
			tags: p.tags
		}
	})

	// let d = new Map();  
	// products.map(p => {
	// 	d.set(p.id, [p.name, p.tags])
	// })

	// console.log(d)
	
	return (
		<div className="flex flex-wrap -mx-3 overflow-hidden">
			
			{ products.length ? products.map( product => {
				// console.log(product.id + " " + product.name);
				// console.log(product.tags);
				return (
					<Product key={ product?.id } product={product} />
				)
			} ) : null }
		
		</div>
	)
}

export default Products;
