import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'totalusers',
		label: 'Total Users',
		path: '/admin/totalusers',
		icon: <HiOutlineCube />
	},
	{
		key: 'totalemployee',
		label: 'Total Employee',
		path: '/admin/totalemployee',
		icon: <HiOutlineCube />
	},
	{
		key: 'totalproduct',
		label: 'Total Products',
		path: '/admin/totalproducts',
		icon: <HiOutlineCube />
	},
	{
		key: 'createbranch',
		label: 'Create Branch',
		path: '/admin/branch',
		icon: <HiOutlineCube />
	},
	{
		key: 'createemployee',
		label: 'Create Employee',
		path: '/admin/createemployee',
		icon: <HiOutlineShoppingCart />
	}

]

