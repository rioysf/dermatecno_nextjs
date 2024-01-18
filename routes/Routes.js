import { v4 as uuid } from 'uuid';
/**
 *  All Dashboard Routes
 *
 *  Understanding name/value pairs for Dashboard routes
 *
 *  Applicable for main/root/level 1 routes
 *  icon 		: String - It's only for main menu or you can consider 1st level menu item to specify icon name.
 *
 *  Applicable for main/root/level 1 and subitems routes
 * 	id 			: Number - You can use uuid() as value to generate unique ID using uuid library, you can also assign constant unique ID for react dynamic objects.
 *  title 		: String - If menu contains childern use title to provide main menu name.
 *  badge 		: String - (Optional - Default - '') If you specify badge value it will be displayed beside the menu title or menu item.
 * 	badgecolor 	: String - (Optional - Default - 'primary' ) - Used to specify badge background color.
 *
 *  Applicable for subitems / children items routes
 *  name 		: String - If it's menu item in which you are specifiying link, use name ( don't use title for that )
 *  children	: Array - Use to specify submenu items
 *
 *  Used to segrigate menu groups
 *  grouptitle : Boolean - (Optional - Default - false ) If you want to group menu items you can use grouptitle = true,
 *  ( Use title : value to specify group title  e.g. COMPONENTS , DOCUMENTATION that we did here. )
 *
 */

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Menu',
		grouptitle: true,
	},
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'bar-chart-2',
		link: '/',
	},
	{
		id: uuid(),
		title: 'Master Data',
		grouptitle: true,
	},
	{ 
		id: uuid(), 
		title: 'Staff',
		icon: 'user',
		link: '/staff' 
	},
	{ 
		id: uuid(), 
		title: 'Pasien',
		icon: 'users',
		link: '/pasien' 
	},
	{ 
		id: uuid(), 
		title: 'Ruangan',
		icon: 'square',
		link: '/ruangan' 
	},
	{ 
		id: uuid(), 
		title: 'Poli Klinik',
		icon: 'home',
		link: '/poli' 
	},
	{ 
		id: uuid(), 
		title: 'Produk',
		icon: 'box',
		link: '/produk' 
	},
	{ 
		id: uuid(), 
		title: 'Perawatan',
		icon: 'activity',
		link: '/perawatan' 
	},
	{
		id: uuid(),
		title: 'Operational',
		grouptitle: true,
	},
	{ 
		id: uuid(), 
		title: 'Janji Temu',
		icon: 'book-open',
		link: '/janji-temu' 
	},
	{ 
		id: uuid(), 
		title: 'Rekam Medis',
		icon: 'clipboard',
		link: '/rekam-medis' 
	},
	{ 
		id: uuid(), 
		title: 'Penjualan',
		icon: 'shopping-bag',
		link: '/penjualan' 
	},
	{ 
		id: uuid(), 
		title: 'Tagihan',
		icon: 'credit-card',
		link: '/tagihan' 
	},
	{
		id: uuid(),
		title: 'Menejemen Stok',
		grouptitle: true,
	},
	{ 
		id: uuid(), 
		title: 'Barang Masuk',
		icon: 'log-in',
		link: '/barang-masuk' 
	},
	{ 
		id: uuid(), 
		title: 'Barang Keluar',
		icon: 'log-out',
		link: '/barang-keluar' 
	},
	{ 
		id: uuid(), 
		title: 'Penyesuaian Barang',
		icon: 'package',
		link: '/penyesuaian-barang' 
	},
	{
		id: uuid(),
		title: 'Pengaturan',
		grouptitle: true,
	},
	{ 
		id: uuid(), 
		title: 'Perusahaan',
		icon: 'home',
		link: '/perusahaan' 
	},
];

export default DashboardMenu;