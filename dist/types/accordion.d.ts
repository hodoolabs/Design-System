type MenuListType = {
    index: number;
    icon: string;
    activeIcon: string;
    menu: {
        path: string;
        label: string;
    };
    subMenus: {
        path: string;
        label: string;
    }[];
};
export type { MenuListType };
