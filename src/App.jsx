import { Route, Routes } from "react-router-dom";
import DashboardLayoutBasic from "./pages/dashboard/Dashboard";
import CustomerHome from "./pages/customer/CustomerHome";
const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<CustomerHome />} />
				<Route path="/admin" element={<DashboardLayoutBasic />} />
			</Routes>
		</div>
	);
};

export default App;
