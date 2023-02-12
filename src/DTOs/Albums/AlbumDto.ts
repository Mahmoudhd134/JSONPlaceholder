import Photo from "./Photo";

export default interface AlbumDto {
    userId: number,
    id: number,
    title: string,
    photos: Photo[]
}