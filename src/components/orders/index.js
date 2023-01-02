import { isArray, isEmpty } from 'lodash';
import Order from './order';

const Orders = ({ orders }) => {
	
	if ( isEmpty( orders ) || !isArray( orders ) ) {
		return null;
	}
	
	return (
		<div className="mt-6 max-w-3xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
			
			{ orders.length ? orders.map( order => {

				// console.log(orders.length)
				return (
					<><Order key={order?.id} order={order} /><Order key={order?.id} order={order} /></>
				)
			} ) : null }
		
		</div>
	)
}

export default Orders;
