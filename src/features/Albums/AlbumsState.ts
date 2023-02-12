import AlbumDto from "../../DTOs/Albums/AlbumDto";

export default interface AlbumsState {
    albums: AlbumDto[],
    currentShowedNumber: number
}