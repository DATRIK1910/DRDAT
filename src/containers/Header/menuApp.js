export const adminMenu = [
    { //quản lý 
        name: 'menu.admin.manage-user', menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage',

            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux',

            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/user-doctor',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },

                // ]
            },
            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin',

            },

        ]
    },
    { //quản lý phòng khám
        name: 'menu.admin.clinic', menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic',

            }


        ]
    },
    { //quản lý chuyên khoa
        name: 'menu.admin.specialties', menus: [
            {
                name: 'menu.admin.manage-specialties', link: '/system/manage-specialties',

            }


        ]
    },
    { //quản lý bài đăng
        name: 'menu.admin.post', menus: [
            {
                name: 'menu.admin.manage-post', link: '/system/manage-post',

            }


        ]
    },

];