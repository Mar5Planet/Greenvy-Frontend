import {extendObservable} from 'mobx'

class CarbonFootprintCalculator {
    constructor(){
        extendObservable(this, {
            username: '',
            profileImg: '',
            password: '',
            location: '',
            email: '',
            greenvyScore: 0,
            age: 0,
            total: 0,
            runningTotal: 0,
            household: 0,
            homesize: "md",
            diet: "a",
            foodConsumption: "b",
            laundry: "b",
            dishes: "b",
            appliances: "b",
            waste: "b",
            recyclePref: "",
            showRecyclePanel: false,
            recItems: 0,
            carVal: 0,
            carType: 0,
            pubTransVal: 0,
            flight: "b",
            points : {
                carType: 0,
                household: 0,
                homesize: 0,
                diet: 0,
                food: 0,
                laundry: 0,
                dishes: 0,
                appliances: 0,
                waste: 0,
                recItems: 0,
                car: 0,
                pub: 0,
                flight: 0
            },
            setUsername(val){
                this.username = val
            },
            setProfileImg(val){
                this.profileImg = val
            },
            setLocation(val){
                this.location = val
            },
            setPassword(val){
                this.password = val
            },
            setEmail(val){
                this.email = val
            },
            setAge(val){
                this.age = val
            },

            
            setHouseholdCount(val){
                this.household = val++
                let h = this.household
                if(h === 1){
                    this.points.household = 14
                } else if(h === 2){
                    this.points.household = 12
                } else if(h === 3){
                    this.points.household = 10
                } else if(h === 4){
                    this.points.household = 8
                } else if(h === 5){
                    this.points.household = 6
                } else if(h === 6){
                    this.points.household = 4
                } else if(h > 6){
                    this.points.household = 2
                }
            },
            setHomeSize(val){
                this.homesize = val
                switch(this.homesize){
                    case "lg": this.points.homesize = 10; break;
                    case "md": this.points.homesize = 7; break;
                    case "sm": this.points.homesize = 4; break;
                    case "apt": this.points.homesize = 2; break;
                    default: return;
                }
            },
            setDiet(val){
                this.diet = val
                switch(this.diet){
                    case "a": this.points.diet = 9; break;
                    case "b": this.points.diet = 6; break;
                    case "c": this.points.diet = 4; break;
                    case "d": this.points.diet = 2; break;
                    default: return;
                }
            },
            setFoodConsumption(val){
                this.foodConsumption = val
                switch(this.foodConsumption){
                    case "a": this.points.food = 12; break;
                    case "b": this.points.food = 6; break;
                    case "c": this.points.food = 2; break;
                    default: return;
                }
            },
            setLaundryCount(val){
                this.laundry = val
                switch(this.laundry){
                    case "a": this.points.laundry = 0; break;
                    case "b": this.points.laundry = 1; break;
                    case "c": this.points.laundry = 2; break;
                    case "d": this.points.laundry = 3; break;
                    default: return;
                }
            },
            setDishCount(val){
                this.dishes = val
                switch(this.dishes){
                    case "a": this.points.dishes = 0; break;
                    case "b": this.points.dishes = 1; break;
                    case "c": this.points.dishes = 2; break;
                    case "d": this.points.dishes = 3; break;
                    default: return;
                }
            },
            setAppliances(val){
                this.appliances = val
                switch(this.appliances){
                    case "a": this.points.appliances = 2; break;
                    case "b": this.points.appliances = 4; break;
                    case "c": this.points.appliances = 6; break;
                    case "d": this.points.appliances = 8; break;
                    case "e": this.points.appliances = 10; break;
                    default: return;
                }
            },
            setWaste(val){
                this.waste = val
                switch(this.waste){
                    case "a": this.points.waste = 5; break;
                    case "b": this.points.waste = 20; break;
                    case "c": this.points.waste = 30; break;
                    case "d": this.points.waste = 40; break;
                    case "e": this.points.waste = 50; break;
                    default: return;
                }
            },
            setRecyclePref(val){
                this.recyclePref = val
                this.recyclePref === "a" ? this.showRecyclePanel = true : this.showRecyclePanel = false
                this.recyclePref === "b" ? this.points.recItems = 24 : this.points.recItems = 0
            },
            setCarType(val){
                this.carType = val
                switch(this.carType) {
                    case "a": this.points.carType = 0; break;
                    case "b": this.points.carType = 10; break;
                    case "c": this.points.carType = 25; break;
                    default: return;    
                }
            },
            setRecycledItems(val){
                if(this.recyclePref === "a"){
                   this.points.recItems = 24 - (4 * val.length) 
                }

            },
            setCarTrans(val){
                this.carVal = val
                if(this.carVal >= 15000){
                    this.points.car = 12
                } else if(this.carVal > 10000 && this.carVal < 15000){
                    this.points.car = 10
                } else if(this.carVal >= 1000 && this.carVal <= 10000){
                    this.points.car = 6
                } else if(this.carVal < 1000){
                    this.points.car = 4
                } else{
                    this.points.car = 0
                }
            },
            setPubTrans(val){
                this.pubTransVal = val
                if(this.pubTransVal >= 20000){
                    this.points.pub = 12
                } else if(this.pubTransVal >= 15000 && this.pubTransVal < 20000){
                    this.points.pub = 10
                } else if(this.pubTransVal >= 10000 && this.pubTransVal < 15000){
                    this.points.pub = 6
                } else if(this.pubTransVal >= 1000 && this.pubTransVal < 10000){
                    this.points.pub = 4
                } else if(this.pubTransVal < 1000){
                    this.points.pub = 2
                } else{
                    this.points.pub = 0
                }
            },
            setFlight(val){
                this.flight = val
                switch(this.flight){
                    case "a": this.points.flight = 2; break;
                    case "b": this.points.flight = 6; break;
                    case "c": this.points.flight = 20; break;
                    default: return;
                }
            },
            calculateTotal (){
                 const tot = this.points.household + this.points.homesize
                    + this.points.diet + this.points.food
                    + this.points.laundry + this.points.dishes
                    + this.points.appliances + this.points.waste
                    + this.points.recItems + this.points.car
                    + this.points.pub + this.points.flight + this.points.carType
                 
                    this.total = tot
                return tot
                }
        })
    }
}

const store = new CarbonFootprintCalculator()
export default store