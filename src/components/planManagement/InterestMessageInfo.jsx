import React from 'react'
import Templ from '../template/indexInfo.jsx'


/**
 * 表格模板
 * ###参数为props Templ的属性
 * @param indexUrl: 表单url  String
 * @param tableColumns: 表格列  Array
 * @param tableData: 表格数据  Array
 * @param title: 导航信息和卡片标题  Array(2)
 */

const tableColumns = [
    { name: '机构名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '组织机构代码', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '统一社会信用代码', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '受托户利率', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '归集户利率', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '计息方式', key: 'Portfolioid', isInput: false, option:['单利','复利','其他'], isRequired: true },
    { name: '计息周期', key: 'Portfolioid', isInput: false, option:['年','半年','季','月','周或天'],isRequired: false },
    { name: '适用期间', key: 'Portfolioid', isInput: true, isDate: true, isRequired: false },
]

const props = {
    indexUrl: 'planManagement/interestMessage',
    tableColumns,
    title: ['运作管理', '账户计息信息'],
    tableData: [],
    scroll: { x: tableColumns.length*100 }
}

class Funds extends React.Component {
    render() {
        return (
            <Templ {...props} />
        )
    }
}

export default Funds