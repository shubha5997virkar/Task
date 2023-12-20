import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        users: [],
    },
    mutations: {
        setUsersMutation(state, payload) {
            state.users = payload.value
        },
        getPageResult(state,payload){
            state.users = state.users.slice(payload.startIndex,payload.lastIndex)
        },
        setSearchResult(state, payload) {
            const data = state.users
            if (payload.search != '') {
                state.users = state.users.filter((user) => {
                    if (user.name.toLowerCase().includes(payload.search.toLowerCase())) {
                        return true
                    } else
                        if (user.username.toLowerCase().includes(payload.search.toLowerCase())) {
                            return true
                        }
                        else
                            if (user.email.toLowerCase().includes(payload.search.toLowerCase())) {
                                return true
                            }
                            else
                                if (user.phone.toLowerCase().includes(payload.search.toLowerCase())) {
                                    return true
                                } else
                                    if (user.website.toLowerCase().includes(payload.search.toLowerCase())) {
                                        return true
                                    }
                                    else
                                        if (user.company.name.toLowerCase().includes(payload.search.toLowerCase())) {
                                            return true
                                        }
                                        else
                                            if (user.company.catchPhrase.toLowerCase().includes(payload.search.toLowerCase())) {
                                                return true
                                            }
                                            else
                                                if (user.company.bs.toLowerCase().includes(payload.search.toLowerCase())) {
                                                    return true
                                                }

                                                else
                                                    if (user.address.street.toLowerCase().includes(payload.search.toLowerCase())) {
                                                        return true
                                                    }
                                                    else
                                                        if (user.address.suite.toLowerCase().includes(payload.search.toLowerCase())) {
                                                            return true
                                                        }
                                                        else
                                                            if (user.address.city.toLowerCase().includes(payload.search.toLowerCase())) {
                                                                return true
                                                            }
                                                            else
                                                                if (user.address.zipcode.toLowerCase().includes(payload.search.toLowerCase())) {
                                                                    return true
                                                                }
                                                                else
                                                                    if (user.address.geo.lat.toLowerCase().includes(payload.search.toLowerCase())) {
                                                                        return true
                                                                    }
                                                                    else
                                                                        if (user.address.geo.lng.toLowerCase().includes(payload.search.toLowerCase())) {
                                                                            return true
                                                                        }
                                                             
                })
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

        },
        getSearchResult(context, payload) {
            console.log('search', payload.search)
            context.commit({ type: 'setSearchResult', search: payload.search })
        },
        getPageResult(context,payload){
            context.commit({type:'setPageResult', startIndex:payload.startIndex,lastIndex:payload.lastIndex})
        }

    },
    
    getters:{
        getPageResult:(state)=>(data)=>{
            return state.users.slice(data.startIndex,data.lastIndex)
        },
        getUsers(state){
            return state.users
        }
    }
})