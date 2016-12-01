import React from 'react';
import ReactDom from 'react-dom';

import {FormGroup, FormControl, ControlLabel, Button, Checkbox} from "react-bootstrap"
    
class LoginForm extends React.Component {
    render() {
        return (
            <form>
                <FormGroup>
                    <ControlLabel>名字</ControlLabel>
                    <FormControl type="text" placeholder="请输入名字"/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>姓</ControlLabel>
                    <FormControl type="text" placeholder="请输入姓"/>
                </FormGroup>
                <Checkbox>请记住我</Checkbox>
                <Button bsStyle="primary">登录</Button>
            </form>
        );
    }
}

export default LoginForm;
