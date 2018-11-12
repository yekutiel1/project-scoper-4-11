import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux'
import store from '../../store/store.js';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PrintButton from '../../createPDF/PrintButton.js'
import {Col, FormGroup, Input, Label, Row} from "reactstrap";




class SelectProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPdf: false
        }
    }
    render() {
        
        return (
            <div>
                {/*<select defaultValue={this.props.currentProject} onChange={(e) => {*/}
                    {/*store.dispatch({ type: 'UPDATE_CURRENT_PROJECT_ID', payload: e.target.value });*/}
                    {/*store.dispatch({ type: 'GET_ALL_DATA' });*/}
                {/*}}>*/}
                    {/*<option value='' style={{ color: 'red' }} >Select project</option>*/}
                    {/*{this.props.projectsArray.map((elm, i) => {*/}
                        {/*return <option key={elm._id} value={elm._id}>{elm.projectName}</option>})}*/}
                {/*</select>*/}
                {/*{this.props.currentProject === '' ? <CreateNewProject /> : null}*/}
                {/*/!* {this.props.currentProject === '' ? null : <ScopingContinuation store={this.props} />} *!/*/}
                <FormGroup>
                    <Label for="exampleSelect" sm={2}>Select</Label>
                    <Input type="select" name="select" id="exampleSelect"
                           defaultValue={this.props.currentProject} onChange={(e) => {
                        store.dispatch({ type: 'UPDATE_CURRENT_PROJECT_ID', payload: e.target.value });
                        store.dispatch({ type: 'GET_ALL_DATA' });
                    }}>
                        <option value='' style={{ color: 'red' }} >Select project</option>
                        {this.props.projectsArray.map((elm, i) => {
                            return <option key={elm._id} value={elm._id}>{elm.projectName}</option>})}
                    </Input>
                </FormGroup>
                {this.props.currentProject === '' ? <CreateNewProject /> : null}
            </div>
        );
    }
}

class CreateNewProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            editorName: "",
        }
    }

    saveBtn = () =>{
        var inputEmpty = this.state.projectName === '' || this.state.editorName === '';
       return <button className={inputEmpty ? 'btn btn-secondary disableBtn': 'btn btn-primary'} onClick={() => {
           store.dispatch({type: 'CREATE_NEW_PROJECT', payload: this.state})
            {/* this.createNewProject(this.state) */}
            this.setState({ projectName: "",editorName: "",})
            }}><Link to='/scoping' >Create New Project</Link></button>
    }
    render() {
        return (
            <div className='newProject'>

                {/*<input type="text" placeholder='ProjectName' value={this.state.projectName} onChange={(e) => {*/}
                    {/*this.setState({ projectName: e.target.value })*/}
                {/*}} />*/}
                {/*<input type="text" placeholder='Editor name' value={this.state.editorName} onChange={(e) => {*/}
                    {/*this.setState({ editorName: e.target.value })*/}
                {/*}} />*/}
                {/*<br/>*/}
                {/*{this.saveBtn()}*/}
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="ProjectName">Project Name</Label>
                            <Input type="text" name="ProjectName" id="ProjectName"
                                   value={this.state.projectName} onChange={(e) => {
                                this.setState({ projectName: e.target.value })
                            }} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="Editor name">Editor name</Label>
                            <Input type="text" name="EditorName" id="EditorName"
                                   value={this.state.editorName} onChange={(e) => {
                                this.setState({ editorName: e.target.value })
                            }} />
                        </FormGroup>
                    </Col>
                </Row>
                {this.saveBtn()}
            </div>
        );
    }
}

// class ScopingContinuation extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             newVersionMode: false,
//             displayPdf: false,
//             displayVersions: false
//         }
//     }
//     cancelNewVersionMode = () => {
//         this.setState({ newVersionMode: false })
//     }
//     render() {

//         return (
//             <div>
                
//                 {this.state.newVersionMode ? <CreateNewVersion cancelNewVersionMode={this.cancelNewVersionMode} /> : null}
//                 {this.state.displayVersions?  <Versions/>: null}
//                 {this.state.displayPdf ? 
//                 <div>
                 


//                     {/* <PrintButton  id={"pdfPreview"} label={"Create PDF file"} /> */}
                    
//                 </div>
//                  : null}


//             </div>
//         );
//     }
// }






export default connect(store => store)(SelectProject);