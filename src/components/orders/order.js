import Link from 'next/link';
import dayjs from 'dayjs';
// import Image from '../image';
import Image from 'next/image';
import { sanitize } from '../../utils/miscellaneous';
import { isEmpty } from 'lodash';
import Tag from '../tag';

const duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

const Order = ({ order }) => {

	if (isEmpty(order)) {
		return null;
	}

	let color;
	switch (order.status) {
		case 'pending': color = "orange"; break;
		case 'processing': color = "teal"; break;
		case 'on-hold': color = "orange"; break;
		case 'completed': color = "blue"; break;
		case 'cancelled': color = "red"; break;
		case 'refunded': color = "brown"; break;
		case 'failed': color = "red"; break;
		case 'trash': color = "red"; break;
	}

	let date = new Date(order.date_created);
	
	// date = dayjs(date).format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A')

	let delivery;
	let deliveryMethod = order.shipping_lines.length ? order.shipping_lines[0].method_id : null;
	// console.log(deliveryMethod)

	switch (deliveryMethod) {
		case "flat_rate": delivery = true; break;
		case "free_shipping": delivery = true; break;
		case "local_pickup": delivery = false; break;
		default: delivery = false; break;
	}

	let paymentMehod;
	// console.log(order.payment_method);
	console.log(order.line_items);
	switch (order.payment_method) {
		case "cheque": paymentMehod = "teal"; break;
		case "paypal": paymentMehod = "brown"; break;
		case "stripe_cc": paymentMehod = "brown"; break;
		default: paymentMehod = "teal"; break;
	}

	return (
		<div id={order.id} className="p-3 pt-1 pb-8 w-full overflow-hidden
		border border-stone-300 rounded-md relative">

			<div className="flex items-center justify-between">
				<div className="flex items-center w-full justify-between">
					<h6 className="font-bold uppercase my-2 tracking-0.5px">#{order.id}</h6>
					<p>{order.shipping.first_name + " " + order.shipping.last_name}</p>
					<span>{order.currency_symbol + order.total}</span>
					<Tag className="" size="xs" color={color} data={order.status}></Tag>

					{/* { order.status !== "completed" ? 
dayjs.duration(dayjs(date).diff(dayjs())).format("HH:mm")
					: null } */}
				</div>
			</div>

			<div className="flex items-center">
				<p>{dayjs(date).format('HH:mm | DD/MM')}</p>
				<Tag className="ml-2" size="xs" color={paymentMehod} data={order.payment_method_title || "null"}></Tag>
			</div>

			{/* <p>Email: {order.shipping.email}</p> */}
			<p>Phone: {order.shipping.phone}</p>
			<p>{order.customer_note ? "Nota: " + order.customer_note : null}</p>
			{delivery ? <p>Address: {order.shipping.address_1 + ", " + order.shipping.postcode} 
			<span>{(order.shipping_lines.method_title || "") + " " + (order.shipping_lines.total || "")}</span></p> : null}

			{order.line_items.map(item => {
				return (

					<div key={item.id} className="flex p-2">
						{/* <div className="relative w-12 h-full"> */}
						<Image src={item.image?.src ?? ''}
							// className="object-cover"
							altText={item.image?.alt ?? ''}
							// layout='fill'
							width="32" height="32"
						// objectFit='contain'
						// style={{width: '100%', height: '100%', position: 'relative'}}
						/>
						{/* </div> */}
						<div className="pl-2">
							<span className="inline-block text-sm leading-tight">{item.name}
							</span>
							{/* <p className="item-quatity opacity-50 text-sm">#{item.product_id}</p> */}

							<p className="item-subtotal text-sm">
								<span className="item-quatity opacity-50"> x{item.quantity} </span>
								{order.currency_symbol + item.subtotal}</p>
							{/* {item.meta_data.length ? item.meta_data.map(m=>{
							return <span>{m.display_key + ": " + m.display_value}</span>
						}) : null} */}
						</div>
					</div>

				)

			})}

			{delivery ? <iframe className="rounded-md -mb-6" width="100%" height="270" src={`https://maps.google.com/maps?q=${order.shipping.address_1 + ", " + order.shipping.postcode}&t=m&z=16&ie=UTF8&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> : null}

			<div className="absolute inset-x-0 bottom-0 p-2 pt-12 flex
			bg-gradient-to-t from-white pointer-events-none">
					<button className="p-2 bg-zinc-100 mx-2 pointer-events-auto" href="">Action</button>
					<button className="p-2 bg-zinc-100 mx-2 pointer-events-auto" href="">///</button>
				</div>
		</div>

	)
}

export default Order;
