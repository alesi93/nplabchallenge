import { BellFilled, MailFilled} from "@ant-design/icons";
import { Badge, Drawer, Image, Space, List, Divider } from "antd";
import { Typography } from 'antd';
import { Input } from 'antd';
import { useEffect, useState} from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { getComments, getOrders} from "../../API";


//*Componente de menu Dropdown para acesso a configurações do usuário/logout, recriado á partir do Design System da Ant*//
//*Sem acesso e tempo para encontrar os melhores assets e icons, apesar da existência do DS do GovBR, para reutilizar os mesmos, o fluxo de desenvolvimento e o tempo não favorece*// 
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.nplab.dev/">
          Minha Conta
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.nplab.dev/">
          Sair
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Relatório Financeiro（Premium）',
      key: '3',
      disabled: true,
    },
  ];

function AppHeader() {
    const [comments, setComments] = useState([]);
    const [orders, setOrders] = useState([]);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

  
    useEffect(()=> {

        getComments().then((res)=> {
            setComments(res.comments);

        });
        getOrders().then((res)=>{
            setOrders(res.products);
        })


    }, []);

  return (
    
    <div className="AppHeader">
      
      <Image alt="imglogo" className="NovaLogo" style={{maxWidth:112,
        
        paddingRight:"16px", paddingLeft:"8px"}}
        preview={false}
        src="NovaLogo.png"
      />
      <Divider type="vertical" size={1}></Divider>
         
      <Search className="input-wrapper-searcher"
        style={{ flex: 1, maxWidth: 500, marginLeft: 'auto' }}
        placeholder="O que você procura?"
        onSearch={onSearch}
        enterButton
        
      />
        <Space size={24} style={{ padding: 40 }}>
        <Space size={8} style={{ padding: 8 }}>
        <div className="dropdown-container-profile" style={{background:'white', borderRadius:4, width:104, height:32, paddingLeft:16, paddingBottom:2,}}><Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>

      <Space>  
        <Typography.Text style={{lineHeight:2.3, color:"rgba(0,0,0,.88)", fontWeight:400}}>Olá, NpLab</Typography.Text>
      
        <DownOutlined style={{color:"rgba(0,0,0,.88)", fontSize:10}} />
      </Space>
    </a>
  </Dropdown>
  </div>
        </Space>

        <Badge count={comments.length} dot>
          <MailFilled style={{ fontSize: 22, color:'#E6E6E6', }} onClick={() => {
           setCommentsOpen(true); 
          }}
          />
        </Badge>

        <Badge size="small" style={{fontSize:9}} count={orders.length}>
          <BellFilled style={{ fontSize: 22, color:'#E6E6E6' }} onClick={() => {
           setNotificationsOpen(true); 
          }} 
          />
        </Badge>

      </Space>

      <Drawer 
       title="Comments"
       open={commentsOpen} 
       onClose={() => {
        setCommentsOpen(false);
      }} 
      maskClosable
      >
         <List 
      dataSource={orders}
      renderItem={(item)=>{
       return <List.Item>{item.comments}</List.Item>;
      }}
      ></List>
      </Drawer>

      <Drawer 
       title="Notificações"
       open={notificationsOpen} 
       onClose={() => {
        setNotificationsOpen(false);
      }} 
      maskClosable
 >
    <List 
      dataSource={orders}
      renderItem={(item)=>{
       return <List.Item alt="item1">{item.products}</List.Item>;
      }}
        ></List>
      </Drawer>
     
    </div>
  );
}

export default AppHeader;
