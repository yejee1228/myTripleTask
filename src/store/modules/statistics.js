const initialState = {
    statistics:[  
        {id:'touristCount', value: 350, unit:'명', name:'사용자'},
        {id:'reviewCount', value: 21, unit:'개', name:'리뷰'},
        {id:'planCount', value: 650, unit:'개', name:'저장'},
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default : return state
    }
}

export default reducer;