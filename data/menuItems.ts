interface MenuItem {
    name: string;
    icon: string;
    link: string;
}


export const mainMenuItems: MenuItem[] = [
    {
        name: "Discover",
        icon: "/discover.svg",
        link: "/"
    },
    {
        name: "Top 50 podcast",
        icon: "/top50.svg",
        link: "topfiftypodcast"
    },
    {
        name: "Categories",
        icon: "/categories.svg",
        link: "categories"
    },
    {
        name: "Add your podcast",
        icon: "/add.svg",
        link: "addpodcast"
    },
]

