import Link from 'next/link';
// import Image from '../image';
import Image from 'next/image';
import { sanitize } from '../../utils/miscellaneous';
import AddToCart from '../cart/add-to-cart';
import { isEmpty } from 'lodash';
import Tag from '../tag';

const Order = ({ order }) => {

	if (isEmpty(order)) {
		return null;
	}

	let color;
	switch(order.status){
		case 'pending': color = "orange"; break;
		case 'processing': color = "green"; break;
		case 'on-hold': color = "orange"; break;
		case 'completed': color = "blue"; break;
		case 'cancelled': color = "red"; break;
		case 'refunded': color = "brown"; break;
		case 'failed': color = "red";break;
		case 'trash': color = "red"; break;
	}	

	// console.log(order.line_items)

	return (
		<div className="mt-4 mb-8 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4">
			<div className="flex items-center">
				<h6 className="font-bold uppercase my-2 tracking-0.5px">#{order.id}</h6>
				<Tag className="ml-2" color={color} data={order.status}></Tag>
			</div>

			<span>{order.total + order.currency}</span>
			<p>Cliente: {order.shipping.first_name + " " + order.shipping.last_name}</p>
			<p>Address: {order.shipping.address_1 + "," + order.shipping.postcode}</p>
			<p>Email: {order.shipping.email}</p>
			<p>Phone: {order.shipping.phone}</p>
			<p>Shipping: {order.shipping_lines.method_title + " " + order.shipping_lines.total}</p>
			{order.line_items.map(item => {
				return (

					<div key={item.id} className="flex p-2">
							<Image src={item.image?.src ?? ''} className="object-cover"
							// layout="fill"
							altText={item.image?.alt ?? ''}
							width="64" height="64" 
							/>
						<div className="pl-2">
							<p calssName="text-xs">{item.name}</p>
							<p className="item-quatity">{item.quantity}</p>
							<p className="item-subtotal">{item.subtotal}</p>
							{/* {item.meta_data.length ? item.meta_data.map(m=>{
							return <span>{m.display_key + ": " + m.display_value}</span>
						}) : null} */}
						</div>
					</div>

				)

			})}
		</div>

	)
}

export default Order;
