import React, {Component} from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';

function StateDropDown () {
    return (
        <div style={{
            maxHeight: 200,
            overflowY: 'scroll',
        }}>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    State
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/state-1">Alabama</Dropdown.Item>
                    <Dropdown.Item href="#/state-2">Alaska</Dropdown.Item>
                    <Dropdown.Item href="#/state-3">Arizona</Dropdown.Item>
                    <Dropdown.Item href="#/state-4">Arkansas</Dropdown.Item>
                    <Dropdown.Item href="#/state-5">California</Dropdown.Item>
                    <Dropdown.Item href="#/state-6">Colorad</Dropdown.Item>
                    <Dropdown.Item href="#/state-7">Connecticut</Dropdown.Item>
                    <Dropdown.Item href="#/state-8">Delaware</Dropdown.Item>
                    <Dropdown.Item href="#/state-9">Florida</Dropdown.Item>
                    <Dropdown.Item href="#/state-10">Georgia</Dropdown.Item>
                    <Dropdown.Item href="#/state-11">Hawaii</Dropdown.Item>
                    <Dropdown.Item href="#/state-12">Idaho</Dropdown.Item>
                    <Dropdown.Item href="#/state-13">Illinois</Dropdown.Item>
                    <Dropdown.Item href="#/state-14">Indiana</Dropdown.Item>
                    <Dropdown.Item href="#/state-15">Iowa</Dropdown.Item>
                    <Dropdown.Item href="#/state-16">Kansas</Dropdown.Item>
                    <Dropdown.Item href="#/state-17">Kentucky</Dropdown.Item>
                    <Dropdown.Item href="#/state-18">Louisiana</Dropdown.Item>
                    <Dropdown.Item href="#/state-19">Maine</Dropdown.Item>
                    <Dropdown.Item href="#/state-20">Maryland</Dropdown.Item>
                    <Dropdown.Item href="#/state-21">Massachusetts</Dropdown.Item>
                    <Dropdown.Item href="#/state-22">Michigan</Dropdown.Item>
                    <Dropdown.Item href="#/state-23">Minnesota</Dropdown.Item>
                    <Dropdown.Item href="#/state-24">Mississippi</Dropdown.Item>
                    <Dropdown.Item href="#/state-25">Missouri</Dropdown.Item>
                    <Dropdown.Item href="#/state-26">Montana</Dropdown.Item>
                    <Dropdown.Item href="#/state-27">Nebraska</Dropdown.Item>
                    <Dropdown.Item href="#/state-28">Nevada</Dropdown.Item>
                    <Dropdown.Item href="#/state-29">New Hampshire</Dropdown.Item>
                    <Dropdown.Item href="#/state-30">New Jersey</Dropdown.Item>
                    <Dropdown.Item href="#/state-31">New Mexico</Dropdown.Item>
                    <Dropdown.Item href="#/state-32">New York</Dropdown.Item>
                    <Dropdown.Item href="#/state-33">North Carolina</Dropdown.Item>
                    <Dropdown.Item href="#/state-34">North Dakota</Dropdown.Item>
                    <Dropdown.Item href="#/state-35">Ohio</Dropdown.Item>
                    <Dropdown.Item href="#/state-36">Oklahoma</Dropdown.Item>
                    <Dropdown.Item href="#/state-37">Oregon</Dropdown.Item>
                    <Dropdown.Item href="#/state-38">Pennsylvania</Dropdown.Item>
                    <Dropdown.Item href="#/state-39">Rhode Island</Dropdown.Item>
                    <Dropdown.Item href="#/state-40">South Carolina</Dropdown.Item>
                    <Dropdown.Item href="#/state-41">South Dakota</Dropdown.Item>
                    <Dropdown.Item href="#/state-42">Tennessee</Dropdown.Item>
                    <Dropdown.Item href="#/state-43">Texas</Dropdown.Item>
                    <Dropdown.Item href="#/state-44">Utah</Dropdown.Item>
                    <Dropdown.Item href="#/state-45">Vermont</Dropdown.Item>
                    <Dropdown.Item href="#/state-46">Virginia</Dropdown.Item>
                    <Dropdown.Item href="#/state-47">Washington</Dropdown.Item>
                    <Dropdown.Item href="#/state-48">West Virginia</Dropdown.Item>
                    <Dropdown.Item href="#/state-49">Wisconsin</Dropdown.Item>
                    <Dropdown.Item href="#/state-50">Wyoming</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default StateDropDown;