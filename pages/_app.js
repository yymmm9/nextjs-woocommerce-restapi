import '../src/styles/index.scss'
import { Context } from '../src/utils/context'
import { getProductsData, getCustomerData, getOrderData } from '../src/utils/products';
import React from 'react';

function MyApp({ Component, pageProps }) {
  const [ context, setContext ] = React.useState(pageProps)
  
  return <Component {...pageProps} />
//   return <Context.Provider value={[context, setContext]}>
//       <Component {...pageProps} />
//     </Context.Provider>
    
}

// export async function getStaticProps(context) {

// 	const { data: products } = await getProductsData();
  
//   return {
// 		props: {
// 			products: products ?? {},
// 		},

// 		revalidate: 1,
// 	};
// }

export default MyApp
