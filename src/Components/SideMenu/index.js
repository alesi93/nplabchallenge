import { HomeFilled, BarChartOutlined, AppstoreFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();


  const defaultSelectedKey = '/home';
  const defaultOpenKeys = ['/'];


  return (
    <div  className="SideMenu">
      <Menu style={{background:"",}}
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
            icon: <AppstoreFilled />,
            key: '/',
            children: [
              {
                label: "Início",
                icon: <HomeFilled />,
                key: '/home',
              },
              {
                label: "Dashboard",
                icon: <BarChartOutlined activeClassName="" />,
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
