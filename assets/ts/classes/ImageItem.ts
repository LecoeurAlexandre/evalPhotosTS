export default class ImageItem {
    private static _count: number = 0;
    private _id: number;
  
    constructor(private _imageUrl: string, private _imageTitle: string, private _imageDescription: string) {
      this._id = ++ImageItem._count;
    }

    get id() {
        return this._id
    }

    get imageUrl() {
        return this._imageUrl
    }

    get imageTitle() {
        return this._imageTitle
    }

    get imageDescription() {
        return this._imageDescription
    }
}