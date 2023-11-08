import React, { useState, useEffect } from 'react';
import { Modal, Image, Divider } from 'antd';
import { Grid } from 'antd';
import { Typography, Carousel, Space } from 'antd';
import { Spin } from 'antd';
import { Card } from 'antd';

const { useBreakpoint } = Grid;

function Painel () {
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
    <div style={{ display: 'flex' }}>
     
      <div style={{ flex: 1 }}>
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
                <br/>
                Com o novo programa <b>MEI PI</b> - Portal integrado do Microempreendedor Individual, ficou mais fácil de se organizar agora,
                concentrando todos os serviços em um único sistema.
              </Typography.Text>
              <br></br>
              <br></br>
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
          <div style={{ background: "white" }} className='SpinnerContainer'><Spin /></div>
        )}
      </div>

      {/* A página Home inicialmente não existiria, porém, para uma melhor imersão no desafio, foi criada da forma que foi possível com o tempo disposto */}
      <div style={{ flex: 1, background: 'white' }}>
        {/* Sessão para as últimas notícias, infelizmente os padrões de interface não conseguiram ser atingidos com o tempo disponível */}
        <Typography.Title style={{
          color:'white'
          }} level={4}>null</Typography.Title>
          
        <Divider></Divider>
        <br></br>
          

        <Typography.Title style={{marginLeft:60,}}level={4}>Últimas Notícias</Typography.Title>
        <div>
        <Card className="CardsNews" style={{ display: 'flex', alignItems: 'center' }}>
        <Image preview={false} src="https://agenciagov.ebc.com.br/noticias/202311/direitos-da-populacao-quilombola-e-pauta-da-voz-do-brasil-desta-terca-feira-07/@@images/image/preview"/>
        </Card>
        <Card className="CardsNews" style={{ display: 'flex', alignItems: 'center' }}>
        <Image preview={false} src="https://agenciagov.ebc.com.br/noticias/202311/saiba-o-que-acontece-com-quem-faltou-no-primeiro-dia-de-enem/@@images/image/preview"/>
        </Card>
        <Card  className="CardsNews" style={{ display: 'flex', alignItems: 'center' }}>
        <Image preview={false} src="https://agenciagov.ebc.com.br/noticias/202311/ministerio-da-saude-simplifica-regras-para-envio-de-documentos-na-inscricao-do-novo-pac-saude/@@images/image/preview"/>
        </Card>
        </div>
        
        
        
      </div>
    </div>
  );
}

export default Painel;
