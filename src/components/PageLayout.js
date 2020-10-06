import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import '../styles/PageLayout.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Home from './Home'
import Graph from './Graph';
import AnotherGraph from './AnotherGraph';
import NivoGraph from './NivoGraph';
import ChartJS from './ChartJS';

function PageLayout() {

    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

    return (
      <BrowserRouter >
        <Layout>
          <Header className="header">
            <Link to="/">
              <img className="logo" style={{height: "40px", width: "71", borderRadius: "5px"}}src={require("../images/DATA.png")} alt="logo"/> 
            </Link>
            
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                // defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="React Libraries">
                  <Menu.Item key="1">
                  <Link to="/rechart">
                rechart
                </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                  <Link to="/reactvis">
                  react-vis
                </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/chartjs">
                    chart.js
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/nivo">
                    nivo
                    </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <div>
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route path="/rechart">
                    <Graph />
                  </Route>
                  <Route path="/reactvis" >
                    <AnotherGraph />
                  </Route>
                  <Route path="/chartjs">
                    <ChartJS />
                  </Route>
                  <Route path="/nivo">
                    <NivoGraph />
                  </Route>
                </Switch>
              </div>
              </Content>
              
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
}

export default PageLayout
