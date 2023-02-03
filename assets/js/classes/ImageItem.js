export default class ImageItem {
    constructor(_imageUrl, _imageTitle, _imageDescription) {
        this._imageUrl = _imageUrl;
        this._imageTitle = _imageTitle;
        this._imageDescription = _imageDescription;
        this._id = ++ImageItem._count;
    }
    get id() {
        return this._id;
    }
    get imageUrl() {
        return this._imageUrl;
    }
    get imageTitle() {
        return this._imageTitle;
    }
    get imageDescription() {
        return this._imageDescription;
    }
}
ImageItem._count = 0;
