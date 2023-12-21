import { createStore } from "vuex";
import axios from "axios";
import _ from 'lodash';


export default createStore({
    state: {
        users: [],
        keysArray: []
    },
    mutations: {
        setKeysMutation(state) {
            

            
            console.log(state)
        },
        setUsersMutation(state, payload) {
            state.users = payload.value
        },
        getPageResult(state, payload) {
            state.users = state.users.slice(payload.startIndex, payload.lastIndex)
        },
         setSearchResult(state, payload) {
        //     function getAllNestedKeys(obj, parentKey = "") {
        //         let keys = [];

        //         for (const key in obj) {

            //obj.hasOwnProperty(keys) //vue is giving error for this we use prototype object
        //           if (Object.prototype.hasOwnProperty.call(obj, key)) {
        //             const currentKey = parentKey ? `${parentKey}.${key}` : key;
        //             keys.push(currentKey);

        //             if (typeof obj[key] === "object" && obj[key] !== null) {
        //               const nestedKeys = getAllNestedKeys(obj[key], currentKey);
        //               keys = keys.concat(nestedKeys);
        //             }
        //           }
        //         }
        //              return keys
        //     }
        //     let keysArr = [];
        //     for (const user of state.users) {
        //       const userKeys = getAllNestedKeys(user);

        //       keysArr = keysArr.concat(userKeys);
        //     }
        //     console.log('keysArr',[...new Set(keysArr)])
        //      keysArr = [...new Set(keysArr)]
             
        //     for(let keys in keysArr){
        //         // const objkey = Object.keys(state.users)
        //         if(keysArr[keys]=='address' || keysArr[keys]=='company' || keysArr[keys]=='address.geo' || keysArr[keys]=='address.zipcode' || keysArr[keys]=='id'){
        //             keysArr.splice(keys,1)
        //         }
        //     }
      

            const searchTerm = payload.search.toLowerCase();
            const data = state.users;

            if (searchTerm !== '') {
                state.users = _.filter(data, (user) => {
                    const propertiesToCheck = [
                        'name', 'username', 'email', 'phone', 'website',
                        'company.name', 'company.catchPhrase', 'company.bs',
                        'address.street', 'address.suite', 'address.city',
                        'address.zipcode', 'address.geo.lat', 'address.geo.lng'
                    ];

                    return _.some(propertiesToCheck, (property) => {
                        const value = _.get(user, property);
                      
                        return value && value.toLowerCase().includes(searchTerm);
                    });
                });
            } else {
                state.users = data;
            }
        }

    },
    actions: {
        async setUsersAction(context) {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            console.log('res', res)
            context.commit({ type: 'setUsersMutation', value: res.data })
            context.commit({ type: 'setKeysMutation' })

        },
        getSearchResult(context, payload) {
            console.log('search', payload.search)
            context.commit({ type: 'setSearchResult', search: payload.search })
        },
        getPageResult(context, payload) {
            context.commit({ type: 'setPageResult', startIndex: payload.startIndex, lastIndex: payload.lastIndex })
        },
        setKeysAction(context) {
            context.commit({ type: 'setKeysMutation' })
        }

    },

    getters: {
        getPageResult: (state) => (data) => {
            return state.users.slice(data.startIndex, data.lastIndex)
        },
        getUsers(state) {
            return state.users
        },

    }
})