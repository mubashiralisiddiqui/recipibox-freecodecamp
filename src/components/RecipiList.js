import React from 'react';
// import {GridList, GridTile} from 'material-ui/GridList';\
// import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
import UpdateRecipi from './updateRecip.js'
import { Accordion, Panel, ButtonToolbar, Button } from 'react-bootstrap';
class RecipiList extends React.Component {
    
    render() {
        const style = {
            marginLeft: 20,
            Paper: {
                width: '500px',
                marginLeft: "50px",
                marginTop: "20px",
                padding: "20px"
            },
            heading: {
                textAlign: "center"
            }

        };

        return (
            <div>
                {this.props.recipivalue.map((v, i) => {
                    console.log(i)
                    return (
                        <Accordion key={i}>
                            <Panel header={v.recipiTitle} eventKey="1">
                                <h2 style={style.heading}>Ingredients</h2>
                                <h3>{v.ingredient}</h3>
                                <ButtonToolbar>
                                    <Button className="delete" bsStyle="danger" onClick={() => this.props.delete(i)}>Delete</Button>
                                    <Button bsStyle="default" onClick={this.props.toggle}>Edit</Button>
                                </ButtonToolbar>
                            </Panel>
                            <UpdateRecipi
                                recepieItem={v}
                                index={i}
                                recepies={this.props.recipivalue}
                                handleToggle={this.props.handleToggle} 
                                handleUpdate={this.props.handleUpdate}
                                isOpen={this.props.isOpen}
                                handlechange={this.props.handlechange}
                                recipiTitle={v.recipiTitle}
                                Ingrident={v.ingredient}
                                id={v.id}

                            />

                        </Accordion>
                    )
                })}

            </div>
        )
    }
}
export default RecipiList;