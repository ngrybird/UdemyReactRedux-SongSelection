import { combineReducers } from  'redux';

const songsReducer = () => {
    return [
        { title : 'No Scrub' , duration : '4:05'},
        { title : 'macarena' , duration : '1:40'},
        { title : 'Al star' , duration : '3:00'},
        { title : 'I want it that way' , duration : '1:15'}
    ];
};
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});