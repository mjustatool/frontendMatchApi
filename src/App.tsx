import LoadingOrError from 'components/LoadingOrError'
import Navbar from 'components/navbar'
import TeamDashboard from 'pages/TeamDashboard'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Suspense fallback={<LoadingOrError />}>
					<Routes>
						<Route path='/' element={<TeamDashboard />} />
					</Routes>
				</Suspense>
			</div>
		</BrowserRouter>
	)
}
