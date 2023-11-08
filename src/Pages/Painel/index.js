import React, { useState, useEffect } from 'react';
import { Modal, Image, Divider } from 'antd';
import { Grid } from 'antd';
import { Typography, Carousel, Space } from 'antd';
import { Spin } from 'antd';


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
    <>
      {dataLoaded ? (
        <>
          <Typography.Title level={4}>Seja Bem-Vindo, MEI</Typography.Title>
          <Divider />
          <Space direction="vertical">
            <div>
              <Typography.Title style={{ color: '#1867DC' }} level={2}>
                Agora ficou mais fácil!
              </Typography.Title>
              <Typography.Text
                style={{
                  color: '#444746',
                  fontWeight: 500,
                  fontSize: '16px',
                  paddingBottom: '16px',
                }}
              >
                Fique de olho nos negócios e mantenha tudo sob controle.
              </Typography.Text>
            </div>
            <Typography.Text style={{ color: '#1F1F1F', fontSize: 16, lineHeight: '16px', fontWeight: 480 }}>
              Aqui você encontra todos os serviços relacionados ao Microempreendedor Individual.
              <br />
              Com o novo programa <b>MEI PI</b> - Portal integrado do Microempreendedor Individual, ficou mais fácil de se organizar agora, <br></br>concentrando todos os serviços em um único sistema.
            </Typography.Text>
            <Image preview={false} src="Hero.png"></Image>
          </Space>

          <Carousel
            style={{
              paddingTop: 160,
              width: 1024,
              height: '100%',
            }}
            autoplay
            dotActiveWidth
            dotPosition="bottom"
          >
            <div>
              <Image preview={false} src="https://www.gov.br/casacivil/novopac/novopac/@@govbr.institucional.banner/bbb2c1b0-e99f-4563-aa6b-9ec65137c6a1/@@images/233f5602-163f-4ffc-84dc-4368674119c1.png" />
            </div>
            <div>
              <Image preview={false} src="image1.png" />
            </div>
            <div>
              <Image preview={false} src="https://www.gov.br/casacivil/novopac/novopac/@@govbr.institucional.banner/bbb2c1b0-e99f-4563-aa6b-9ec65137c6a1/@@images/233f5602-163f-4ffc-84dc-4368674119c1.png" />
            </div>
          </Carousel>

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
        <div style={{background:"white",}}className='SpinnerContainer'><Spin /></div>
      )}
    </>
  );
}

export default Painel;
