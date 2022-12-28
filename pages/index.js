/**
 * Internal Dependencies.
 */
import Products from '../src/components/products';
import Orders from '../src/components/orders';
import { HEADER_FOOTER_ENDPOINT } from '../src/utils/constants/endpoints';

/**
 * External Dependencies.
 */
import axios from 'axios';
import { getProductsData, getCustomerData, getOrderData } from '../src/utils/products';
import Layout from '../src/components/layout';

export default function Home({ headerFooter, products, orders}) {
	return (
		<Layout headerFooter={headerFooter || {}}>
			<Orders orders={orders}/>
			<Products products={products}/>
		</Layout>
	)
}

export async function getStaticProps() {
	let email = "yiming@y-m.dev"
	// const { data: headerFooterData } = await axios.get( HEADER_FOOTER_ENDPOINT );
	const { data: products } = await getProductsData();
	const { data: customer } = await getCustomerData(email);

	// let status = ['on-hold', 'completed']
	let status = ['pending', 'processing', 'on-hold', 'completed', 'cancelled', 'refunded', 'failed', 'trash']
	
	const date = new Date('2022-07-21');
	const isoDate = date.toISOString();
	const filter = 'after';

	// const { data: orders } = await getOrderData(status);
	const { data: orders } = await getOrderData(status, filter, isoDate);
	// console.log(orders)
	
	return {
		props: {
			// headerFooter: headerFooterData?.data ?? {},
			products: products ?? {},
			orders: orders ?? {}
		},

		revalidate: 1,
	};
}
