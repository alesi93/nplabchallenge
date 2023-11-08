import { HomeOutlined, BarChartOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();


  const defaultSelectedKey = '/home';
  const defaultOpenKeys = ['/'];


  return (
    <div className="SideMenu">
      <Menu
        mode="inline"
        defaultSelectedKeys={[defaultSelectedKey]}
        defaultOpenKeys={defaultOpenKeys}
        onClick={(item) => {
          // item.key
          navigate(item.key);
        }}
        items={[
          {
            label: "Painel",
            icon: <AppstoreOutlined />,
            key: '/',
            children: [
              {
                label: "Início",
                icon: <HomeOutlined />,
                key: '/home',
              },
              {
                label: "Dashboard",
                icon: <BarChartOutlined />,
                key: '/dashboard',
              },
            ],
          },
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
