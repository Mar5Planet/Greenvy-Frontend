import React, {Component} from 'react'
import {observer} from 'mobx-react'
import { Form, Select, Radio} from 'antd';
import { Checkbox } from 'antd';
import { Slider, InputNumber} from 'antd';
import '../App.css';
import { Link } from 'react-router-dom';

const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;
const Option = Select.Option
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;




const CarbonFootprint = observer(class CarbonFootprint extends Component{

    checkEmpty = (user) => {
        let check
        this.props.users.map(usr => {
            if (usr.username === user.username) {
                console.log('match')
                check = 'username'
            }
            return check
        })

        this.props.users.map(usr => {
            if (usr.email === user.email) {
                console.log('match')
                check = 'email'
            }
            return check
        })
        if (user['footprint'] === 0) {
            return 'empty'
        } 
        for (var key in user) {
            if (user[key] === '') {
                return 'empty'
            }
        }
        return check
    }

    handleRecycledItems = items => this.props.store.setRecycledItems(items)
    createUser = storeObj => {
        let user = {}
        user.id = (this.props.users.length +1) 
        user.age = storeObj.age
        user.car_type = storeObj.carType
        user.car_val = storeObj.carVal
        user.diet = storeObj.diet
        user.dishes = storeObj.dishes
        user.email = storeObj.email
        user.flight = storeObj.flight
        user.footprint = storeObj.total
        user.laundry = storeObj.laundry
        user.location = storeObj.location
        user.password = storeObj.password
        user.profile_img = storeObj.profileImg
        user.recycle = storeObj.recyclePref
        user.username = storeObj.username
        user.waste = storeObj.waste
    
        if (this.checkEmpty(user) === 'empty') {
            console.log('not creating, render warning message.')
        } else if(this.checkEmpty(user) === 'username') {
            console.log('not creating, username is identical')
            
        }
        else {
            console.log('create me')
            this.props.createUser(user)
            this.props.setUser(user)
            console.log(user)
        }
        
    
    }
    render(){
        
        
        
        const store = this.props.store
        const selectStyle = {
            color: 'white',
            fontWeight: 'lighter'
        }
        const recycleOptions = ['Glass', 'Plastic', 'Paper', 'Aluminum', 'Steel', 'Food waste'];
        return (
            <Form onSubmit={(e) => {
                console.log(store)
                console.log('submitted')
                }} layout="inline">  
                <label>Username:</label>
                <input type="text"                        
                value={store.username}
                onChange={e => store.setUsername(e.target.value)}/>

                <label>Location:</label>
                <input type="text"                        
                value={store.location}
                onChange={e => store.setLocation(e.target.value)}/>

                <label>Email:</label>
                <input type="email"
                value={store.email}
                onChange={e => store.setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="password"
                value={store.password}
                onChange={e => store.setPassword(e.target.value)} />
                
                <label>Age:</label>
                <input type="number"
                value={store.age}
                onChange={(e) => store.setAge(e.target.value)}/>
                
                <label>Profile Photo:</label>
                <input type="text"                        
                value={store.profileImg}
                onChange={e => store.setProfileImg(e.target.value)}/>

                <label className="form-title" htmlFor="form-title">
                    Calculate your carbon footprint points using the form below
                </label><hr/><br/>
                <FormItem>
                    <label>Members of household:</label>
                    <InputNumber
                        min={0}
                        max={10}
                        value={store.household}
                        onChange={value => store.setHouseholdCount(value)}
                        style={{ marginLeft: 16 }}/>
                </FormItem>
                 <FormItem>
                    <label htmlFor="home-size">Size of home:</label>
                    <Select
                        placeholder="Please select size of home"
                        onChange={value => store.setHomeSize(value)}
                        >
                        <Option value="lg">Large</Option>
                        <Option value="md">Medium</Option>
                        <Option value="sm">Small</Option>
                        <Option value="apt">Apartment</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <label htmlFor="food-consumption">Food consumption:</label>
                    <h4 style={selectStyle}>select one</h4>
                    <RadioGroup
                        onChange={e => store.setDiet(e.target.value)}>
                        <RadioButton value="a">Meat and diary 4-7 times a week</RadioButton>
                        <RadioButton value="b">Meat and diary 1-4 times a week</RadioButton>
                        <RadioButton value="c">vegetarian</RadioButton>
                        <RadioButton value="d">vegan</RadioButton>
                    </RadioGroup>
                    <label htmlFor="food-choices">What are your food consumption habits?</label>
                    <RadioGroup
                        onChange={e => store.setFoodConsumption(e.target.value)}>
                        <Radio value="a">I primarily eat prepackaged foods</Radio>
                        <Radio value="b">I eat both prepackaged and fresh foods</Radio>
                        <Radio value="c">I eat only fresh foods</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem>
                    <label htmlFor="water-consumption">Water consumption:</label>
                    <h4 style={selectStyle}>Per week, I do laundry:</h4>
                     <Select
                        placeholder="select frequency"
                        onChange={value => store.setLaundryCount(value)}
                        >
                        <Option value="a">0 times</Option>
                        <Option value="b">1 - 3 times</Option>
                        <Option value="c">4 - 9 times</Option>
                        <Option value="d">More than 9 times</Option>
                    </Select>
                    <h4 style={selectStyle}>Per week, I run the dishwasher:</h4>
                     <Select
                        placeholder="select frequency"
                        onChange={value => store.setDishCount(value)}
                        >
                        <Option value="a">0 times</Option>
                        <Option value="b">1 - 3 times</Option>
                        <Option value="c">4 - 9 times</Option>
                        <Option value="d">More than 9 times</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <label htmlFor="household-items">Household appliances:</label>
                    <h4 style={selectStyle}>Each year, I purchase:</h4>
                     <Select
                        placeholder="select frequency"
                        onChange={value => store.setAppliances(value)}
                        >
                        <Option value="a">0 new items</Option>
                        <Option value="b">Less than 3 new items</Option>
                        <Option value="c">3 - 5 new items</Option>
                        <Option value="d">5 - 7 new items</Option>
                        <Option value="e">More than 7 new items</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <label htmlFor="waste-prod">Waste production:</label>
                    <h4 style={selectStyle}>I fill __ garbage can(s) per week:</h4>
                     <Select
                        placeholder="select garbage can count"
                        onChange={value => store.setWaste(value)}
                        >
                        <Option value="a">1/2 or less</Option>
                        <Option value="b">1</Option>
                        <Option value="c">2</Option>
                        <Option value="d">3</Option>
                        <Option value="e">4</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <label htmlFor="rec-waste">Recycled waste:</label>
                    <h4 style={selectStyle}>Do you recycle?</h4>
                    <RadioGroup
                        onChange={e => store.setRecyclePref(e.target.value)}>
                        <Radio value="a">yes</Radio>
                        <Radio value="b">no</Radio>
                    </RadioGroup>
                    {store.showRecyclePanel ?
                    <CheckboxGroup
                        options={recycleOptions}
                        onChange={this.handleRecycledItems}
                        /> 
                        : null}
                </FormItem>
                <FormItem>
                    <label htmlFor="transportation">Transportation score:</label>

                    <h4 style={selectStyle}>Car Type:</h4>
                     <Select
                        placeholder="Select car type"
                        onChange={value => store.setCarType(value)}
                        >
                        <Option value="a">None</Option>
                        <Option value="b">Electric </Option>
                        <Option value="c">Gasoline</Option>
                    </Select>

                    <h4 style={selectStyle}>I travel __ mile(s) by car:</h4>
                    <Slider
                        min={0}
                        max={20000}
                        value={store.carVal}
                        onChange={value => store.setCarTrans(value)}
                        />
                    <h4 style={selectStyle}>I travel __ mile(s) by public transportion:</h4>
                    <Slider
                        min={0}
                        max={30000}
                        value={store.pubTransVal}
                        onChange={value => store.setPubTrans(value)}
                        />
                    <h4 style={selectStyle}>By airplane, I mainly fly:</h4>
                    <Select
                        placeholder="select flight distance"
                        onChange={value => store.setFlight(value)}
                        >
                        <Option value="a">Within state</Option>
                        <Option value="b">To a nearby state/country</Option>
                        <Option value="c">To a another continent</Option>
                    </Select>
                </FormItem>
                <Link to={this.props.user? "/dashboard" : '/signup'}>
                <input onMouseDown={() => {
                    store.calculateTotal()
                    this.createUser(store)}
                } type="submit"/> 

                </Link>
            </Form>
        )
    }
    
})

export default CarbonFootprint