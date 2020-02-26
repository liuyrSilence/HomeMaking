import {get, post} from '../../http/axios'
export default {
    namespaced:true,
    state: {
       comments:[],
       commentBycus:[]
    },
    mutations: {
        refreshComment(state,comments){
            state.comments = comments
        },
        refreshCommentBycus(state,commentBycus){
            state.commentBycus = commentBycus
        }
    },
    actions: {
        // 添加评论
        async SaveComment({dispatch},form){
            let response = await post('/comment/saveOrUpdate',form)
            // dispatch('QueryComment',response.data)
            // return response
        },
        // 分页查询评论
        async QueryComment({commit},params){
            let response = await post('/comment/query',params)
            commit('refreshComment',response.data)
        },
        // 根据顾客id查询评论
        async findAllCommentsBycus({commit},cusId){
            let response = await get('/comment/findCommentByCus?cusId=' + cusId)
            commit('refreshCommentBycus',response.data)
        }
    }
}