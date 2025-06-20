const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot35806/",
            name: "springboot35806",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "基于java敬老院管理系统"
        } 
    }
}
export default base
