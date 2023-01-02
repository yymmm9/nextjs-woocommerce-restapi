import { AppProvider } from '../context';
// import Header from './header';
import Header from './nav';
import Footer from './footer';

const Layout = ({children, headerFooter}) => {
	const { header, footer } = headerFooter || {};
	return (
		<AppProvider>
			<div>
				<Header/>
				<main className="container mx-auto px-2 min-h-50vh">
					{children}
				</main>
				{/* <Footer footer={footer}/> */}
			</div>
		</AppProvider>
	)
}

export default Layout
