import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/components/Layout';
import { publicRoutes } from '~/routes';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					{publicRoutes.map((route, index) => {
						const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
						const Page = route.component;
						const hasChild = route.children && route.children.length > 0;
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
								children={
									<>
										{hasChild &&
											route.children.map((child, index) => (
												<Route
													key={index}
													path={child.path}
													element={<child.component />}
												/>
											))}
									</>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
