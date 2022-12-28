const WooCommerceRestApi = require( '@woocommerce/woocommerce-rest-api' ).default;

const api = new WooCommerceRestApi( {
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerKey: process.env.WC_CONSUMER_KEY,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	version: 'wc/v3',
} );

/**
 * Get Order.
 *
 * @return {Promise<void>}
 */
// export const getOrderData = async ( status, perPage = 50 ) => {
// 	console.log(status);
export const getOrderData = async ( status, filter, isoDate, perPage = 50 ) => {

	if ( filter == "after" ){
		return await api.get(
			`orders`,
			{
				per_page: perPage || 50,
				status: status || null,
				after: isoDate || null,
			},
		);
	}else{
		return await api.get(
			`orders`,
			{
				per_page: perPage || 50,
				status: status || null,
				before: isoDate || null,
			},
		);
	}

	
};
/**
 * Get Customer.
 *
 * @return {Promise<void>}
 */
export const getCustomerData = async ( email, perPage = 50 ) => {
	return await api.get(
		'customers',
		{
			per_page: perPage || 50,
			email: email || null,
		},
	);
};

/**
 * Get Products.
 *
 * @return {Promise<void>}
 */
export const getProductsData = async ( perPage = 50 ) => {
	return await api.get(
		'products',
		{
			per_page: perPage || 50,
		},
	);
};

/**
 * Get Single Product By Slug.
 *
 * @return {Promise<void>}
 */
export const getProductBySlug = async ( productSlug = '' ) => {
	return await api.get(
		'products',
		{
			slug: productSlug,
		},
	);
};
