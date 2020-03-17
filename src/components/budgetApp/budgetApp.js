import React from "react";
import Balance from '../Balance/balance';
import TransactionList from '../transactions/transactionList';
import Add from '../add/add';
import Delete from '../delete/delete';
//import Update from '../update/update';
import './budgetApp.css';
import {listData} from '../../utilities/firebase';
import {createData} from '../../utilities/firebase';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

class BudgetApp extends React.Component {
    constructor (props) {
        super(props);
        //TODO replace dataset with firebase
        this.dataset = [
            {description: "hummus", cost: 20, checked: false},
            {description: "poke", cost: 30, checked: false},
            {description: "boba", cost: 5, checked: false}
        ];
       



        var firebaseConfig = {
            apiKey: "AIzaSyD4wEwvP9eDP81nt-GLovYpoRzHyThbzCs",
            authDomain: "budget-app-2e9ec.firebaseapp.com",
            databaseURL: "https://budget-app-2e9ec.firebaseio.com",
            projectId: "budget-app-2e9ec",
            storageBucket: "budget-app-2e9ec.appspot.com",
            messagingSenderId: "961406783246",
            appId: "1:961406783246:web:2d958795d9dfea449ad15f",
            measurementId: "G-X15FXNKZV1"
        };

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)   
        };
        this.db = firebase.firestore();
        

        this.state = {
            data: [],
            total: 0,
        }
     
        this.addTransaction = this.addTransaction.bind(this);
        this.deleteTransaction = this.deleteTransaction.bind(this);
        this.updateTransaction = this.updateTransaction.bind(this);
        this.toggleChecked = this.toggleChecked.bind(this);
        this.isChecked = this.isChecked.bind(this);

     
        
    }

    listData() {
        let newData = [];
        this.db.collection("transactions").get()
            .then(snapshot => {
                const data = snapshot.forEach((doc) => {
                    let entry = doc.data()
                    entry["id"] = doc.id;
                    newData.push(entry)
                    

                });
                this.setState({data: newData});
                this.calculateTotal(this.state.data);
                
            })
            .catch(error => {
                console.log("Error in getting the data", error)
            });
    }

    componentWillMount() {
        this.listData();
  
        
    }

    componentDidMount() {
        this.calculateTotal(this.state.data)
    }

    addTransaction(desc, cost) {

        const timestamp = Date.now().toString();

        this.db.collection("transactions").doc(timestamp).set({
            description: desc,
            cost: cost,
            checked: false
        })

        this.listData();
        

    }

    deleteTransaction() {

        let newData = this.state.data;

        newData.forEach((item) => {
            if (item.checked === true) {
                this.db.collection("transactions").doc(item.id).delete().then(function() {
                    console.log("Document successfully deleted!");
                })
                .catch(function(error) {
                    console.error("Error removing document: ", error);
                });
            }

        }); 
        
        this.listData();
    }

    updateTransaction(id, newDesc, newCost) {
        // let newData = this.state.data;

        // newData[idx].description = newDesc;
        // newData[idx].cost = newCost;
        // this.toggleChecked(idx);
        
        // this.setState(
        //     {data: newData}
        // )

        // this.calculateTotal(newData)

        var entry = this.db.collection("transactions").doc(id);

        entry.update({
            description: newDesc,
            cost: newCost
        })
        .then(function() {
            console.log("Document successfully updated!");
            
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });

        this.toggleChecked(id);
        this.listData();

        

        
        //TODO: fix when update button is clicked, checked is not toggled
        
    }

    toggleChecked(id) {
        
        // let newData= this.state.data;
        // newData[id].checked = !newData[id].checked;
           
        
        // this.setState(
        //     {data: newData}
        // )
        let newData = this.state.data;
        let newChecked = 0;
        newData.forEach((item) => {
            if (item.id === id) {
                newChecked = item.checked;
            }
        })

        var entry = this.db.collection("transactions").doc(id);
        console.log(entry);
        entry.update({
            
            checked: !newChecked
        })
        .then(() => {
            console.log("Document successfully updated!");
            this.listData()
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });
        
        
    }
    isChecked(arr) {
        let hasChecked = false;
        arr.forEach(element => {
            if (element.checked === true) {
                hasChecked = true;
            }
        })
        return hasChecked;
    }

    calculateTotal(arr) {
        let x = 0
        arr.forEach(element => {
            
            x += Number(element.cost);
        });
        
        this.setState(
            {total: x}
        )
    }
    render() {    
        return (
            
            <body>
                <div class = "flex-container">
                    <header class="header">Budget App</header>

                
                    <div class = "flex-item">
                        <Add addTransaction={this.addTransaction}></Add>  <br></br>  
                        
                    
                 
                        
                    </div>

                    <div class = "flex-item">
                        <TransactionList data={this.state.data} toggleChecked={this.toggleChecked} updateTransaction={this.updateTransaction}></TransactionList>
                        {this.isChecked(this.state.data) ? <Delete deleteTransaction={this.deleteTransaction}></Delete> : null}
                        <Balance total={this.state.total}></Balance>
                    </div>
                </div>
        </body>
        )
    }


    
}

export default BudgetApp;