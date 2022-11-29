import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Footer from '../Pages/Shared/Footer/Footer';

import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

       const { user } = useContext(AuthContext);

	const [isAdmin] = useAdmin(user?.email);
    return (
		<div>
			<Navbar></Navbar>
			<div className="drawer drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content  ">
					<Outlet></Outlet>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="dashboard-drawer"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-80  bg-base-100 text-base-content">
						{/* <!-- Sidebar content here --> */}
						<li>
							<Link to="/dashboard">
								My Orders
							</Link>
						</li>

						<li>
							{isAdmin && (
								<>
									<Link to="/dashboard/buyers">
										All Buyers
									</Link>

								</>
							)}
						</li>
					</ul>
				</div>
			</div>
			<Footer></Footer>
		</div>
    );
};

export default DashboardLayout;