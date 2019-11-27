const utils={
    gensidebar:function(title,collapsable=ture, sidebarDepth=1, children=['/']){
        return {
            title,
            collapsable,
            sidebarDepth,
            children,
        }
    }
}

module.exports=utils;