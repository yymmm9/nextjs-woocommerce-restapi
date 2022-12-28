import { isArray, isEmpty } from 'lodash';
import Order from './order';

const Orders = ({ orders }) => {
	
	if ( isEmpty( orders ) || !isArray( orders ) ) {
		return null;
	}
	
	return (
		<div className="flex flex-wrap -mx-3 overflow-hidden">
			
			{ orders.length ? orders.map( order => {

				// console.log(orders.length)
				return (
					<Order key={ order?.id } order={order} />
				)
			} ) : null }
		
		</div>
	)
}

export default Orders;
