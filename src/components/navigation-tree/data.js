const Menu = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Profile',
        to: '/profile',
        children: [
            {
                label: 'Details',
                to: 'details',
                children: [
                    {
                        label: 'Location',
                        to: 'location',
                        children: [
                            {
                                label: 'Work',
                                to: 'work'
                            },
                            {
                                label: 'Personal',
                                to: 'presonal'
                            }
                        ]
                    },
                    {
                        label: 'Age',
                        to: 'age'
                    }
                ]
            },
            {
                label: 'Settings',
                to: '/settings',
                children: [
                    {
                        label: 'Account',
                        to: 'account'
                    },
                    {
                        label: 'Application',
                        to: 'application'
                    }
                ]
            }
        ]
    },
    {
        label: 'Other',
        to: '/other',
        children: [
            {
                label: 'Visualization',
                to: 'visualization'
            },
            {
                label: 'Credits',
                to: 'credits',
                children: [
                    {
                        label: 'Orange',
                        to: 'orange'
                    },
                    {
                        label: 'Telma',
                        to: 'telma'
                    }
                ]
            }
        ]
    }

]

export default Menu