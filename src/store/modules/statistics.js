const initialState = {
    statistics:[  
        {id:'touristCount', value: 700, unit:'명', name:'여행자'},
        {id:'reviewCount', value: 100, unit:'개', name:'여행 리뷰'},
        {id:'planCount', value: 470, unit:'개', name:'여행 일정'},
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default : return state
    }
}

export default reducer;