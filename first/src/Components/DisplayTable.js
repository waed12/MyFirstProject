import React from 'react'
import { Table } from 'react-bootstrap'

class DisplayTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.callData = this.callData.bind(this)
        this.callData();
    }


    callData() {
        fetch('./record.json').then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    list: data.Customers
                })

            })
    }
    render() {
        let Data = this.state.list.map((item) => {
            return (

                <tr key={item.Id} >
                    <td>{item.Id}</td>
                    <td>{item.Date}</td>
                    <td>{item.Name}</td>
                    <td>{item.Phone_number}</td>
                    <td>{item.Total_reward}</td>
                    <td>{item.Total_redeem}</td>
                    <td>{item.Current_balance}</td>


                </tr>
            )
        })
        return (

            <div style={{ margin: "5rem" }}>

                ,
                <Table striped bordered hover size="sm">

                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Phone_number</th>
                            <th>Total_reward</th>
                            <th>Total_redeem</th>
                            <th>Current_balance</th>
                        </tr>

                    </thead>

                    <tbody >

                        {Data}

                    </tbody>

                </Table>
            </div>

        )
    }
}




export default DisplayTable