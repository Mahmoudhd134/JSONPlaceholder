import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import AlbumsState from "./AlbumsState";
import axios from "axios";
import AlbumDto from "../../DTOs/Albums/AlbumDto";
import Photo from "../../DTOs/Albums/Photo";

const initialState: AlbumsState = {
    albums: [],
    currentShowedNumber: 10
}

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
    try {
        const response = await axios.get<AlbumDto[]>('https://jsonplaceholder.typicode.com/albums')
        return response.data
    } catch (e) {
        console.error(e)
    }
})

export const fetchAlbumsById = createAsyncThunk('albums/fetchAlbumsById', async (id: number) => {
    try {
        const response = await axios.get<AlbumDto>('https://jsonplaceholder.typicode.com/albums/' + id)
        return response.data
    } catch (e) {
        console.error(e)
    }
})

export const fetchPhotos = createAsyncThunk('albums/fetchPhotos', async (id: number) => {
    try {
        const response = await axios.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        return {id, data: response.data}
    } catch (e) {
        console.error(e)
    }
})

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        increaseCurrentAlbumsShowedNumber: (s) => {
            s.currentShowedNumber += 10
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbums.fulfilled, (s, a: PayloadAction<AlbumDto[] | undefined>) => {
                s.albums = a.payload ?? [{id: 0, userId: 0, title: 'NO ITEMS TO SHOW', photos: []}]
            })
            .addCase(fetchAlbumsById.fulfilled, (s, a: PayloadAction<AlbumDto | undefined>) => {
                if(s.albums.find(al => al.id == a.payload?.id) != undefined)
                    return
                s.albums.push(a.payload!)
            })
            .addCase(fetchPhotos.fulfilled, (s, a: PayloadAction<{ id: number, data: Photo[] } | undefined>) => {
                console.log('hrer')
                s.albums.find(al => al.id == +a.payload?.id!)!.photos = a.payload?.data!
            })
    }
})

export const {increaseCurrentAlbumsShowedNumber} = albumsSlice.actions
export default albumsSlice.reducer