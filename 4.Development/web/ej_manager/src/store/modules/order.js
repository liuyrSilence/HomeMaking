import request from '@/utils/request'
import querystring from 'querystring'
export default{
    namespaced:true,
    state:{
        order:[],
        order1:[],
        order2:[],
        order3:[],
        order4:[],
        order5:[],
        order6:[],
        order7:[],
        total:''
    },
    mutations:{
        SET_ORDER(state,order){
            state.order=order
        },
        SET_ORDER1(state,order1){
            state.order1=order1
        },
        SET_ORDER2(state,order2){
            state.order2=order2
        },
        SET_ORDER3(state,order3){
            state.order3=order3
        },
        SET_ORDER4(state,order4){
            state.order4=order4
        },
        SET_ORDER5(state,order5){
            state.order5=order5
        },
        SET_ORDER6(state,order6){
            state.order6=order6
        },
        SET_ORDER7(state,order7){
            state.order7=order7
        },
        SET_TOTAL(state,total){
            state.total=total
        }
    },
    actions:{
        //查询所有订单
        findAllorder({commit}){
            request.get('/order/findAll').then((res)=>{
            commit('SET_ORDER',res.data)
            let itme=res.data
            let arr1=[]
            let arr2=[]
            let arr3=[]
            let arr4=[]
            let arr5=[]
            let arr6=[]
            for(let i=0;i<itme.length;i++){
                if(itme[i].status==='待支付'){
                arr1.push(itme[i])
                }else if(itme[i].status==='待派单'){
                arr2.push(itme[i])
                }else if(itme[i].status==='待接单'){
                    arr3.push(itme[i])
                    }else if(itme[i].status==='待服务'){
                        arr4.push(itme[i])
                        }else if(itme[i].status==='待确认'){
                            arr5.push(itme[i])
                            }else if(itme[i].status==='已完成'){
                                arr6.push(itme[i])
                                }
            }
            commit('SET_ORDER1',arr1)
            commit('SET_ORDER2',arr2)
            commit('SET_ORDER3',arr3)
            commit('SET_ORDER4',arr4)
            commit('SET_ORDER5',arr5)
            commit('SET_ORDER6',arr6)
        })
        },
        //分页查询
        // queryOrder({commit},list){
        //     request({
        //         method:'POST',
        //         url:'/product/query',
        //         data:querystring.stringify(list)
        //     }).then((res)=>{
        //         commit('SET_ORDER',res.data.list)
        //         commit('SET_TOTAL',res.data.total)
        //     let itme=res.data.list
        //     let arr1=[]
        //     let arr2=[]
        //     let arr3=[]
        //     let arr4=[]
        //     let arr5=[]
        //     let arr6=[]
        //     for(let i=0;i<itme.length;i++){
        //         if(itme[i].status==='待支付'){
        //         arr1.push(itme[i])
        //         }else if(itme[i].status==='待派单'){
        //         arr2.push(itme[i])
        //         }else if(itme[i].status==='待接单'){
        //             arr3.push(itme[i])
        //             }else if(itme[i].status==='待服务'){
        //                 arr4.push(itme[i])
        //                 }else if(itme[i].status==='待确认'){
        //                     arr5.push(itme[i])
        //                     }else if(itme[i].status==='已完成'){
        //                         arr6.push(itme[i])
        //                         }
        //     }
        //     commit('SET_ORDER1',arr1)
        //     commit('SET_ORDER2',arr2)
        //     commit('SET_ORDER3',arr3)
        //     commit('SET_ORDER4',arr4)
        //     commit('SET_ORDER5',arr5)
        //     commit('SET_ORDER6',arr6)
        //     })
        // },
        //派单
        sendOrder({dispatch},orderForm){
            request.get('/order/sendOrder',{
                params:orderForm
            }).then(()=>{
                dispatch('findAllorder')
            })
        },
        //通过id查询订单
        findOrderbyId({commit},id){
            request.get('/order/findById?id='+id).then((res)=>{
                commit('SET_ORDER7',res.data)
            })
        }
    }
}