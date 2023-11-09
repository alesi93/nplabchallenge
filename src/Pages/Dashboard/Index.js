
import { BarChartOutlined, BankOutlined, FileDoneOutlined} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { getRecentNfes } from "../../API";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


/*Foi usado uma Dummy API para puxar os dados de forma dinâmica da tabela de notas emitidas
    como forma de ilustrar as informações preenchidas, então alguns valores serão incoerentes com a realidade*/
function Dashboard(){
    return ( 
      <div className="dashboard-container">
       <Space size={24}direction="vertical">
        <Typography.Title style={{color:'#111111',}}level={3}>Dashboard</Typography.Title>
        <Space direciton="horizontal">
            <DashboardCard 
            icon={
            <FileDoneOutlined
            style={{
                color:"#FF0000", 
                backgroundColor:"#F6F8FC",
                borderRadius:50,
                fontSize:32,
                padding:8,
            }}
            />
        }
            title={"Notas Emitidas/2023"} 
            value={384}/>
            <DashboardCard 
            icon={
            <BankOutlined
            style={{
          
                color:"#183EFF", 
                backgroundColor:"#F6F8FC",
                borderRadius:50,
                fontSize:32,
                padding:8,
            }}
            />
        }
            title={"Valor Faturado/2023"} 
            value={"R$48,387"}/>
            
            <DashboardCard 
            icon={
            <BarChartOutlined
            style={{
                color:"#00D000", 
                backgroundColor:"#F6F8FC",
                borderRadius:50,
                fontSize:32,
                padding:8,
            }}
            />
        }
            title={"Média Anual"} 
            value={"+28,2%"}/>
            
      
           
        </Space>
        <Space>
            <RecentNfes/>
            <DashboardChart/>
        </Space>
    </Space>    
    </div>
    );
}
function DashboardCard({title, value, icon}){
  return  (
  
        <Card style={{borderBlockColor:'#F6F8FC',}}>
        <Space direciton="horizontal">
            {icon}
            <Statistic title={title} value={value}/>
            </Space>
        </Card>
        
   );
}
function RecentNfes() {
    
  
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getRecentNfes().then((res)=>{
            setDataSource(res.users.splice(1,  3));
            setLoading(false);
        }); 
    
    }, []);

    return (
        <> 
        <Space size={16} direction="vertical">
        <Typography.Title level={5}>Emitidas recentemente</Typography.Title>
   <Card>
    <Table 
    style={{borderBlockColor:'#F6F8FC',}}
    pagination={false}
    columns={[
        {
            onFilter: (value, record) => record.address.indexOf(value) === 0, /*integração de filtros de Tabela do AntDesign*/
            title: "Data",
            dataIndex: "data",
            key:'date',
            sorter: (a, b) => a.age - b.age, //* No caso da coluna "Data" em específico, decidi gerar números aleatórios fora do Data Source da API, pois, haviam apenas datas de nascimento para serem usadas, e o intuito da coluna é mostrar as datas mais recentes
            render: () => {
             
              const randomDate = new Date(
                2023,
                Math.floor(Math.random() * 12), 
                Math.floor(Math.random() * 31) + 1 
              );
        
              
              const formattedDate = `${randomDate.toLocaleDateString()}`;
        
              return formattedDate;
            },
          },

          {

            title:"Nome",
            dataIndex:"firstName",
             },

         {
    
        title:"Município",
        render: (record) => record.address.city,
         
       },
        {

         title:"Valor R$",
         dataIndex:"weight", /*Neste Data Source em específico, não há properidades de valores $,
         então uma adaptação para fins ilustrativos usando o valor de peso do User :)*/
          },
          
    
]}  
    
    loading={loading}
    dataSource={dataSource}

    
    ></Table>
    </Card>
    </Space>
    </>
    
    );
}

/*Integração de Charts dinâmicos com Chart.Js*/

function DashboardChart() {
  const options = {
    responsive: true,
     plugins: {
      legend: {
        
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Nfes Emitidas',
      },
    },
    maintainAspectRatio: false,
  };

      const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];

       const data = {
        labels,
        datasets: [
          {
            label: 'Este Ano',
            data: labels.map(() => Math.round(Math.random() * 10)),
            backgroundColor: 'rgba(21, 91, 203, 1)',
           
          },
          {
            label: 'Média/Ano anterior',
            data: labels.map(() => Math.round(Math.random() * 6)),
            backgroundColor: '#A1D3FF',

          },
        ],
      };

    return (
      <Space size={56} direction="vertical"> 
      <Typography.Text></Typography.Text>
    <Card className="chartCard" 
     style={{cursor:"pointer",}}>
        {""}
        <Bar style={{
          height:220,
          width:460,
          
          
        }} className="chartBars" 
        options={options} 
       
        data={data} />
        
    </Card>
</Space>
);
}

export default Dashboard;
