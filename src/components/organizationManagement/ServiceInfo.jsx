import React, { Component } from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';



const tableColumns = [
    { name: '交易序列号', key: 'Appseriono', isInput: true, isRequired:true },
    { name: '交易类别', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:true },
    { name: '受托人年金计划编码', key: 'Planid', isInput: true, isRequired:false },
    { name: '代理人计划编码', key: 'Accountplanid', isInput: true, isRequired:false },
    { name: '年金计划名称', key: 'Planname', isInput: true, isRequired:false },
    { name: '年金计划登记号', key: 'Planlicid', isInput: true , isRequired:true},
    { name: '机构代码', key: 'Year', isInput: true, isRequired:true },
    { name: '机构名称', key: 'Pricedate', isInput: true, isRequired:true },
    { name: '组织机构代码', key: 'Lastupddate', isInput: true, isRequired:false },
    { name: '统一社会信用代码', key: 'Status', isInput: true, isRequired:false }
].map((item)=>{
    return {title: item.name, dataIndex: item.key}
})

const tableData = []

class ServiceInfo extends Component {

    componentDidMount(){

    }
    render() {
        return (
            <div>
                <BreadcrumbCustom first="机构管理" second="服务机构信息" />
                <div>
                    <Card title="服务机构信息">
                        <Row gutter={40} style={{marginBottom:18}}>
                            <Col sm={{span:10, push:18}}>
                                <Link to="/app/organizationManagement/service" style={{marginRight: 10}}>
                                    <Button type="primary">增加</Button>
                                </Link>
                                <Link to="/app/organizationManagement/service" style={{marginRight: 10}}>
                                    <Button type="primary">修改</Button>
                                </Link>
                                <Button type="primary">删除</Button>
                                <Button type="primary">导入</Button>
                            </Col>
                        </Row>
                        <Table columns={tableColumns} dataSource={tableData} />              
                    </Card>
                </div>
            </div>
        )
    }
}
export default ServiceInfo