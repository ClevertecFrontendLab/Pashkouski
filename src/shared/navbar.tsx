import {Menu} from "antd";
import {FC, ReactElement} from "react";

type NavbarType = {
    items: ItemsType[]
    defaultSelectedKeys: string
}

type ItemsType = {
    key: string
    icon?: ReactElement
    label?: string
}

export const Navbar: FC<NavbarType> = ({items, defaultSelectedKeys}) => {
    return (
        <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[defaultSelectedKeys]}
            items={items}
        />
    );
};

