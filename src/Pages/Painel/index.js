import React, { useState, useEffect } from 'react';
import { Modal, Image, Divider } from 'antd';
import { Grid } from 'antd';
import { Typography, Space } from 'antd';
import { Spin } from 'antd';
import { Card } from 'antd';


const { useBreakpoint } = Grid;

function Painel() {
  const screens = useBreakpoint();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const breakpointsToRender = ['xs', 'sm', 'lg'];

  useEffect(() => {
    setTimeout(() => {
      setDataLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className='' style={{ display: 'flex' }}>
     
      <div className='content-container' style={{ flex: 1 }}>
        {dataLoaded ? (
          <>
            <Typography.Title style={{fontWeight:400, color:'#333333',}} level={4}>Seja Bem-Vindo, MEI</Typography.Title>
            <Divider />
            <Space size={4} direction="vertical">
              <div>
                <Typography.Title style={{ color: '#1867DC' }} level={3}>
                  Agora ficou mais fácil!
                </Typography.Title>
                <Typography.Text
                  style={{
                    color: '#444746',
                    fontWeight: 350,
                    fontSize: '16px',  
                  }}
                >
               
                </Typography.Text>
              </div>
              <Typography.Text style={{ color: '#1F1F1F', fontSize: 18, lineHeight: '16px', fontWeight: 480 }}>
                Aqui você encontra todos os serviços relacionados ao Microempreendedor Individual.
               
                Com o novo programa <b>MEI PI</b> - Portal integrado do Microempreendedor Individual, 
                ficou mais fácil de se organizar agora,
                concentrando todos os serviços em um único sistema.
              </Typography.Text>
              <br></br>
              <br></br>
              
            </Space>
            <div>
              <Space direction='horizontal'>
                <Card className="card-container"><Image className="image-placeholder" src="placeholder1.jpg"></Image></Card>
                <Card className="card-container"><Image className="image-placeholder" src="placeholder2.jpg"></Image></Card>
                <Card className="card-container"><Image className="image-placeholder" src="placeholder3.jpg"></Image></Card>
                
              </Space>
            </div>
            
            {breakpointsToRender.map((breakpoint) =>
              screens[breakpoint] && (
                <Modal
                  className="Modal1"
                  title="Seja Bem-Vindo MEI"
                  visible={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  key={breakpoint}
                  cancelText="Cancelar"
                >
                  <Image className="cardPic" style={{ padding: '8px 0 0' }} preview={false} src="MainCard2.png" />
                </Modal>
              )
            )}
          </>
        ) : (
          <div style={{ background: "white" }} className='SpinnerContainer'><Spin /></div>
        )}
      </div>

      {/* A página Home inicialmente não existiria, porém, para uma melhor imersão no desafio, foi criada da forma que foi possível com o tempo disposto */}

    </div>
  );
}

export default Painel;
